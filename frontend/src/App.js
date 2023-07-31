import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import CodeEditor from './components/CodeEditor';
import VersionControl from './components/VersionControl';
import CollaborationTools from './components/CollaborationTools';
import TaskManagement from './components/TaskManagement';
import Documentation from './components/Documentation';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/code-editor" component={CodeEditor} />
        <Route path="/version-control" component={VersionControl} />
        <Route path="/collaboration-tools" component={CollaborationTools} />
        <Route path="/task-management" component={TaskManagement} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;