import React from 'react'
import MyContext from './MyContext'

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => {
            let { state } = context
            return (
              <React.Fragment>
                <p>
                  Name: {state.name}
                  <br />
                  Age: {state.age}
                </p>
                <button onClick={context.incrementAge}>Increment age</button>
                <button onClick={context.decrementAge}>Decrement Age</button>
              </React.Fragment>
            )
          }}
        </MyContext.Consumer>
      </div>
    )
  }
}
