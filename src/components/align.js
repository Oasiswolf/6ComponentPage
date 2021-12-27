import React, { Component } from 'react'

// Have someText to align done
// get it to align left, center, and right

export default class AlignSection extends Component {
    constructor() {
        super()
        this.state = {
            heading: "Align-Me",

        }
        this.handleLeft = this.handleLeft.bind(this)
    }

    handleLeft() {
        this.setState({
            textAlign:'left'
        })
    }

    render() {
    
        return(
            <div>
                <div className='AlignMe'>
                    <h2 style={{textAlign:'center' }}>{this.state.heading}</h2>
                </div>

                <div className='buttonDiv'>
                <button onCLick={this.handleLeft} >Left</button>
                <button className='buttonC' >Center</button>
                <button className='buttonR' >Right</button>

                </div>
            <hr />
            </div>
        )
    }
}