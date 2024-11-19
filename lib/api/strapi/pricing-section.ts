import { getWithQsParams } from './config';

export async function getDataWithPlansWithBenefits() {
  return await getWithQsParams('/pricing-section', {
    populate: {
      plans: {
        populate: 'benefits',
      },
    },
  });
}
