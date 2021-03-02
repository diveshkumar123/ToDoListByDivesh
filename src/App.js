import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import ClassCounter   from "./components/page1/page1.js"
import HooksCounter   from "./components/page2/page2.js"
import Page3          from "./components/page3/page3.js"
import Page4          from "./components/page4/page4.js"
import Todo           from "./components/ToDOList/Todo.js"
import TodoForm       from "./components/ToDOList/TodoForm.js"
import ToDoList       from "./components/ToDOList/ToDoList.js"

function App() {
  return (
      <div>
      
       <Router>
         <nav className="col-lg-12 navbar-inverse" style={{height:"100px"}}>
          <div className="col-lg-3" style={{height:"80px",marginTop:"10px",fontSize:"25px",padding:"20px 120px",color:"#fff",fontWeight:"bold"}}>LOGO</div>
          <ul className="col-lg-8 pull-right" style={{height:"80px",marginTop:"10px"}}>
            <Link to="/ToDoList"><li className="pull-right">ToDoList</li></Link>
            <Link to="/Page4"><li className="pull-right">page4</li></Link>
            <Link to="/Page3"><li className="pull-right">page3</li></Link>
            <Link to="/Page2"><li className="pull-right">page2</li></Link>
            <Link to="/"><li className="pull-right">page1</li></Link>
          </ul>
        </nav>
            <Switch>
              <Route exact path="/"             component={ClassCounter}/>
              <Route exact path="/Page2"        component={HooksCounter}/>
              <Route exact path="/Page3"        component={Page3}/>
              <Route exact path="/Page4"        component={Page4}/>
              <Route exact path="/ToDoList"     component={ToDoList}/>
             
            </Switch>
          </Router>
  </div>
  );
}

export default App;
