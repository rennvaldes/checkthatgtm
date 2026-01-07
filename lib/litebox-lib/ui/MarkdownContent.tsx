import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";
import rehypeRaw from "rehype-raw";

import { slug } from "../utils/slug";
import { Skeleton } from "@/lib/shadcn/ui/skeleton";
import { ScrollAnimationWrapper } from "@/components/blog/blogAnimations";
import { GridMedia } from "@/components/home/grid/gridRoot";

interface CustomImageProps {
  properties: {
    src: string;
    alt: string;
  };
}

interface ImageDimensions {
  width: number;
  height: number;
}

interface ChildrenType {
  children: ReactNode;
}

interface LinkChildrenType extends ChildrenType {
  href: string;
}

const listIcon = (
  <svg
    viewBox="0 0 17 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 w-[1em] h-[1em] mr-[0.5em] mt-[0.225em]"
  >
    <path
      d="M1.25078 12.8938L6.83828 18.4813L16.1758 9.1438"
      stroke="#080A0D"
      strokeWidth="1.875"
      strokeLinejoin="bevel"
    />
  </svg>
);

const getImageDimensionsFromUrl = (imageUrl: string): ImageDimensions => {
  // Check if it's a relative path (local image) or a full URL
  try {
    const url = new URL(imageUrl);
    const width = Number(url.searchParams.get("width")) || 800;
    const height = Number(url.searchParams.get("height")) || 600;
    return { width, height };
  } catch (e) {
    // If it's a relative path, return default dimensions
    return { width: 800, height: 600 };
  }
};

const createCustomHeading = (Tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
  const CustomHeading = (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { children } = props;

    return (
      <Tag
        id={slug(String(children))}
        className="markdown-content-anchor"
        {...props}
      />
    );
  };

  return CustomHeading;
};

const AutoplayVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log("Autoplay prevented:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      className="w-full h-auto"
    >
      Your browser does not support the video tag.
    </video>
  );
};

/**
 * The `MarkdownContent` component renders Markdown with style customizations using `react-markdown` and `remark-gfm`. It supports predefined styles for Markdown elements and integrates with Tailwind CSS. Your project should include these dependencies to use the component.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/MarkdownContent-1-0-0-d41f8c43dbe24397a999107this 824724ce7
 *
 * @param content - The Markdown content to be rendered (string).
 *
 */
const MarkdownContent = ({
  content,
  isLoading,
}: {
  content: string;
  isLoading: boolean;
}) => {
  const components: any = {
    h1: createCustomHeading("h1"),
    h2: createCustomHeading("h2"),
    h3: createCustomHeading("h3"),
    h4: createCustomHeading("h4"),
    h5: createCustomHeading("h5"),
    h6: createCustomHeading("h6"),
    img: (image: { node: CustomImageProps }) => {
      const { src, alt } = image.node.properties;
      const { width, height } = getImageDimensionsFromUrl(src);

      return (
        <ScrollAnimationWrapper>
          <GridMedia size="normal">
            <figure>
              <img
                src={src}
                alt={alt || ""}
                width={width}
                height={height}
                className="w-full h-auto"
              />
              {alt && (
                <figcaption>
                  <p className="!text-sm cinema:!text-lg">{alt}</p>
                </figcaption>
              )}
            </figure>
          </GridMedia>
        </ScrollAnimationWrapper>
      );
    },
    video: (video: any) => {
      const { src, ...props } = video.node.properties;

      return (
        <ScrollAnimationWrapper>
          <GridMedia size="normal">
            <figure>
              <video src={src} controls className="w-full h-auto" {...props}>
                Your browser does not support the video tag.
              </video>
            </figure>
          </GridMedia>
        </ScrollAnimationWrapper>
      );
    },
    p: (paragraph: any) => {
      // Check if paragraph contains an image (to avoid div inside p error)
      const hasImage = paragraph.node?.children?.some(
        (child: any) => child.tagName === "img"
      );

      // Check if paragraph contains a video link
      const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
      const hasVideoLink = paragraph.node?.children?.some((child: any) => {
        if (child.tagName === "a" && child.properties?.href) {
          return videoExtensions.some((ext) =>
            child.properties.href.toLowerCase().endsWith(ext)
          );
        }
        return false;
      });

      if (hasImage || hasVideoLink) {
        return <div>{paragraph.children}</div>;
      }

      return <p>{paragraph.children}</p>;
    },
    strong: (strong: ChildrenType) => (
      <strong className="font-[580]">{strong.children}</strong>
    ),
    a: (link: LinkChildrenType) => {
      const videoExtensions = [".mp4", ".webm", ".ogg", ".mov"];
      const isVideo = videoExtensions.some((ext) =>
        link.href?.toLowerCase().endsWith(ext)
      );

      if (isVideo) {
        return (
          <ScrollAnimationWrapper>
            <GridMedia size="normal">
              <figure>
                <AutoplayVideo src={link.href} />
              </figure>
            </GridMedia>
          </ScrollAnimationWrapper>
        );
      }

      return (
        <a href={link.href} target="_blank" rel="noreferrer noopener">
          {link.children}
        </a>
      );
    },
    ul: (list: ChildrenType) => (
      <ul className="list-none pl-0 my-[2rem]">{list.children}</ul>
    ),
    ol: (list: ChildrenType) => <ol>{list.children}</ol>,
    li: (listItem: ChildrenType) => (
      <li className="flex items-start">
        {listIcon}
        <span>{listItem.children}</span>
      </li>
    ),
    table: ({ children }: ChildrenType) => <table>{children}</table>,
    th: ({ children }: ChildrenType) => <th>{children}</th>,
    td: ({ children }: ChildrenType) => <td>{children}</td>,
    blockquote: ({ children }: ChildrenType) => (
      <GridMedia size="medium">
        <figure>
          <blockquote className="font-serif font-normal text-[2rem] tablet:text-[2.625rem] desktop:text-[3.75rem] cinema:text-[5rem] tracking-[-0.01em] tablet:tracking-[-0.02em] leading-[1.2] m-0 text-black">
            <span className="ml-[-0.4em]">&quot;</span>
            {children}
            &quot;
          </blockquote>
        </figure>
      </GridMedia>
    ),
  };

  return isLoading ? (
    <Skeleton className="h-[2000px] w-full" />
  ) : (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm, rehypeUnwrapImages]}
      rehypePlugins={[rehypeRaw]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
