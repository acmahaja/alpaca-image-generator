import React, {Component} from 'react'
import './Button.css'
class Button extends Component {
    constructor(props) {
        super(props);
    }
render() {
    return(
        <div onClick={()=>this.props.update()} className={`Button ${this.props.selected && "selected"}`}>
            {this.props.value}
        </div>
        )
}}


export default Button