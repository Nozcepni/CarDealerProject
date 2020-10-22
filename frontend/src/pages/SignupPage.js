import React, { useState } from 'react'
import Input from '../components/Input'
import axios from 'axios';


const SignupPage = () => {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onClicked = () =>{

        const body={
            name,
            lastname,
            email,
            password
        }

        axios.post("/api/1.0/users/", body)

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

                        <Input type="email" label="E-mail" error="" className="form-control" name="email" onChange={(event) => {
                            setEmail(event.target.value)
                        }} />

                    </div>
                    <div className="form-group">

                        <Input type="password" label="Password" error="" className="form-control" name="name" onChange={(event) => {
                            setPassword(event.target.value)
                        }} />

                    </div>

                    <div classNameName="text-center">
                        <button type="submit" className="btn btn-primary" onClick={() => {
                            onClicked()
                        }} >Tikla</button>
                    </div>

                </form>
            </div>

        </div>
    )

}

export default SignupPage
