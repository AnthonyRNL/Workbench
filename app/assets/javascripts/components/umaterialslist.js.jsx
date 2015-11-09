var UmaterialsList = React.createClass({
  deleteThis: function(e){
    e.preventDefault();
    var id = this.props.id
    this.props.onDelete({id: id})
    return
  },
  render: function(){
    return (
      <div className="myMaterials">
        <h4>{this.props.name}</h4>
        <button onClick={this.deleteThis}>Delete</button>
        <Umaterial amount={this.props.amount} unit={this.props.unit}/>
      </div>
    )
  }
})
