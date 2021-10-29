import React from 'react';
import Form from './component/form'
import Button from "./component/button";
import Input from './component/input';


class App extends React.Component {

  constructor() {

    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName:""
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
  }
  handleEmailChange(e) {
    const str= e.target.value
    this.setState({email : str})
    console.log(str);
    const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(regex.test(str)){
      this.setState({emailIsValid: true})
      console.log("email ok");
    }else{
      this.setState({emailIsValid: false})
    }
    // console.log(regex.test(str));
  }
  handlePasswordChange(e) {
    const str = e.target.value
    this.setState({password : str})
    if(str.length > 5) {
      this.setState({passwordIsValid: true})
      console.log("password ok");
    }else{
      this.setState({passwordIsValid: false})
    }
  }
  handleRememberMeChange(e) {
    this.setState({rememberMe: e.target.value})
    // console.log(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault()
    if(this.state.passwordIsValid  && this.state.emailIsValid) {
      this.setState({isSubmitted : true})
      // console.log(this.state.isSubmitted);
    }
  }
  handleFirstNameChange(e) {
    this.setState({firstName : e.target.value})
    console.log(e.target.value);
  }
  handleLastNameChange(e) {
    this.setState({lastName:e.target.value})
    console.log(e.target.value)
  }


  render() {

    return(
      <div className="container-fluid">
        {this.state.isSubmitted === false? (

          <form className="row" onSubmit={this.handleSubmit} >
            <Input onchange={this.handleFirstNameChange} placeholder="FirstName" type="text"/>
            <Input onchange={this.handleLastNameChange} placeholder="LastName" type="text"/>
            <Form type = "email" label="Email address" className="form-control" onchange={this.handleEmailChange}/>
            <Form type = "password" label="Password" className="form-control" onchange = {this.handlePasswordChange}/>
            <Form type = "checkbox" label="Check me out" className="form-check-input" onchange = {this.handleRememberMeChange}/>
            <Button/>
          </form>
        ):(
          <p className="text-success text-center pt-5 fs-1">{this.state.email}</p>
        )}
        
      </div>
    )
  }




}










export default App;
