var ProjectDescName = React.createClass({
  render: function(){

    return (
      <div className="dn">
        <div className="pDesc">{this.props.name}</div>
        <div className="pDesc">{this.props.desc}</div>
      </div>
    )
  }
})
