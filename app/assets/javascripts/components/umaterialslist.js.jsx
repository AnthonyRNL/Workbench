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
      <li className="myMaterials">
        <div className="umaterialname"><b>{this.props.name}</b></div>
        <Umaterial amount={this.props.amount} unit={this.props.unit}/>
        <button className="btn-floating waves-effect waves-light blue-grey" onClick={this.deleteThis}><i className="material-icons">delete</i></button>
        <p></p>
      </li>
    )
  }
})
