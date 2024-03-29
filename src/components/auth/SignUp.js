import React, {Component} from 'react'
import { isContainer } from 'postcss-selector-parser';

class SignUp extends Component{
    state={
        fname:'',
        lname:'',
        email:'',
        password:''

    }
    handleChange = (e)=>{
        // console.log(e.target)

        

        this.setState( {

            // console.log(e.target.id)
        // console.log(e.target.value)
                [e.target.id]:e.target.value

            }
        )
    }

    handleSubmit = (e)=>{
        // console.log(e)

        // to stop refresh page
        e.preventDefault();

        console.log(this.state)
    }
    render(){
        return(
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>

            <div className="input-field">
            <label htmlFor="fname" > First Name</label>
            <input type="text" id="fname" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
            <label htmlFor="lname" > Last Name</label>
            <input type="text" id="lname" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
            <label htmlFor="email" > Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
            <label htmlFor="password" >Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
            </div>

            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0"> Sign Up</button>
            </div>
            </form>
            </div>
        )
    }
}
export default SignUp;