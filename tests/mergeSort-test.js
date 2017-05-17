import { expect, assert } from 'chai';
import { merge, split } from '../scripts/mergeSort'
import genRanNum from '../scripts/genRanNum'

describe('Merge Sort', () => {
  it('should be 2 functions', () => {
    assert.isFunction(merge);
    assert.isFunction(split);
  });

  it('should sort an unsorted array', () => {
    const arr = [5,4,3,2,1];

    expect(split(arr)).to.deep.equal([1,2,3,4,5]);
  });

  it.skip('should sort an array of letters', () => {
    const arr = ['c', 'd', 'p', 'f', 'a'];

    expect(split(arr)).to.deep.equal(['a', 'c', 'd', 'f', 'p']);
  });

  it.skip('should throw an error when the argument is not an array', () => {
    expect(split('something')).to.equal('idk');
  });

  it.skip('should move min number to front', () => {
    var randomArray = genRanNum(5)
    var min = Math.min(...randomArray);

    expect(split(randomArray)[0]).to.equal(min);
  });

  it('should sort large arrays', () => {
    var ranArray = genRanNum(100000);
    var compSorted = [...ranArray].sort((a, b) => a - b);

    expect(split(ranArray)).to.deep.equal(compSorted);
  });
})
