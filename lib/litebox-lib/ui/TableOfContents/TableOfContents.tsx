'use client';

import { useState } from 'react';
import useOnEnterView from '../../hooks/useOnEnterView';
import TableOfContentsList, { TableOfContentsListProps } from './TableOfContentsList';

type Header = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const DEFAULT_HEADERS: Header[] = ['h2', 'h3', 'h4', 'h5', 'h6'];

export interface TableOfContentsProps
  extends Omit<TableOfContentsListProps, 'currentHeaderId' | 'onCurrentHeaderIdChange'> {
  headerSelector?: string;
}

/**
 * The `TableOfContents` component generates a table of contents from a given markdown content. It also provides a scroll spy functionality to highlight the current section in view.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/TableOfContents-1-0-0-fc9501ee2e734f59a525f800ddbed77e
 *
 * @param content - The markdown content from which the table of contents will be generated.
 * @param title - The title of the table of contents (optional).
 * @param headers - An array of header tags to include in the table of contents. Defaults to `['h2', 'h3', 'h4', 'h5', 'h6']` (optional).
 * @param headerSelector - A CSS selectors used to select the elements to be observed. Each selector should be a string representing a valid CSS selector. Defaults to `'.anchor'` (optional).
 * @param className - - Additional CSS classes that can be passed to customize the styling of the component.
 */
const TableOfContents = ({
  headerSelector = '.markdown-content-anchor',
  headers = DEFAULT_HEADERS,
  ...props
}: TableOfContentsProps) => {
  const [currentHeaderId, setCurrentHeaderId] = useState<string | null>(null);

  useOnEnterView({
    onEnterView: setCurrentHeaderId,
    options: { rootMargin: '0px 0px -85% 0px', threshold: 0.5 },
    selectors: [headerSelector],
  });

  return (
    <TableOfContentsList
      {...props}
      currentHeaderId={currentHeaderId}
      onCurrentHeaderIdChange={setCurrentHeaderId}
      headers={headers}
    />
  );
};

export default TableOfContents;
