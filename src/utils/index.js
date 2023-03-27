export const timer = (deadline) => {
  const currentDate = Number(new Date());
  if (deadline > currentDate) {
    return true;
  }
  return false;
};
