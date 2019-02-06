import React from 'react'

const Counter = (props) => {
  return <div className={props.myStyle}>
    Button clicked: {props.clicked} times.
  </div>
}

export const BlueCounter = props => <Counter clicked={props.clicked} myStyle="blue" />
export const RedCounter = props => <Counter clicked={props.clicked} myStyle="red" />

export default Counter;