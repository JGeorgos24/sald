import React, {Component} from "react";


class LoginForm extends Component {
    constructor(props) {
        super(props);
            
        this.state={
            username:"",
            password:"",
        }
    }

    onChange= (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){
        return(
            <form>
                <input type="text" name="username"  placeholder="username" onChange={this.onChange}/>
                <input type="password" name="password"  placeholder="password" onChange={this.onChange}/>
                <input type="submit" value="Log In" />
            </form>
        )
    }
}

export default LoginForm;