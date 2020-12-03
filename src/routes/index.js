import { Switch, Route } from 'react-router-dom';

import Jobs from 'pages/Jobs';
import JobDetail from 'pages/JobDetail';
import NotFound from 'pages/NotFound';

export default function routes() {
  return (
    <Switch>
      <Route exact path='/' component={Jobs}></Route>
      <Route exact path='/detalhes' component={JobDetail}></Route>
      <Route exact path='*' component={NotFound}></Route>
    </Switch>
  );
}
