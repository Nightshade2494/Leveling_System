export const levelFromPoints = (points) => {
  if (points < 100) return 1;
  if (points < 250) return 2;
  if (points < 500) return 3;
  if (points < 900) return 4;
  return 5 + Math.floor((points - 900) / 500);
};
