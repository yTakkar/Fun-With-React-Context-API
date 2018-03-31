import React from 'react'
import MyContext from './MyContext'

export default class MyProvider extends React.Component {
  state = {
    name: 'Takkar',
    age: 19,
    city: 'Mumbai'
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          incrementAge: () => this.setState({ age: this.state.age + 1 }),
          decrementAge: () => this.setState({ age: this.state.age - 1 })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
