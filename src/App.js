import React, { createContext,  useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import ServiceList from './Components/ServiceList/ServiceList';
import PrivateRoute from './Components/Login/PrivateRoute';
import Review from './Components/Review/Review';
import AdminSevice from './Components/Admin/AdminSevice';
import MakeAdmin from './Components/Admin/MakeAdmin';
import AdminAddService from './Components/Admin/AdminAddService';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [newOrder, setNewOrder] = useState([]);
  
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, newOrder, setNewOrder }} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/ServiceList">
            <ServiceList />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute path="/AdminSevice">
            <AdminSevice />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <MakeAdmin / >
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AdminAddService />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
