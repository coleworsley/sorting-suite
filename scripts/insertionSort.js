const insertionSort = (array) => {

  for (let i = 1; i < array.length; ++i) {
    let temp = array[i];
    let j = i - 1;

    for (; j >= 0 && array[j] > temp; --j) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
};

export default insertionSort;
