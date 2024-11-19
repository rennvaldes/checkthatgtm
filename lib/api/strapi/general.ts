import { getWithQsParams } from './config';

export async function getData() {
  return await getWithQsParams('/general');
}
