// Convert the following React component to an ES6 Class.
// Use React.Component as your base class.

var ExampleComponent = React.createClass({

  render: function() { 
    return (
      <div onClick={this._handleClick}>
        Hello, world.
      </div>
    );
  },

  _handleClick: function() {
    console.log(this);
  }

});
