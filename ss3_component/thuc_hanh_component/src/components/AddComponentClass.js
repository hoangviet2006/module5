import {Component} from "react";

class AddComponentClass extends Component{
    render() {
        return <h1>TotalClass: {this.props.firstNumber + this.props.secondNumber}</h1>
    }
}
export default AddComponentClass;