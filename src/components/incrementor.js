import React, { Component } from 'react'



export default class IncrementText extends Component {
    constructor() {
        super()
        this.state = {
            heading: 12,
            increment: 2
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)

    }

    handleChange(event) {
        this.setState({
            increment: event.target.value,
        })
    }

    handleIncrease() {
        for (let i = this.state.heading; i < 32; i++) {
            this.setState({
                heading: this.state.heading + parseInt(this.state.increment)
            })
        }
    }
    handleDecrease() {
        for (let i = this.state.heading; i > 2; i--) {
            this.setState({
                heading: this.state.heading - parseInt(this.state.increment)
            })
        }
    }

    render() {
        return(
            <div>
                <hr />
                <h2 style={{ fontsize: this.state.heading }}>{this.state.heading}px</h2>
                <input type="number" placeholder="Increment by ..." onChange={this.handleChange}/>
                <button onClick={this.handleIncrease}>Increase</button>
                <button onClick={this.handleDecrease}>Decrease</button>
                <hr />
            </div>
        )
    }
}