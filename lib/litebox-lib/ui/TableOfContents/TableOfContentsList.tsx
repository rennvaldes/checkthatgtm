import { useMemo } from 'react';
import { cn } from '../../utils/cn';
import { slug } from '../../utils/slug';

type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface TableOfContentsListProps {
  content: string;
  currentHeaderId: string | null;
  onCurrentHeaderIdChange: (id: string) => void;
  title?: string;
  headers?: Header[];
  className?: string;
}

const DEFAULT_HEADERS: Header[] = ['h2', 'h3', 'h4', 'h5', 'h6'];

const SIZE_TO_MARGIN_MAP: Record<string, string> = {
  '3': 'ml-4',
  '4': 'ml-8',
  '5': 'ml-12',
  '6': 'ml-16',
};

const getMarkdownHeaders = (markdown: string, selectors: string[]) => {
  const headers =
    markdown.match(/(?<flag>#{1,6})\s+(?<content>.+)|<h[1-6]>.*<\/h[1-6]>/g)?.map(h => {
      const textRegex = /#\S+|\(.*\)|[[\]]|<[^>]*>|\*/gi;
      const text = h.replace(textRegex, '').replace('# ', '').trim();
      const id = slug(text);

      // check if header is in markdown or html form; detect tag accordingly
      const isMarkdownHeader = h.match(/#+/)?.[0].length;

      return {
        tagName: isMarkdownHeader ? `h${isMarkdownHeader}` : `h${h.match(/\d/)}`,
        id,
        text,
      };
    }) || [];

  return headers.filter(h => selectors.includes(h.tagName));
};

const getHeaderMargin = (tagname: string) => {
  const size = tagname.split('')[1];
  if (size === '2') return '';

  return SIZE_TO_MARGIN_MAP[size];
};

const TableOfContentsList = ({
  content,
  currentHeaderId,
  onCurrentHeaderIdChange,
  title,
  headers = DEFAULT_HEADERS,
  className,
}: TableOfContentsListProps) => {
  const markdownHeaders = useMemo(() => {
    return getMarkdownHeaders(content, headers);
  }, [content, headers]);

  return (
    <ul
      className={cn(
        'w-full max-w-80 flex-col gap-2 self-start border-l border-l-[#4338CA] border-opacity-45 px-4 pb-2 md:flex lg:sticky lg:top-8 lg:mx-2 lg:ml-0 lg:border-l-0 lg:pl-0',
        className
      )}>
      {title && <h3 className='font-bold'>{title}</h3>}
      {markdownHeaders.map(({ id, text, tagName }) => (
        <li key={`link-to-${id}`} className={cn(getHeaderMargin(tagName), 'text-[14px] leading-[30px]')}>
          <a
            href={`#${id}`}
            className={cn(
              'text-ui-black/60 flex h-fit w-fit transition-colors duration-500 hover:text-[#4338CA]',
              currentHeaderId === id && '!text-ui-black/100 font-medium'
            )}
            onClick={() => onCurrentHeaderIdChange(id)}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContentsList;
