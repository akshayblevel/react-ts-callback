import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { EmployeeList } from './components/employeeList';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/employeeList" />}
          />
          <Route path="/employeeList" component={EmployeeList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
