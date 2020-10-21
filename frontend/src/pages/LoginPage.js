import React, { useState } from 'react'
import axios from 'axios';

const LoginPage = () => {
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState();

    const onClicked = () =>{

        const body = {
            email,
            password
        }

        axios.post("/api/1.0/users/",body)

       console.log(body)

    }

        return (
            <div className="container">   

                <div style={{ marginTop: "30px" }} className="text-center">
                    <h1> Login Page </h1>
                </div>

                <form style={{ marginTop: "150px" }}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1"  onChange={(event)=>{
                            setEmail(event.target.value)
                        }}
                         />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(event)=>{
                            setPassword(event.target.value)
                        }} />
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div classNameName="text-center">
                        <button type="submit" className="btn btn-primary" onClick={()=>{
                           onClicked()
                        }} >Tikla</button>
                    </div>

                </form>

            </div>
        )
    
}

export default LoginPage
