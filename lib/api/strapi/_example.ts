import { getWithQsParams } from './config';

export async function getPlaceholdersWithCards() {
  return await getWithQsParams('/placeholders', {
    populate: 'placeholder_cards',
  });
}

export async function getPlaceholderCardsOfPlaceholder(placeholderId: number) {
  return await getWithQsParams(`/placeholders`, {
    populate: {
      placeholder_cards: {
        filters: {
          placeholder: {
            id: {
              $eq: placeholderId,
            },
          },
        },
      },
    },
  });
}
