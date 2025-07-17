import { ElementType, HTMLAttributes, ReactNode } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypeRaw from 'rehype-raw';

import { slug } from '../utils/slug';
import { Skeleton } from '@/lib/shadcn/ui/skeleton';

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
  // eslint-disable-next-line react/no-unused-prop-types
  children: ReactNode;
}

interface LinkChildrenType extends ChildrenType {
  href: string;
}

const listIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='text-ui-blue'>
    <path d='M20 6 9 17l-5-5' />
  </svg>
);

const getImageDimensionsFromUrl = (imageUrl: string): ImageDimensions => {
  const url = new URL(imageUrl);
  const width = Number(url.searchParams.get('width')) || 800;
  const height = Number(url.searchParams.get('height')) || 600;

  return { width, height };
};

const createCustomHeading = (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') => {
  const CustomHeading = (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { children } = props;

    return <Tag id={slug(String(children))} className="markdown-content-anchor" {...props} />;
  };

  return CustomHeading;
};

/**
 * The `MarkdownContent` component renders Markdown with style customizations using `react-markdown` and `remark-gfm`. It supports predefined styles for Markdown elements and integrates with Tailwind CSS. Your project should include these dependencies to use the component.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/MarkdownContent-1-0-0-d41f8c43dbe24397a999107824724ce7
 *
 * @param content - The Markdown content to be rendered (string).
 *
 */
const MarkdownContent = ({ content, isLoading }: { content: string; isLoading: boolean }) => {
  const components: any = {
    h1: createCustomHeading('h1'),
    h2: createCustomHeading('h2'),
    h3: createCustomHeading('h3'),
    h4: createCustomHeading('h4'),
    h5: createCustomHeading('h5'),
    h6: createCustomHeading('h6'),
    img: (image: { node: CustomImageProps }) => {
      const { src, alt } = image.node.properties;
      const { width, height } = getImageDimensionsFromUrl(src);

      return (
        <div className='xl:w-[1200px] xl:max-w-[100dvw] xl:-translate-x-[24.5%] xl:relative xl:py-12 xl:bg-ui-white xl:z-20 xl:-my-8'>
          <div className='xl:absolute xl:inset-0 xl:bg-ui-white' />
          <img src={src} alt={alt} width={width} height={height} className='w-full relative z-20 m-0' />
        </div>
      );
    },
    p: (paragraph: ChildrenType) => (
      <p>{paragraph.children}</p>
    ),
    strong: (strong: ChildrenType) => <strong>{strong.children}</strong>,
    a: (link: LinkChildrenType) => (
      <a
        href={link.href}
        target='_blank'
        rel='noreferrer noopener'>
        {link.children}
      </a>
    ),
    ul: (list: ChildrenType) => <ul className='list-none pl-0'>{list.children}</ul>,
    ol: (list: ChildrenType) => <ol>{list.children}</ol>,
    li: (listItem: ChildrenType) => (
      <li className='flex items-start gap-2'>
        <span className='translate-y-[5px]'>{listIcon}</span>
        <span>{listItem.children}</span>
      </li>
    ),
    table: ({ children }: ChildrenType) => (
      <table>{children}</table>
    ),
    th: ({ children }: ChildrenType) => (
      <th>{children}</th>
    ),
    td: ({ children }: ChildrenType) => <td>{children}</td>,
  };

  return isLoading ? (
    <Skeleton className='h-[2000px] w-full' />
  ) : (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkGfm, rehypeUnwrapImages]}
      rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
