import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: '',
        };
    }

    handleClick = (buttonType) => {this.setState({activeButton: buttonType});
  };
    
    render() {
        const {activeButton} = this.state;
        
        return (
            <div className="btn-group" role="group">
                <button type="button" className={cn('btn', 'btn-secondary', 'left', { active: activeButton === 'left' })} onClick={() => this.handleClick('left')}>Left</button>
                <button type="button" className={cn('btn', 'btn-secondary', 'right', { active: activeButton === 'right' })} onClick={() => this.handleClick('right')}>Right</button>
            </div>
        );
    }
}
// END
