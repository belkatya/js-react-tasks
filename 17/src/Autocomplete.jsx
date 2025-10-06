import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            term:"",
        };
    }

    handleChange = async (e) => {
        const newTerm = e.target.value;
        this.setState({term: newTerm});

        if (!newTerm.trim()) {
            this.setState({ countries: [] });
            return;
        }

        const res = await axios.get("/countries", { params: {term: newTerm} });
        this.setState({countries: res.data});
    }

    render() {
        const {countries, term} = this.state;
        return(
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Enter Country" value={term} onChange={this.handleChange}/>
                </form>
                {countries.length > 0 && (<ul>
                                {countries.map((country) => (
                                <li key={country}>{country}</li>
                                ))}
                            </ul>)}
            </div>
        )
    }
}
// END
