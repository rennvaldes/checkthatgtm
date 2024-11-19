import { getWithQsParams } from './config';

export async function getDataWithFaq() {
  return await getWithQsParams('/faq-section', {
    populate: {
      questions: {
        populate: true,
      }
    },
  });
}
