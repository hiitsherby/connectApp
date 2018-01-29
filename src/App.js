import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Table from './containers/Table/Table';

class App extends Component {
  render() {
    return (
      <div>
        <Table />
      </div>
    );
  }
}

export default App;

          // <Switch>
          //   <Route path="/checkout" component={Checkout} />
          //   <Route path="/orders" component={Orders} />
          //   <Route path="/auth" component={Auth} />
          //   <Route path="/" exact component={BurgerBuilder} />
          // </Switch>