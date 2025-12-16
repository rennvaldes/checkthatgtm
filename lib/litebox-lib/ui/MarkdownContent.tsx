import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from "rehype-unwrap-images";
import rehypeRaw from "rehype-raw";

import { slug } from "../utils/slug";
import { Skeleton } from "@/lib/shadcn/ui/skeleton";
import { ScrollAnimationWrapper } from "@/components/blog/blogAnimations";

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
    width="17"
    height="27"
    viewBox="0 0 17 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
  const url = new URL(imageUrl);
  const width = Number(url.searchParams.get("width")) || 800;
  const height = Number(url.searchParams.get("height")) || 600;

  return { width, height };
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
          <div className="w-screen border-t-[0.5px] border-b-[0.5px] border-border  my-12 lg:my-44  relative left-1/2 -translate-x-1/2">
            <picture className="block max-w-[1280px] mx-auto p-4 lg:p-5 lg:border-x-[0.5px] border-border">
              <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-full h-auto"
              />
            </picture>
          </div>
        </ScrollAnimationWrapper>
      );
    },
    video: (video: any) => {
      const { src, ...props } = video.node.properties;

      return (
        <ScrollAnimationWrapper>
          <div
            className="w-screen border-t-[0.5px] border-b-[0.5px] border-border my-12 lg:my-44 relative left-1/2
    -translate-x-1/2"
          >
            <div className="block max-w-[1280px] mx-auto p-4 lg:p-5 lg:border-x-[0.5px] border-border">
              <video src={src} controls className="w-full h-auto" {...props}>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
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
            <div className="w-screen border-t-[0.5px] border-b-[0.5px] border-border my-12 lg:my-44 relative left-1/2 -translate-x-1/2">
              <div className="block max-w-[1280px] mx-auto lg:border-x-[0.5px] border-border">
                <AutoplayVideo src={link.href} />
              </div>
            </div>
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
      <ul className="list-none pl-0">{list.children}</ul>
    ),
    ol: (list: ChildrenType) => <ol>{list.children}</ol>,
    li: (listItem: ChildrenType) => (
      <li className="flex items-start gap-3">
        {listIcon}
        <span>{listItem.children}</span>
      </li>
    ),
    table: ({ children }: ChildrenType) => <table>{children}</table>,
    th: ({ children }: ChildrenType) => <th>{children}</th>,
    td: ({ children }: ChildrenType) => <td>{children}</td>,
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
