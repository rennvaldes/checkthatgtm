import { getWithQsParams } from './config';

export async function getDataWithLinks() {
  return await getWithQsParams('/footer', {
    populate: {
      bottom_links: true,
      social_column_links: true,
    },
  });
}
