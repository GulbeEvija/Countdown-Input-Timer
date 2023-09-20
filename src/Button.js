import { Component } from "react";

export class Button extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.startCountDown} className="btnStart">Start</button>
            </div>
        )
    }
}