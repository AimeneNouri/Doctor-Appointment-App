import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth";
import Index from "./layout/index";
import Login from "./views/Login";
import Register from "./views/Register";
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
        <Router>
          <AuthProvider>
              <PrivateRoute exact path="/" component={Index} />
              <PrivateRoute exact path="/profile" component={Index} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
          </AuthProvider>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
