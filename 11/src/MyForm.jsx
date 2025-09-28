import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            address: "",
            city: "",
            country: "",
            acceptRules: false,
            showTable: false,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({showTable: true});
    }

    handleBack = () => {
        this.setState({showTable: false});
    }

    handleChange = (inputName, e) => {
        this.setState({[inputName]: e.target.value});
    }

    handleCheckboxChange = (e) => {
        this.setState({acceptRules: e.target.checked});
    }

    render() {
        const { email, password, address, city, country, acceptRules, showTable } = this.state;

        if (showTable) {
            return (
                <div>
                    <button type="button" className="btn btn-primary" onClick={this.handleBack}>
                        Back
                    </button>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>acceptRules</td>
                            <td>{acceptRules.toString()}</td>
                        </tr>
                        <tr>
                            <td>address</td>
                            <td>{address}</td>
                        </tr>
                        <tr>
                            <td>city</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td>country</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <td>email</td>
                            <td>{email}</td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td>{password}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            );
        };


        return(
            <form name="myForm" onSubmit={this.handleSubmit}> 
                <div className="col-md-6 mb-3">
                    <label for="email" className="col-form-label">Email</label>
                    <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => this.handleChange("email", e)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label for="password" className="col-form-label">Password</label>
                    <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => this.handleChange("password", e)}
                    />
                </div>
                <div className="col-md-6 mb-3">
                    <label for="address" className="col-form-label">Address</label>
                    <textarea
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="1234 Main St"
                    value={address}
                    onChange={(e) => this.handleChange("address", e)}
                    ></textarea>
                </div>
                <div className="col-md-6 mb-3">
                    <label for="city" className="col-form-label">City</label>
                    <input type="text" className="form-control" name="city" id="city" value={city} onChange={(e) => this.handleChange("city", e)}/>
                </div>
                <div className="col-md-6 mb-3">
                    <label for="country" className="col-form-label">Country</label>
                    <select id="country" name="country" className="form-control" value={country} onChange={(e) => this.handleChange("country", e)}>
                    <option value="">Choose</option>
                    <option value="argentina">Argentina</option>
                    <option value="russia">Russia</option>
                    <option value="china">China</option>
                    </select>
                </div>
                <div className="col-md-6 mb-3">
                    <div className="form-check">
                    <label className="form-check-label" for="rules">
                        <input
                        id="rules"
                        type="checkbox"
                        name="acceptRules"
                        className="form-check-input"
                        checked={acceptRules}
                        onChange={this.handleCheckboxChange}
                        />
                        Accept Rules
                    </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        )
    }
}
// END
