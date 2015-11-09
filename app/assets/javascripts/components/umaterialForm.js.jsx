var UmaterialForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var name = this.refs.name.value.trim()
    var unit = this.refs.unit.value.trim()
    var amount = this.refs.amount.value.trim()

    if(!name || !unit || !amount){
      return;
    }
    this.props.onUmaterialSubmit({name: name, unit: unit, amount: amount})
    this.refs.name.value = ""
    this.refs.unit.value = ""
    this.refs.amount.value = ""
    return
  },
  render: function(){
    return (
      <form className="uMaterialForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="New Material" ref="name"/>
        <input type="text" placeholder="Unit" ref="unit"/>
        <input type="number" placeholder="Amount" ref="amount"/>
        <input type="submit" value="Enter New Material" />
      </form>
    )
  }
})
