import {Component} from "react";

class IncreaseOrDecrease extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }

    increase = () => {
        this.setState({number: this.state.number + 1})
    }
    decrease = () => {
        this.setState({number: this.state.number - 1})
    }

    render() {
        return (
            <div>
                <button onClick={this.increase}>Tăng</button>
                <span>{this.state.number}</span>
                <button onClick={this.decrease}>Giảm</button>
            </div>
        )
    }
}

export default IncreaseOrDecrease;