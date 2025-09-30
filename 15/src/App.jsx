import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props);
    this.state = {
      theme: themes[0],
    };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  };

  render() {    
    return (
      <ThemeContext.Provider value={{ themes, theme: this.state.theme, setTheme: this.setTheme }}>
        <div className={this.state.theme.className}>
          <h1>Приложение с вкладками и сменой темы</h1>
          <Tabs defaultActiveKey="home">
            <Tab eventKey="home" title="Главная">
              <Home />
            </Tab>
            <Tab eventKey="profile" title="Профиль">
              <Profile />
            </Tab>
          </Tabs>
          <ThemeSwitcher />
        </div>
      </ThemeContext.Provider>
    );  
  }
  // END
}

export default App;
