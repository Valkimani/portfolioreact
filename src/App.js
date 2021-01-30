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
         <Route path="/" component={About} />
         <Route path="/" component={Contacts} />
         <Route path="/" component={Links} />
         <Route path="/" component={Portfolio} />         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
