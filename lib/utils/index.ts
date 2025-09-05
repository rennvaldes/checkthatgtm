import { STRAPI_BASE_URL, STRAPI_IS_LOCAL_ENV } from '@/static/constants';
import { CardData } from '@/static/types';
import { cloneDeep } from 'lodash';

/**
 * Divides the provided array into as many sub-arrays as the specified divisions.
 */
export function divide<T>(array: Array<T>, divisions: number) {
  const _array = cloneDeep(array);

  if (divisions === 1) return _array;

  let subArrays: T[][] = [];

  for (let g = 0; g < divisions; g++)
    subArrays.push(
      _array.slice(
        Math.floor((g / divisions) * _array.length),
        Math.floor(((g + 1) / divisions) * _array.length)
      )
    );

  return subArrays;
}

export function getCardFromStrapiRawData(rawCardData: any) {
  if (!rawCardData) return {};
  const { id, ...attributes } = rawCardData;

  // Safely access category name
  const category = attributes.category?.name || attributes.category;
  const imageData = attributes.image || attributes.featured_image;
  const image16x9Data = attributes.image_16x9;
  const metaImageData = attributes.meta_image;
  const publisher_avatar = attributes.publisher_avatar;
  const authorAvatarData = (attributes as any).author_avatar;
  const companyLogoData = (attributes as any).company_logo;

  let related_articles;
  if (attributes.related_articles) {
    const relatedArticlesRawData = attributes.related_articles;
    related_articles = relatedArticlesRawData.map(getCardFromStrapiRawData);
  }

  // Handle URLs properly based on environment
  const getImageUrl = (imageObj: any) => {
    if (!imageObj?.url) return '';
    // If it's already a full URL (starts with http/https), use it as is
    if (imageObj.url.startsWith('http')) {
      return imageObj.url;
    }
    // Only prepend base URL for relative paths
    return `${STRAPI_BASE_URL}${imageObj.url}`;
  };

  return {
    ...attributes,
    id,
    category,
    image: getImageUrl(imageData),
    image_16x9: getImageUrl(image16x9Data),
    meta_image: getImageUrl(metaImageData),
    publisher_avatar: getImageUrl(publisher_avatar),
    author_avatar: getImageUrl(authorAvatarData),
    company_logo: getImageUrl(companyLogoData),
    quote: attributes.quote
      ? {
          ...attributes.quote,
          author_image_url: getImageUrl(attributes.quote.author_image),
          company_logo_url: getImageUrl(attributes.quote.company_logo),
        }
      : attributes.quote,
    related_articles,
    visits: attributes.visits,
    pages: attributes.pages,
    description: attributes.description,
  };
}

export function getPlaceholderCards(amount: number) {
  return Array.from({ length: amount }).map((_, index) => ({
    documentId: `${index + 1}`,
    id: index + 1,
    image: '',
    image_alt: 'placeholder',
    category: 'Stories',
    title: '',
    publisher_name: 'Author',
    publisher_avatar:'',
  }));
}
