import { expect, assert } from 'chai';
import quickSort from '../scripts/quickSort'
import genRanNum from '../scripts/genRanNum'

describe('Quick Sort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it('should sort an unsorted array', () => {
    const arr = [5,4,3,2,1];

    expect(quickSort(arr)).to.deep.equal([1,2,3,4,5]);
  });

  it('should sort an array of letters', () => {
    const arr = ['c', 'd', 'p', 'f', 'a'];

    expect(quickSort(arr)).to.deep.equal(['a', 'c', 'd', 'f', 'p']);
  });

  it.skip('should throw an error when the argument is not an array', () => {
    expect(quickSort('something')).to.equal('idk');
  });

  it('should move min number to front', () => {
    var randomArray = genRanNum(5)
    var min = Math.min(...randomArray);

    expect(quickSort(randomArray)[0]).to.equal(min);
  });

  it('should sort large arrays', () => {
    var ranArray = genRanNum(50000);
    var compSorted = [...ranArray].sort((a, b) => a - b);

    expect(quickSort(ranArray)).to.deep.equal(compSorted);
  });
})
