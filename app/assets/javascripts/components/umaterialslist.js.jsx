var UmaterialsList = React.createClass({
  deleteThis: function(e){
    e.preventDefault();
    // debugger
    var id = this.props.id
    this.props.onDelete({id: id})
    return
  },
  render: function(){
    return (
      <div className="myMaterials">
        <div className="umaterialname"><b>{this.props.name}</b></div>
        <button onClick={this.deleteThis}>Delete</button>
        <Umaterial amount={this.props.amount} unit={this.props.unit}/>
        <p></p>
      </div>
    )
  }
})
