import {Component} from "react";
import {getjQuery} from "bootstrap/js/src/util";


class DeleteComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            write: 'Hello Word!'
        }

    }
    hidden=()=>{
        alert('Hello Word sẽ bị xoá sau 5s')
        setTimeout(() => {
            this.setState({write: ''})
        }, 5000)
    }
    alow=()=>{
        alert('Hello Word sẽ hiển thị lại sau 5s');
        setTimeout(()=>{
            this.setState({write:'Hello Word!'})
        },5000)
    }


    render() {
        return (
            <div>
                <p>{this.state.write}</p>
                <button onClick={this.hidden}>Ẩn Hello Word</button>
                <button onClick={this.alow}>Hiển thị Hello Word</button>
            </div>
        )
    }


}

export default DeleteComponent;