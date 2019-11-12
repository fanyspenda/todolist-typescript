import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class Input extends React.Component<InputProps> {
  render() {
    return <input value={this.props.value} onChange={this.props.onChange} />;
  }
}

export default Input;
