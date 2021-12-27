import React, { useState } from 'react'

// Have someText to align done
// get it to align left, center, and right

export default function AlignSection() {
    const [alignment, setAlignment] = useState("center");
    return <div>
        <h2 style={{textAlign: alignment}}>Align Me</h2>
        <button onClick ={() => setAlignment("left")}>Left</button>
        <button onClick ={() => setAlignment("center")}>Center</button>
        <button onClick ={() => setAlignment("right")}>Right</button>
    </div>
}

// import React, { Component } from 'react'

// export default class AlignSection extends Component {
//     constructor() {
//         super()
//         this.state = {
//             alignment: "center"
//         }
//         this.handleLeft = this.handleLeft.bind(this)
//         this.handleCenter = this.handleCenter.bind(this)
//         this.handleRight = this.handleRight.bind(this)
//     }

//     handleLeft() {
//         this.setState({ alignment: "left"})
//     }
//     handleCenter() {
//         this.setState({ alignment: "center"})
//     }
//     handleRight() {
//         this.setState({ alignment: "right"})
//     }

//     render() {
//         return(
//             <div>
//                 <h2 style={{textAligN: this.state.alignment}}>Align Me</h2>

//                 <div>
//                     <button onCLick={() => {this.handleLeft}}>Left</button>
//                     <button onCLick={() => {this.handleCenter}}>Center</button>
//                     <button onCLick={() => {this.handleRight}}>Right</button>
//                 </div>
//             </div>
//         )
//     }
// }