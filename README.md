# react-ts-callback

httpRequest.ts

```js
const axios = require('axios');

export function httpGet(url: string) {
  debugger;
  return axios.get(url);
}

export function httpPost(url: string, args: any) {
  return axios({
    method: 'post',
    url,
    data: args
  });
}

export function httpDelete(url: string) {
  return axios.delete(url);
}
```

employeeGetEndpoints.ts

```js
import { httpGet } from '../httpRequest';

export function getEmployeeList(successCallBack: any) {
  httpGet('https://607050b585c3f0001746fd55.mockapi.io/crud/employee')
    .then((res: any) => {
      successCallBack(res);
    })
    .catch((error: any) => {
      console.log(error);
    });
}
```

employeeList.tsx

```js
import React, { useEffect, useState } from 'react';
import { getEmployeeList } from '../containers/services/employee/employeeGetEndpoints';
export function EmployeeList() {
  const [data, setData] = useState<[]>([] as any);

  useEffect(() => {
    debugger;
    getEmployeeList((res: any) => {
      setData(res.data || []);
    });
  }, []);

  return (
    <div>
      Employee List
      <hr />
      <div>
        {data.map(o => {
          return (
            <div>
              {o.name} - {o.age}
            </div>
          );
        })}
      </div>
    </div>
  );
}
```

app.tsx

```js
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
```
