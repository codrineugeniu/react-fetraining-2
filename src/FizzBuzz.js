import React from 'react';

class FizzBuzz extends React.Component {

  calculate() {
    let result = [];
    for (let i = 1; i <= 100; i++) {

      if (i % 3 === 0 && i % 5 === 0) {
        result.push('Fizz Buzz')
      } else if (i % 3 === 0) {
        result.push('Fizz')
      } else if (i % 5 === 0) {
        result.push('Buzz')
      } else {
        result.push(i)
      }
    }
    console.log(result)
    return result.join(', ')
  }

  render() {
    return <div>
      <p>
        Write a program that prints the numbers from 1 to 100.<br />
        But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.<br />
        For numbers which are multiples of both three and five print “FizzBuzz”." <br />
      </p>
      <h2>Solution</h2>
      <p>
        {this.calculate()}
      </p>
    </div>
  }
}

export default FizzBuzz;
