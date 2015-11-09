var Umaterial = React.createClass({
  render: function(){
    return (
      <div className="materialdesc">
        <div className="unit">
          Unit: {this.props.unit}
        </div>
        <div className="amount">
          Amount: {this.props.amount}
        </div>
      </div>
    )
  }
})
