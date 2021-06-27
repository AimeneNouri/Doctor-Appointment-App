import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Index from "./layout/index";
import Login from "./views/Login";
import Fisrt from "./views/firstpage";
import Register from "./views/Register";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
        <Router>
          <AuthProvider>
              <PrivateRoute exact path="/home" component={Index} />
              <PrivateRoute exact path="/profile" component={Index} />
              <PrivateRoute exact path="/appointment-lists" component={Index} />
              <Route path="/index" component={Fisrt} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
          </AuthProvider>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
