import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StudentDashboard from '../pages/StudentDashboard';

const StudentRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={StudentDashboard} />
        {/* Agrega otras rutas aquí */}
      </Switch>
    </Router>
  );
};

export default StudentRoutes;
