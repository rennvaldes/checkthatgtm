import { getWithQsParams } from './config';

export async function getDataWithReviews() {
  return await getWithQsParams('/reviews-section', {
    populate: {
      reviews: {
        populate: {
          video: true,
          avatar: true,
        },
      },
    },
  });
}
