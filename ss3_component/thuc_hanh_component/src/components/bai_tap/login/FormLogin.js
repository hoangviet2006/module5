import {Component} from "react";

class FormLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            check: false
        }
    }

    checkOnchange(event) {
        this.setState((preV) => ({
            ...preV,
            [event.target.name]: event.target.value,

        }))
    }

    logIn() {
        const {email, password} = this.state
        if (email && password) {
            if (email === 'admin@gmail.com' && password === '123456') {
                this.setState({
                    check: true,
                })
            } else {
                this.setState({
                    check: false,
                    error: 'Đăng Nhập Thất Bại'
                })
            }
        } else {
            this.setState({
                error: 'vui lòng nhập đầy đủ thông tin'
            })
        }


    }

    render() {
        if (this.state.check) {
            return <h2>Đăng nhập thành công! Xin chào {this.state.email} 🎉</h2>
        }
        if (this.state.check === false) {
            return (
                <>
                    <form>
                        <label>Nhập email</label>
                        <input name={'email'} value={this.state.email} onChange={(event) => {
                            this.checkOnchange(event)
                        }}/>
                        <label>Nhập mật khẩu</label>
                        <input name={'password'} value={this.state.password} onChange={(event) => {
                            this.checkOnchange(event)
                        }}/>
                        <button type='button' onClick={this.logIn.bind(this)}> Đăng Nhập</button>
                    </form>
                    {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                </>
            );

        }

    }
}
export default FormLogin;