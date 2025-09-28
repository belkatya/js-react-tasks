import React from 'react';
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {opened: this.props.opened};
    }

    handleClick = () => {
        const {opened} = this.state;
        this.setState({opened: !opened});
    }

    render() {
        const {text} = this.props;
        const {opened} = this.state;

        return(
            <div>
                <p>
                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded={opened ? "true" : "false"} onClick={this.handleClick}>Link with href</a>
                </p>
                <div className={cn("collapse", {show: opened})} >
                    <div className="card card-body">{text}</div>
                </div>
            </div>
        )
    }
}

Collapse.defaultProps = {
    opened: true,
}
// END
