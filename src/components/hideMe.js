import React, { Component } from 'react'


let originalText = "Hide Me Click the Button"

export default class extends Component {
    constructor() {
        super();
        this.state = {
            hideText: originalText,
            isOpen: true,
        }

        this.toggleHide = this.toggleHide.bind(this)
    }
    toggleHide () {
        if (this.state.isOpen){
            this.setState({ hideText: " ", isOpen:false})
        }else{
            this.setState({ hideText: originalText, isOpen:true})
        }
    }


    render() {
        return(
            <div>
                <div className="textField">
                    <h2>{this.state.hideText}</h2>
                </div>

                <div className="hideBtnDiv">
                    <button onClick={this.toggleHide}>Click to Hide</button>
                </div>

            <hr />
            </div>
        )
    }
} 