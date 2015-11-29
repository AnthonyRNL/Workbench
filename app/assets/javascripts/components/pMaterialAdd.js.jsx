var PMaterialAdd = React.createClass({
  onClickPmaterialButt: function(e){
    e.preventDefault()
    var newPmatName = this.refs.pMatName.value.trim()
    var newPmatUnit = this.refs.pMatUnit.value.trim()
    var newPmatAmount = this.refs.pMatAmount.value.trim()
    var newPmatId = this.refs.pMatId.value.trim()
    this.props.materialAdd({name: newPmatName, unit: newPmatUnit, amount: newPmatAmount, material_id: newPmatId})
    this.refs.pMatName.value = ""
    this.refs.pMatUnit.value = ""
    this.refs.pMatAmount.value = ""
    return
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
        this.setState({autolist: materials})
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {autolist:[]}
  },
  componentDidMount: function(){
    this.autocompleteMList()
  },
  render: function(){
    $("#ui-id-1").css("z-index", "99999")
    $("#pMatName").autocomplete({
      minLength: 0,
      source: this.state.autolist,
      focus: function(event, ui){
        $("#pMatName").val(ui.item.name);
        return false;
      },
      select: function(event,ui){
        $("#pMatName").val(ui.item.name);
        $("#pMatId").val(ui.item.id);
        $("#pMatUnit").val(ui.item.unit);
        return false;
      }
    })
    return (
      <div className="pmaterialAdd col s6">
        <div className="input-field">
          <input type="text" ref="pMatName" id="pMatName" placeholder="check if exists in dropdown"/>
          <label htmlFor="pMatName">Enter New Material</label>
        </div>
        <div className="input-field">
          <input type="text" ref="pMatUnit" id="pMatUnit" placeholder="ex. Ft, 12oz"/>
          <label htmlFor="pMatUnit">Material Unit</label>
        </div>
        <div className="input-field">
          <input type="text" ref="pMatAmount" id="pMatAmount" placeholder="Amount Needed"/>
          <label htmlFor="pMatAmount">Material Amount</label>
        </div>
        <input type="hidden" ref="pMatId" id="pMatId"/>
        <button className="waves-light btn-flat" onClick={this.onClickPmaterialButt}>Add Material</button>
      </div>
    )
  }
})

var PMaterialShow = React.createClass({
  handleDelete: function(){
    var deleteThis = ReactDOM.findDOMNode(this)
    this.props.deleteMat({name: deleteThis})
    return
  },
  render: function(){
    return (
      <div className="pMaterialshow col s6" >
        <ul>
          <li>{this.props.material.name}</li>
          <li>Unit: {this.props.material.unit}</li>
          <li>Amount: {this.props.material.amount}</li>
        </ul>
        <button id="pmatButt" className="waves-light btn-flat" onClick={this.handleDelete}>Remove</button>
      </div>
    )
  }
})
