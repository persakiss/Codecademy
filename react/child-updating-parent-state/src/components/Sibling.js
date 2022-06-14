import React from 'react';

{/* Added sibling because a component should only be responsible for one thing. Child.js was displaying the name and changing it. Now sibling is displaying the name, whild child changes it*/}

export class Sibling extends React.Component {
  render() {

    const name = this.props.name;

    return (
      <div>
        <h1>Hey, my name is {this.props.name}!</h1>
        <h2>Don't you think {this.props.name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {this.props.name}!</h2>
      </div>
    );
  }
}