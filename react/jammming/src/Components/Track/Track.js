import React, { Component } from "react";
import './Track.css';

export class Track extends Component {
  renderAction() {
    this.props.isRemoval && <button className="Track-action">-</button>
    !this.props.isRemoval && <button className="Track-action">+</button>
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>track name</h3>
          <p>track artist | track album</p>
        </div>
        {/* <!-- + or - will go here --> */}
        <button className="Track-action">{this.renderAction}</button>
      </div>
    );
  }
}

export default Track;
