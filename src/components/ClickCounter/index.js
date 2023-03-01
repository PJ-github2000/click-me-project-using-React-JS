/* eslint-disable lines-between-class-members */
/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  increaseCount = () => {
    this.setState(pre => ({count: pre.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The button has been clicked <span className="count">{count} </span>
          times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button className="button" onClick={this.increaseCount}>
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
