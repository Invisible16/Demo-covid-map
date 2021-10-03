import "./App.css";
import { Center } from "@chakra-ui/react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CovidMap from "./components/CovidMap";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/map">
            <CovidMap />
          </Route>
          <Route path="/">
            <Center bg="#C6F6D5" h="100vh" color="white">
              <Login />
              <Logout />
            </Center>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
