import React from 'react'
import { render } from 'react-dom'
import Person from './Person'
import MyProvider from './MyProvider'

class App extends React.Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Person />
        </div>
      </MyProvider>
    )
  }
}

render(<App />, document.getElementById('root'))
