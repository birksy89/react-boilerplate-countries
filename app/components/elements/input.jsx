var React = require('react');
var numeral = require('numeral');



module.exports = React.createClass({



  render: function() {

    var itemPermission = this.props.item.Permissions[0].Permission;


      return (
          <div className="row">
              <p>{this.props.item.Display_Name}</p>
              <input type="text" disabled={itemPermission == 'Edit' ? true : false}/>

        
              <p>{itemPermission}</p>
          </div>
      )
  }
});
