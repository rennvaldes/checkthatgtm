import { getWithQsParams } from './config';

export async function getMainDataWithLotties() {
  return await getWithQsParams('/parallax-section', {
    populate: 'lotties',
  });
}
