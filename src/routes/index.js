import { Switch, Route } from 'react-router-dom';

import Jobs from 'pages/Jobs';
import JobDetail from 'pages/JobDetail';

export default function routes() {
  return (
    <Switch>
      <Route exact path='/' component={Jobs}></Route>
      <Route exact path='/detalhes' component={JobDetail}></Route>
    </Switch>
  );
}
