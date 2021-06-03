import React from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";
import Recipe from "./components/Recipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      recipes: []
    };
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  getRecipe = async (e) => {
    const searchItem = this.state.inputValue;
    e.preventDefault();
    const api_call = await fetch(
      `https://forkify-api.herokuapp.com/api/search?q=${searchItem}`
    );
    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  };
  render() {
    const { inputValue, recipes } = this.state;
    return (
      <Router>
        <div>
          <header>Find Your recipe</header>
          <Switch>
            <Route exact path="/">
              <Form
                handleChange={this.handleChange}
                value={inputValue}
                getRecipe={this.getRecipe}
              />
              <List recipes={recipes} />
            </Route>
            <Route path="/recipe/:id" component={Recipe} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
