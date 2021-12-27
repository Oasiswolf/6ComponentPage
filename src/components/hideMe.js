// import React, { Component } from 'react'


// let originalText = "Hide Me Click the Button"

// export default class extends Component {
//     constructor() {
//         super();
//         this.state = {
//             hideText: originalText,
//             isOpen: true,
//         }

//         this.toggleHide = this.toggleHide.bind(this)
//     }
//     toggleHide () {
//         if (this.state.isOpen){
//             this.setState({ hideText: " ", isOpen:false})
//         }else{
//             this.setState({ hideText: originalText, isOpen:true})
//         }
//     }


//     render() {
//         return(
//             <div>
//                 <div className="textField">
//                     <h2>{this.state.hideText}</h2>
//                 </div>

//                 <div className="hideBtnDiv">
//                     <button onClick={this.toggleHide}>Click to Hide</button>
//                 </div>

//             <hr />
//             </div>
//         )
//     }
// } 

import React, { useState } from 'react'

export default function hideMe() {
    const [visibility, setVisibility] = useState("block")
    const [buttonText, setButtonText] = useState("Hide Me")

    const handleClick = () => {
        setVisibility( visibility === "block" ? "none" : "block"),
        setButtonText( buttonText === "Hide Me" ? "Show Me" : "Hide Me") 
    }
    return(
        <div>
            <h2 style={{ display: visibility }}>Hide Me</h2>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}