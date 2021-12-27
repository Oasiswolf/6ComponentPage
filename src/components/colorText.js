import React, { Component } from 'react'


export default class ColorMeText extends Component {
    constructor() {
        super()
        this.state = {
            heading: "Color Me",
            color: "black",
            colorInput: "black",
            headingInput: "Color Me"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            color: this.state.colorInput,
            heading: this.state.headingInput
        })
    }

    render() {
        return(
            <div>
                <hr />
                <h2 style = {{ color: this.state.color }}>{this.state.heading}</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="colorInput" type="color" onChange={this.handleChange} />
                    <input name="headingInput" type="text" placeholder= "Type to change text" onChange={this.handleChange} />
                    <button type="submit" >Submit</button>

                </form>
                <hr />
            </div>
        )
    }
}