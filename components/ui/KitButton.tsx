import ArrowRight from "@/components/icons/ArrowRight";
import ArrowLeft from "@/components/icons/ArrowLeft";
import { cn } from "@/lib/litebox-lib/utils/cn";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

type AnimationDirection =
  | "to-right"
  | "to-bottom-right"
  | "to-left"
  | "to-top-right";
type ButtonVariant = "primary" | "outline" | "secondary" | "tertiary" | "ghost";
type ButtonSize = "medium" | "large" | "custom";
type ArrowSize = "medium" | "large";

type Props = {
  isDisabled?: boolean;
  scrollTo?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  withAnimatedArrow?: AnimationDirection;
  variant: ButtonVariant;
  size: ButtonSize;
  arrowSize?: ArrowSize;
  extraProps?: any;
  bgOverlayStyles?: string;
  arrowClassName?: string;
  sameBrowserTab?: boolean;
  useLeftArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "text-ui-whitest bg-ui-black font-clash-display focus:bg-ui-blue hover:bg-ui-blue rounded-full font-medium transition-colors duration-200",
  outline:
    "text-ui-black hover:border-ui-black hover:bg-ui-black font-clash-display focus:bg-ui-black rounded-full border-[1px] border-ui-black/0 font-medium transition-colors duration-200 hover:bg-opacity-[8%] focus:bg-opacity-[8%] active:bg-opacity-[8%]",
  secondary:
    "rounded-full ease-in transition-color duration-[150ms] hover:bg-opacity-[8%] hover:bg-ui-black focus:bg-opacity-[8%] focus:bg-ui-black",
  tertiary:
    " text-ui-black bg-[#33FF9D] font-clash-display hover:bg-[#FDFDFF] focus:bg-[#FDFDFF] rounded-full font-medium transition-colors duration-200",
  ghost: "",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  medium: "w- px-[20px] py-[12px] text-[14px]",
  large: "px-[24px] py-[16px] text-[18px]",
  custom: "",
};

const ARROWS_ANIMATION_STYLES: Record<
  AnimationDirection,
  { arrow1: string; arrow2: string }
> = {
  "to-right": {
    arrow1:
      "-translate-x-[26px] group-hover:translate-x-0 group-focus:translate-x-0",
    arrow2: "group-hover:translate-x-[26px] group-focus:translate-x-[26px]",
  },
  "to-bottom-right": {
    arrow1:
      "rotate-45 -translate-x-[26px] -translate-y-[26px] group-hover:translate-x-0 group-focus:translate-x-0 group-hover:translate-y-0 group-focus:translate-y-0",
    arrow2:
      "rotate-45 group-hover:translate-x-[26px] group-focus:translate-x-[26px] group-hover:translate-y-[26px] group-focus:translate-y-[26px]",
  },
  "to-left": {
    arrow1:
      "translate-x-0 group-hover:-translate-x-[26px] group-focus:-translate-x-[26px]",
    arrow2:
      "translate-x-[26px] group-hover:translate-x-0 group-focus:translate-x-0",
  },
  "to-top-right": {
    arrow1:
      "-rotate-45 -translate-x-[26px] translate-y-[26px] group-hover:translate-x-0 group-focus:translate-x-0 group-hover:translate-y-0 group-focus:translate-y-0",
    arrow2:
      "-rotate-45 group-hover:translate-x-[26px] group-focus:translate-x-[26px] group-hover:translate-y-[-26px] group-focus:translate-y-[-26px]",
  },
};

const ARROW_SIZE_STYLES: Record<ArrowSize, string> = {
  medium: "w-[14px] h-[14px]",
  large: "",
};

function KitButton({
  onClick,
  isDisabled,
  href,
  scrollTo,
  className,
  children,
  withAnimatedArrow,
  bgOverlayStyles,
  variant,
  size,
  arrowSize = "large",
  extraProps,
  arrowClassName,
  sameBrowserTab,
  useLeftArrow = false,
  type = 'button',
}: React.PropsWithChildren<Props>) {
  const router = useRouter();
  const pathname = usePathname();

  const classNameProp = cn(
    "disabled:cursor-not-allowed cursor-pointer text-center",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    withAnimatedArrow && "group flex items-center gap-[16px]",
    className
  );

  const content = (
    <>
      {useLeftArrow && withAnimatedArrow && (
        <div className={cn("relative flex overflow-hidden", arrowClassName)}>
          <ArrowLeft
            className={cn(
              "absolute transition-transform duration-200",
              ARROWS_ANIMATION_STYLES[withAnimatedArrow].arrow1,
              ARROW_SIZE_STYLES[arrowSize]
            )}
          />
          <ArrowLeft
            className={cn(
              "transition-transform duration-200",
              ARROWS_ANIMATION_STYLES[withAnimatedArrow].arrow2,
              ARROW_SIZE_STYLES[arrowSize]
            )}
          />
        </div>
      )}
      {children}
      {!useLeftArrow && withAnimatedArrow && (
        <div className={cn("relative flex overflow-hidden", arrowClassName)}>
          <ArrowRight
            className={cn(
              "absolute transition-transform duration-200",
              ARROWS_ANIMATION_STYLES[withAnimatedArrow].arrow1,
              ARROW_SIZE_STYLES[arrowSize]
            )}
          />
          <ArrowRight
            className={cn(
              "transition-transform duration-200",
              ARROWS_ANIMATION_STYLES[withAnimatedArrow].arrow2,
              ARROW_SIZE_STYLES[arrowSize]
            )}
          />
        </div>
      )}
    </>
  );

  const onScrollClick = React.useCallback(() => {
    if (!scrollTo) return;
    // If target exists on current page, just scroll to it
    if (typeof document !== 'undefined') {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Otherwise, navigate to home and then scroll when ready
    if (pathname !== "/") router.push("/");
    setTimeout(() => {
      if (typeof document !== 'undefined') {
        document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, pathname !== "/" ? 500 : 0);
  }, [scrollTo, pathname, router]);

  let buttonElement = (
    <button
      onClick={scrollTo ? onScrollClick : onClick}
      disabled={isDisabled}
      {...extraProps}
      className={classNameProp}
    >
      {content}
    </button>
  );
  if (href)
    buttonElement = (
      <Link
        target={sameBrowserTab ? undefined : "_blank"}
        href={href}
        className={classNameProp}
        {...extraProps}
      >
        {content}
      </Link>
    );

  return variant === "outline" ? (
    <div className="border-ui-black relative rounded-full border-[1px]">
      {bgOverlayStyles && (
        <div
          className={cn(
            "absolute left-0 top-0 -z-10 h-full w-full rounded-full",
            bgOverlayStyles
          )}
        />
      )}
      {buttonElement}
    </div>
  ) : (
    buttonElement
  );
}

export default KitButton;
