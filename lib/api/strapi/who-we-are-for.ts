import { getWithQsParams } from './config';

export async function getMainData() {
  return await getWithQsParams('/who-we-are-for');
}
