

import { Route, Switch } from 'react-router-dom';
import Ais_frame_30 from './pages/Ais_frame_30'

function App() {
  return (
    <Switch>
      <Route exact path ='/'>
        <Ais_frame_30 />
      </Route>
    </Switch>
  );
}

export default App;
