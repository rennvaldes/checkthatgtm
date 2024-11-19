import { getWithQsParams } from './config';

export async function getLogos() {
  return await getWithQsParams('/companies-helped-grow', {
    populate: 'logos',
  });
}
