/**
 * Calcuate mean from numbers
 * @param numbers 
 * @returns number
 */
const mean = function (numbers: Array<number>) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return  total / numbers.length;
};


/**
 * Calcuate median from numbers
 * @param numbers 
 * @returns number
 */
const median = function (numbers: Array<number>) {
  const { length } = numbers;

  numbers.sort((a, b) => a - b);

  if (length % 2 === 0) {
    return (numbers[length / 2 - 1] + numbers[length / 2]) / 2;
  }

  return numbers[(length - 1) / 2];
};

/**
 * Calcuate mode from numbers
 * @param numbers 
 * @returns number
 */
const mode = function (numbers: Array<number>) {
  const mode = new Array<number>();
  let max = 0,
    count = 0;

  for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }
  return max;
};

export  { mean, median, mode };
