// node_modules
import React, { lazy, Suspense, memo } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// components
import DashboardLayout from 'components/layouts/DashboardLayout';

const InboxPage = lazy(() => import('pages/inbox/InboxPage'));

const App = () => (
  <>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <DashboardLayout>
            <Switch>
              <Route exact path="/inbox" component={InboxPage} />
              <Redirect to="/inbox" />
            </Switch>
          </DashboardLayout>
        </Switch>
      </Suspense>
    </Router>
  </>
);

export default memo(App);
