import { expect, assert } from 'chai';
import insertionSort from '../scripts/insertionSort'
import genRanNum from '../scripts/genRanNum'

describe('Insertion Sort', () => {
  it.skip('should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it.skip('should sort an unsorted array', () => {
    const arr = [5,4,3,2,1];

    expect(insertionSort(arr)).to.deep.equal([1,2,3,4,5]);
  });

  it.skip('should sort an array of letters', () => {
    const arr = ['c', 'd', 'p', 'f', 'a'];

    expect(insertionSort(arr)).to.deep.equal(['a', 'c', 'd', 'f', 'p']);
  });

  it.skip('should throw an error when the argument is not an array', () => {
    expect(insertionSort('something')).to.equal('idk');
  });

  it.skip('should move min number to front', () => {
    var randomArray = genRanNum(5)
    var min = Math.min(...randomArray);

    expect(insertionSort(randomArray)[0]).to.equal(min);
  });

  it.skip('should sort large arrays', () => {
    var ranArray = genRanNum(15000);
    // 13000 max
    var compSorted = [...ranArray].sort((a, b) => a - b);

    expect(insertionSort(ranArray)).to.deep.equal(compSorted);
  });
})
