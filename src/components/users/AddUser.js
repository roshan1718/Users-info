import axios  from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';


export default function AddUser() {
    let history = useHistory()

const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: ""
})

const { name, username, email, phone } = user;
const onInputeChange = e => {
    setUser({...user, [e.target.name]: e.target.value})
}
const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3004/users", user);
    history.push("/")

}
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add New User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="name"
                            value={name}
                            onChange={e => onInputeChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Username"
                            name="username"
                            value={username}
                            onChange={e => onInputeChange(e)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Email"
                            name="email"
                            value={email}
                            onChange={e => onInputeChange(e)}

                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Phone number"
                            name="phone"
                            value={phone}
                            onChange={e => onInputeChange(e)}

                        />
                    </div>
                    <button  className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>

        </div>
    )
}
