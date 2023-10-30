// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerating = () => {
    this.setState(prev => ({count: prev.count + 10}))
  }

  onBrake = () => {
    this.setState(prev => ({count: prev.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.onAccelerating}
            className="acc-button"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} className="brake-button" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
