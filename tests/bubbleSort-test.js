import { expect, assert } from 'chai';
import bubbleSort from '../scripts/bubbleSort'
import genRanNum from '../scripts/genRanNum'

describe('Bubble Sort', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should sort an unsorted array', () => {
    const arr = [5,4,3,2,1];

    expect(bubbleSort(arr)).to.deep.equal([1,2,3,4,5]);
  });

  it('should sort an array of letters', () => {
    const arr = ['c', 'd', 'p', 'f', 'a'];

    expect(bubbleSort(arr)).to.deep.equal(['a', 'c', 'd', 'f', 'p']);
  });

  it.skip('should throw an error when the argument is not an array', () => {
    expect(bubbleSort('something')).to.equal('idk');
  });

  it('should move min number to front', () => {
    var randomArray = genRanNum(5)
    var min = Math.min(...randomArray);

    expect(bubbleSort(randomArray)[0]).to.equal(min);
  });

  it('should sort large arrays', () => {
    var ranArray = genRanNum(3000);
    // 13000 max
    var compSorted = [...ranArray].sort((a, b) => a - b);

    expect(bubbleSort(ranArray)).to.deep.equal(compSorted);
  });
})
