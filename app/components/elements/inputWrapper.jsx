var React = require('react');
var numeral = require('numeral');


var Input = require('./input.jsx');


module.exports = React.createClass({

  render: function() {
      return (
          <div className="row">
              {this.props.data.map(function(input) {
                  return <div className="col-xs-12">


                      <Input item={input} />

                  </div>
              })
}
          </div>
      )
  }
});
