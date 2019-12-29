import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      formErrors:{
        firstName:'',
        lastName:'',
        email:'',
        password:''
      }
    }
  }
  // handleSubmit = e =>{
  //   e.preventDefault();
  //   // // if(formValid(this.state.formErrors)){
  //   //   console.log(`
  //   //   --SUBMITTING--
  //   //   First Name:${this.state.firstName}
  //   //   Last Name:${this.state.lastName}
  //   //   Email:${this.state.email}
  //   //   Password:${this.state.password}

  //   //   `)
  //   }else{
  //     console.error('FORM INVALID - DISPLAY ERROR MESSAGE')
  //   }
  // };
  render(){
  return (
    <div className="wrapper">
      <div className="form-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={this.handleSubmit} noValidate>
        <div className="firstName">
          <label htmlFor="firstName">First Name:-</label>
          <input 
          type="text"
          className=""
          placeholder="First Name"
          type="text"
          name="firstName"
          noValidate
          onChange={this.handleChange}/>
        </div><br></br>
        <div className="Last Name">
          <label htmlFor="lastName">Last Name:-</label>
          <input 
          type="text"
          className=""
          placeholder="Last Name"
          type="text"
          name="lastName"
          noValidate
          onChange={this.handleChange}/>
        </div><br></br>
        <div className="email">
          <label htmlFor="emailAdress">Email Adress:-</label>
          <input 
          type="text"
          className=""
          placeholder="Email Adress"
          type="email"
          name="emailAdress"
          noValidate
          onChange={this.handleChange}/>
        </div><br></br>
        <div className="password">
          <label htmlFor="password">Password:-</label>
          <input 
          type="text"
          className=""
          placeholder="Password"
          type="password"
          name="password"
          noValidate
          onChange={this.handleChange}/>
        </div>
      </form>
    </div>
    </div>
  );
}
}
export default App;
