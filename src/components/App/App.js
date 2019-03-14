import React, { Component } from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';

//Routes
import * as ROUTES from '../../constants/routes';

//Components
import { TodoApp } from '../Todo_App';
import { Navigation } from '../Navigation';
import { Home } from '../Home';
import { About } from '../About';
import { TaskPage } from '../Task_Page';
import { Users } from '../Users';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="Wrapper">
          <Navigation />
          <Route path={ROUTES.HOME} exact component={Home} />
          <Route path={ROUTES.TODO} component={TodoApp} />
          <Route path={ROUTES.ABOUT} component={About} />
          <Route path={ROUTES.USERS} component={Users}/>
          <Route path={ROUTES.TASKPAGE} component={TaskPage}/>
         </div>
      </Router>
    );
  }
}

export default App;
