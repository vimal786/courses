import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Demo from './pages/Demo';
import Search from './pages/Search';
import Products from './pages/Products';
import Repots from './pages/Repots';
import CourseDetails from './pages/CourseDetails';



function App() {
  return (
    <>
    
      <Router>
          <Navbar />
            <Switch>
                <Route path="/" exact  component={Home} />
                <Route path="/courses" component={Courses} />
                <Route path="/products" component={Products} />
                <Route path="/reports" component={Repots} />
                <Route path="/search" component={Search} />
                <Route path="/demo" component={Demo} />
                <Route  exact path="/course/:id" component = {CourseDetails} />

            </Switch>
      </Router>
    </>
  );
}

export default App;
