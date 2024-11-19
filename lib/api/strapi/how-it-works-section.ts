import { getWithQsParams } from './config';

export async function getDataWithSteps() {
  return await getWithQsParams('/how-it-works-section', {
    populate: {
      steps: {
        populate: 'image',
      }
    },
  });
}
