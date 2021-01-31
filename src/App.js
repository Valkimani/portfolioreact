import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";
import Links from "./containers/Links/Links";
import Portfolio from "./containers/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/about" component={About} />
         <Route path="/contacts" component={Contacts} />
         <Route path="/links" component={Links} />
         <Route path="/portfolio" component={Portfolio} />         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
