import React from 'react';

// BEGIN (write your solution here)
export default class DefinitionsList extends React.Component {
    render() {
        const {data} = this.props;
        if (data.length === 0) {
            return null;
        }
        return (
            <dl>
                {data.map((item, index) => (
                    <React.Fragment key = {index}>
                        <dt>{item.dt}</dt>
                        <dd>{item.dd}</dd>
                    </React.Fragment>
                ))}
            </dl>
        );
    }
}
// END
