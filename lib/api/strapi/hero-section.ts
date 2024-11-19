import { getWithQsParams } from './config';

export async function getMainData() {
  return await getWithQsParams('/hero-section', {
    populate: {
      desktop_video: true,
      mobile_video: true,
    },
  });
}

export async function getPercentageCard() {
  return await getWithQsParams('/hero-section-percentage-card');
}

export async function getStatsCard() {
  return await getWithQsParams('/hero-section-stats-card', {
    populate: 'hero_section_stats',
  });
}
