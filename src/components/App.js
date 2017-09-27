import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Route, Switch } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"
import List from "./Home"
import "./App.css"

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="portfolio" component={List} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
