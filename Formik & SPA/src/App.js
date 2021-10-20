import React from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import NotFound from './components/NotFound';
import SignUpForm from './components/SignUpForm';
import Layout from './layout/Layout';





function App() {
  return (
    
    <Layout>
        <Switch>
          {/* Routes */}

          <Route path="/login" component={LoginForm}/>
          <Route path="/signup" component={SignUpForm}/>
          <Route path="/" component={SignUpForm} exact={true} />
          <Route path="" component={NotFound}/>


        </Switch>
    </Layout>
    

  );
}

export default App;
