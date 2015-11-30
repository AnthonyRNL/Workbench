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
    var mId = this.refs.mId.value.trim()
    var mUnit = this.refs.mUnit.value.trim()
    var mName = this.refs.mName.value.trim()
    if(!mAmount || !mName){
      return
    }
    this.props.onUmaterialSubmit({material_id: mId, amount: mAmount, name: mName, unit: mUnit})
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
    $("#searchM").css("display", "none")
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
        <div className="row">
          <a id="addUmaterialButt" className="waves-effect waves-light btn">Add Materials</a>
          <form className="col s12" id="searchM" onSubmit={this.handleExistingSubmit}>
            <div className="row">
              <div className="input-field">
                <input id="mName" type="search" ref="mName" placeholder="Name"/>
              </div>
              <div className="input-field">
                <input id="mUnit" type="text" ref="mUnit" placeholder="Units"/>
              </div>
              <div className="input-field">
                <input id="mAmount" type="text" placeholder="Enter Amount" ref="mAmount"/>
              </div>
              <input id="mId" type="hidden" ref="mId"/>
            </div>
            <button className="btn-floating waves-light waves-effect blue-grey" type="submit"><i className="material-icons">add</i></button>
          </form>
        </div>
      </div>
    )
  }
})
