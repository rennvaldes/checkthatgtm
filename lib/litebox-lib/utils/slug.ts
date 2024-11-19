/**
 * The `slug` function converts a given string into a URL-friendly slug.
 * Version: 1.0.0
 * Docs: https://www.notion.so/litebox/slug-1-0-0-1e7a8a051a4847ad979afbe160e5e414
 *
 * @param text - The string to be transformed into a slug. This should ideally be a meaningful sequence of words.
 *
 * @returns A URL-friendly slug. This is a lowercase string with special characters removed, spaces replaced with hyphens, and no leading or trailing hyphens.
 */
export const slug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};
