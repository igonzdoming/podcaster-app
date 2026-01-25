export const formatDuration = (duration?: number) => {
  const minutes = Math.floor((duration ?? 0) / 60000);
  const seconds = String(Math.floor(((duration ?? 0) % 60000) / 1000)).padStart(
    2,
    '0'
  );

  return `${minutes}:${seconds}`;
};
