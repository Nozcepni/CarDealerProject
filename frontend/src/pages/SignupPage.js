import React, { useState } from 'react'
import Input from '../components/Input'
import {signup} from '../api/apiCalls'


const SignupPage = () => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onClicked = () =>{

       // event.preventDefault();

        const body={
            name,
            lastname,
            username,
            password
        }

        signup(body);

    }

    return (
        <div>
            <div className="container">

                <div style={{ marginTop: "30px" }} className="text-center">
                    <h1> Signup Page </h1>
                </div>

                <form style={{ marginTop: "150px" }}>
                    <div className="form-group">

                        <Input type="input" label="Name" error="" className="form-control" name="name" onChange={(event) => {
                            setName(event.target.value)
                        }} />

                    </div>
                    <div className="form-group">

                        <Input type="input" label="Lastname" error="" className="form-control" name="lastname" onChange={(event) => {
                            setLastname(event.target.value)
                        }} />

                    </div>
                    <div className="form-group">

                        <Input type="input" label="Username" error="" className="form-control" name="username" onChange={(event) => {
                            setUsername(event.target.value)
                        }} />

                    </div>
                    <div className="form-group">

                        <Input type="password" label="Password" error="" className="form-control" name="name" onChange={(event) => {
                            setPassword(event.target.value)
                        }} />

                    </div>

                    <div classNameName="text-center">
                        <button type="submit" className="btn btn-primary" onClick={(event) => {
                            onClicked()
                        }} >Tikla</button>
                    </div>

                </form>
            </div>

        </div>
    )

}

export default SignupPage
