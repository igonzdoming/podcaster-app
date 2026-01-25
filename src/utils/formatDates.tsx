export const formatDateMMDDYYYY = (isoDate: Date): string => {
  const date = new Date(isoDate);

  return `${String(date.getUTCMonth() + 1).padStart(2, '0')}/${String(
    date.getUTCDate()
  ).padStart(2, '0')}/${date.getUTCFullYear()}`;
};
