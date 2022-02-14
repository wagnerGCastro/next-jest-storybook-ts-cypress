export const sum = (num1: string, num2: string) => {
  const int1 = parseInt(num1, 10);
  const int2 = parseInt(num2, 10);

  if (Number.isNaN(int1) || Number.isNaN(int2)) {
    // console.log('Error! Please check your input')
    throw new Error('Please check your input');
  }

  return int1 + int2;
};
