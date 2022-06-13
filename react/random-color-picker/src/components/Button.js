import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button 
    {/* Now that you’ve defined an event handler, you can pass it to another component as a prop. This is a pattern that you’ll see much more of in the next course. In Random‘s render method, give <Button /> an attribute with a name of onClick. Set onClick‘s value equal to the handleClick method. */}
        onClick={ this.props.onClick }
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
			</button>
		);
	}
}