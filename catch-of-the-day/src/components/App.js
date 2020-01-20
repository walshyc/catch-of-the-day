import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order></Order>
        <Inventory addFish={this.addFish}></Inventory>
      </div>
    );
  }
}

export default App;
