import React, { useState } from 'react'
import Input from '../components/Input';
import {login} from '../api/apiCalls'

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();

    const onClicked = () => {

        const creds = {
            email,
            password
        }

      
        login(creds);

    }

    return (
        <div className="container">

            <div style={{ marginTop: "30px" }} className="text-center">
                <h1> Login Page </h1>
            </div>

            <form style={{ marginTop: "150px" }}>
                <div className="form-group">
                    <Input type="input" label="Username" error="" className="form-control" name="username" onChange={(event) => {
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
