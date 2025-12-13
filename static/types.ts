export type IconProps = {
  className?: string;
  extraProps?: any;
};

export type CardData = {
  documentId: string;
  id: number;
  image: string;
  image_alt: string;
  category: string;
  title: string;
  description?: string;
  publisher_avatar: string;
  publisher_name: string;
  publisher_legend?: string;
  slug?: string;
  className?: string;
  visits?: number | string;
  pages?: number | string;
  timeframe?: string;
};
