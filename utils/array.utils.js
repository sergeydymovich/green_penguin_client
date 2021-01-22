export const sumArrayObjField = (arr, field) => {
  return arr
    .reduce((sum, current) => sum + current[field] * current.count, 0)
    .toFixed(2);
};
