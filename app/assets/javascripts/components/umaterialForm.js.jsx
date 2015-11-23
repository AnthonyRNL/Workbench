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
  handleExistingSubmit: function(e){
    e.preventDefault()
    var mAmount = parseInt(this.refs.mAmount.value.trim())
    var mId = parseInt(this.refs.mId.value.trim())
    var mUnit = this.refs.mUnit.value.trim()
    var mName = this.refs.mName.value.trim()

    if(!mAmount || !mId){
      return
    }
    this.props.onExistingUmaterialSubmit({material_id: mId, amount: mAmount, name: mName, unit: mUnit})
    return
  },
  otherButt: function(e){
    $(".uOtherForm").slideToggle()
  },
  autocompleteMList: function(){
    $.ajax({
      url: '/api/v1/materials',
      dataType: 'json',
      success: function(data){
        var materials = data.map(function(x){
          return {
            value: x.name,
            name: x.name,
            id: x.id,
            unit: x.unit
          }
        })
        this.setState({data: materials})
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {data: []}
  },
  componentDidMount: function(){
    this.autocompleteMList()
  },
  render: function(){
    $(".uOtherForm").css("display", "none")
    $( "#mName" ).autocomplete({
      minLength: 0,
      source: this.state.data,
      focus: function( event, ui ) {
        $( "#mName" ).val( ui.item.name );
        return false;
      },
      select: function( event, ui ) {
        $( "#mName" ).val( ui.item.name );
        $("#mId").val(ui.item.id)
        $("#mUnit").val(ui.item.unit)
        return false;
      }
    })
    return (

      <div className="uMaterialForm">
        <div className="materialExist">
          <form className="searchM" onSubmit={this.handleExistingSubmit}>
            <input id="mName" type="text" placeholder="search materials" ref="mName"/>
            <input id="mAmount" type="text" placeholder="Enter Amount" ref="mAmount"/>
            <input id="mUnit" type="hidden" ref="mUnit"/>
            <input id="mId" type="hidden" ref="mId"/>
            <input type="submit" value="Add to your materials"/>
          </form>
          <button className="other" onClick={this.otherButt}> Other Material </button>
        </div>
        <form className="uOtherForm" onSubmit={this.handleSubmit} >
          <input type="text" placeholder="New Material" ref="name"/>
          <input type="text" placeholder="Unit" ref="unit"/>
          <input type="number" placeholder="Amount" ref="amount"/>
          <br></br>
          Perishable:
          <input type="radio" name="perishable" value="true"/> True
          <input type="radio" name="perishable" value="false"/> False
          <br></br>
          <input type="submit" value="Enter New Material" />
        </form>
      </div>
    )
  }
})
