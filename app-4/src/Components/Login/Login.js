import React, { Component } from 'react'


export default class Login extends Component{
    constructor(){
    super();

    this.state={
        username: '',
        password: ''
        }
    this.state.displayInput= this.state.displayInput.bind(this);
    }

    updateUsername(val){
        this.setState({ username: val})
    }

    updatePassword(val){
        this.setState({ password: val})
    }

    displayInput(){
        alert(`Username: ${ this.state.username } Password: ${ this.state.password }`)
    }

    render(){
        return(
            <div>
            <input onChange={ (e) => this.updateUsername(e.target.value) } type= 'text'>username</input>
            <input onChange={ (e) => this.updatePassword(e.target.value)} type='text'>password</input>
            <button onClick= { () => this.displayInput }>Login</button>

            </div>
        )
    }


}