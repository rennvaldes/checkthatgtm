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
        Math.floor((g / divisions) * _array.length), //This math magic here.
        Math.floor(((g + 1) / divisions) * _array.length)
      )
    );

  return subArrays;
}

export function getCardFromStrapiRawData(rawCardData: any) {
  if (!rawCardData) return {};
  const { id, ...attributes } = rawCardData;

  const category = attributes.category.name;
  const imageData = attributes.image;
  const publisher_avatar = attributes.publisher_avatar;

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
    publisher_avatar: getImageUrl(publisher_avatar),
    related_articles,
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
