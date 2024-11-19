import { ElementType, HTMLAttributes, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
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
    className='mr-2 inline-block h-6 w-6 text-[#4338CA]'>
    <path d='M20 6 9 17l-5-5' />
  </svg>
);

const getImageDimensionsFromUrl = (imageUrl: string): ImageDimensions => {
  const url = new URL(imageUrl);
  const width = Number(url.searchParams.get('width')) || 800;
  const height = Number(url.searchParams.get('height')) || 600;

  return { width, height };
};

const createCustomHeading = (Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6', className: string) => {
  const CustomHeading = (props: HTMLAttributes<HTMLHeadingElement>) => {
    const { children } = props;

    return <Tag id={slug(String(children))} className={`${className} markdown-content-anchor py-2`} {...props} />;
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
  const components: Record<string, ElementType> = {
    h1: createCustomHeading('h1', 'text-[30px] leading-[42px] font-bold'),
    h2: createCustomHeading('h2', 'text-[24px] leading-[30px] mt-2 lg:mt-4 font-medium'),
    h3: createCustomHeading('h3', 'text-[20px] leading-[24px] mt-1 lg:mt-2 font-medium'),
    h4: createCustomHeading('h4', 'text-[20px] leading-[23px] mt-1 lg:mt-1 font-medium'),
    h5: createCustomHeading('h5', 'text-[20px] leading-[23px] font-medium'),
    h6: createCustomHeading('h6', 'text-[20px] leading-[23px] font-medium'),
    img: (image: { node: CustomImageProps }) => {
      const { src, alt } = image.node.properties;
      const { width, height } = getImageDimensionsFromUrl(src);

      return <img src={src} alt={alt} width={width} height={height} className='mb-4 w-full' />;
    },
    p: (paragraph: ChildrenType) => (
      <p className='font-elza pb-3 pt-2 text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px]'>
        {paragraph.children}
      </p>
    ),
    strong: (strong: ChildrenType) => <strong className='font-[600]'>{strong.children}</strong>,
    a: (link: LinkChildrenType) => (
      <a
        href={link.href}
        target='_blank'
        rel='noreferrer noopener'
        className='font-elza text-[14px] leading-[21px] text-[#4338CA] underline lg:text-[16px] lg:leading-[24px]'>
        {link.children}
      </a>
    ),
    ul: (list: ChildrenType) => <ul className='pb-6 pl-6 pt-2'>{list.children}</ul>,
    li: (listItem: ChildrenType) => (
      <li className='font-elza text-[14px] leading-[21px] lg:text-[16px] lg:leading-[24px]'>
        {listIcon}
        {listItem.children}
      </li>
    ),
    table: ({ children }: ChildrenType) => (
      <table className='mb-8 w-full border-collapse border-spacing-0 overflow-hidden rounded-t-lg'>{children}</table>
    ),
    th: ({ children }: ChildrenType) => (
      <th className='border border-[#3730A3] bg-[#3730A3] p-2 text-white'>{children}</th>
    ),
    td: ({ children }: ChildrenType) => <td className='border border-gray-300 p-2 text-center'>{children}</td>,
  };

  return isLoading ? (
    <Skeleton className='mt-[32px] h-[2000px] w-full' />
  ) : (
    <ReactMarkdown
      className='mt-[32px] px-[20px] lg:px-0'
      components={components}
      remarkPlugins={[remarkGfm, rehypeUnwrapImages]}
      rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownContent;
