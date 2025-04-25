import {Component} from "react";
import {render} from "@testing-library/react";

class BackgroundColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        }


        setTimeout(() => {
                this.setState({color: 'pink'})
        }, 3000)


    }

    render() {
        return (
            <div>
                <div
                    style={{
                        backgroundColor: this.state.color,
                        paddingTop: 20,
                        width: 400,
                        height: 80,
                        margin: 'auto'
                    }}
                >
                </div>
            </div>
        )
    }
}

export default BackgroundColor;