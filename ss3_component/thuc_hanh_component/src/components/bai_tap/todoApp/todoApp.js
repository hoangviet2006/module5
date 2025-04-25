import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
class TodoApp extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            list: [],
            inputValue: ''
        }
    }

    onchangeInput(event) {
        this.setState((preV) => ({
            ...preV,
            inputValue: event.target.value
        }))
    }

    addJob() {
        if (this.state.inputValue !== '') {
            this.setState((item) => ({
                ...item,
                list: [...item.list, item.inputValue],
                inputValue: ''
            }))
        }
    }

    render() {
        return (
            <>
                <h1>Danh Sách Công Việc</h1>
                <ul>
                    {this.state.list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
                <div className={'d-flex justify-content-center'}>
                    <input className={'input-group-sm '} name={'job'} value={this.state.inputValue}
                           onChange={(event) => {
                               this.onchangeInput(event);
                           }}/>
                    <button className={'btn btn-sm btn-hover btn-active  btn-outline-success'}
                            onClick={this.addJob.bind(this)}>Thêm Công Việc
                    </button>

                </div>
            </>
        )
    }

}

export default TodoApp;