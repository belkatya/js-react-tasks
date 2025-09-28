import React from 'react';

// BEGIN (write your solution here)
export default class ListGroup extends React.Component {
    render() {
        const {children} = this.props;
        return (
            <ul className="list-group">
                {
                    React.Children.map(children, (child) => {
                        return <li className="list-group-item">{child}</li>
                    })
                }
            </ul>
        )
    }
}
// END
