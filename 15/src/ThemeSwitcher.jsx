import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;
  render() {    
    const {themes, theme, setTheme} = this.context;  
    return (      
      <ButtonGroup className="mb-2">{themes.map((i) => (          
        <ToggleButton 
          key={i.id} 
          type="radio" 
          variant="secondary" 
          name="radio" 
          value={i.id} 
          checked={theme.id === i.id} 
          onClick={() => setTheme(i)}>
            {i.name}          
        </ToggleButton>))}      
      </ButtonGroup>    
    );  
  }
  // END
}

export default ThemeSwitcher;
