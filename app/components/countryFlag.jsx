var React = require('react');

module.exports = React.createClass({

    render: function() {
var flagClassName = 'flag-icon flag-icon-' + this.props.alpha2Code.toLowerCase();
        return (


                <span className={flagClassName}></span>


        )
    }
});
