import cn from 'classnames';
import React from 'react';
 
// BEGIN (write your solution here)
export default class Alert extends React.Component {
    render () {
        const {text} = this.props;
        const {type} = this.props;
        const divClass = cn("alert", {
            "alert-warning": type==="warning",
            "alert-primary": type==="primary",
            "alert-secondary": type==="secondary",
            "alert-success": type==="success",
            "alert-danger": type==="danger",
            "alert-info": type==="info",
            "alert-light": type==="light",
            "alert-dark": type==="dark",
        })
        return (
            <div className={divClass} role="alert">{text}</div>
        )
    }
}

// END
