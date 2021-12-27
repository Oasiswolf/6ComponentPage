import React, { Component } from 'react'

// Have someText to align done
// get it to align left, center, and right

export default class AlignSection extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    render() {
    
        return(
            <div>
                <div className='AlignMe'>
                    <h2 id='alignTextHere'>Align Me</h2>
                </div>

                <div className='buttonDiv'>
                <button className='buttonL' >Left</button>
                <button className='buttonC' >Center</button>
                <button className='buttonR' >Right</button>

                </div>
            <hr />
            </div>
        )
    }
}