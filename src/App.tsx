import React from "react";
import "./App.css";
import Input from "./components/input";

interface AppState {
  value: string;
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    value: ""
  };

  tambahkan = (a: number, b: number): number => {
    return a + b;
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: event.target.value
    });

    this.tambahkan(5, 5);
  };

  render() {
    return (
      <div className="App">
        <Input value={this.state.value} onChange={this.handleInputChange} />
      </div>
    );
  }
}
