
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).


/*

FUNCTIONAL CODE

*/
function powersOfTwo(n){
    const TWO = 2;
    let result = [];
    if(n > 0){
         result.push(1);
      for(let i = 0; i < n; i++) {
        result.push((result[result.length - 1] ) * TWO)
      }
    }
          
    else if(n == 0) {
       result = [1];
      }
    
    else {
      console.log("No negative integers allowed")
    }
    return result;
  }

  /*

TEST CODE
  */

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", function(){
  it("Testing for fixed tests", () => {
    assert.deepEqual(powersOfTwo(0), [1])
    assert.deepEqual(powersOfTwo(1), [1, 2])
    assert.deepEqual(powersOfTwo(4), [1, 2, 4, 8, 16])
  })
});