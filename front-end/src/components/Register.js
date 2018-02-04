import React from 'react'
import axios from 'axios'
import Input from './Input';
import ValidationMessage from './ValidationMessage';

class Register extends React.Component {
    state = {
        form: {
            email: '',
            password: '',
        },
        validationErrors: {},
    }

    handleChange = (e) => {
        this.setState({
            form: { ...this.state.form, [e.target.name]: e.target.value },
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        let res = null
        this.setState({validationErrors: {}})

        try {
            res = await axios.post('/api/users', this.state.form)
        } catch (err) {
            if (err.response.status === 422) {
                return this.setState({validationErrors: err.response.data.errors})
            }
            return console.log(err)
        }

        console.log(res)
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-4">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <Input type="email" name="email" errors={this.state.validationErrors} onChange={this.handleChange} />
                            <ValidationMessage input="email" errors={this.state.validationErrors} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <Input type="password" name="password" errors={this.state.validationErrors} onChange={this.handleChange} />
                            <ValidationMessage input="password" errors={this.state.validationErrors} />
                        </div>
                        <button className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register
