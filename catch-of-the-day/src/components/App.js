import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // Update State
    //1. Take a copy of exisiting state
    const fishes = { ...this.state.fishes };

    //2. Add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;

    //3. Set the new fishes object to state
    this.setState({
      // fishes: fishes
      fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = key => {
    // 1. Take a copy of state
    const order = { ...this.state.order };

    // 2. Either add to the order or update the number in the order
    order[key] = order[key] + 1 || 1;

    // 3. Call setState to update our state object
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index = {key}

                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}>
                {key}
              </Fish>
            ))}
          </ul>
        </div>
        <Order fishes = {this.state.fishes} order = {this.state.order}></Order>
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}></Inventory>
      </div>
    );
  }
}

export default App;
