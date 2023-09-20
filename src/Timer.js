import { Component } from "react";

export class Timer extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.minutes}:{this.props.seconds}</h1>
            </div>
        )
    }
}