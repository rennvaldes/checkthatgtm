import { getWithQsParams } from './config';

export async function getCards() {
  return await getWithQsParams('/results-section', {
    populate: {
      cards : {
        populate: 'logo'
      }
    },
  });
}
