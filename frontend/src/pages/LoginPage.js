import React, { useState } from 'react'
import axios from 'axios';
import Input from '../components/Input'

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const onClicked = () => {

        const body = {
            email,
            password
        }

        if (email.indexOf('@') == -1) {

            return null
        }

        axios.post("/api/1.0/users/", body)

        console.log(body)

    }

    return (
        <div className="container">

            <div style={{ marginTop: "30px" }} className="text-center">
                <h1> Login Page </h1>
            </div>

            <form style={{ marginTop: "150px" }}>
                <div className="form-group">
                    <Input type="email" label="E-mail" error="" className="form-control" name="email" onChange={(event) => {
                        setEmail(event.target.value)
                    }} />
                </div>
                <div className="form-group">
                    <Input type="password" label="Password" error="" className="form-control" name="password" onChange={(event) => {
                        setPassword(event.target.value)
                    }} />
                </div>
                <div  className="form-group">
                    <div className="form-group form-check">
                        <Input type="checkbox" label="Beni Hatırla" error="" className="form-check-input" name="checkbox" />
                    </div>
                </div>

                <div classNameName="text-center">
                    <button type="submit" className="btn btn-primary" onClick={() => {
                        onClicked()
                    }} >Tikla</button>
                </div>

            </form>

        </div>
    )

}

export default LoginPage
