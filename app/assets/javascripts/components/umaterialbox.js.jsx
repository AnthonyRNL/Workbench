var UmaterialBox = React.createClass({
  setDB: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data){
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  handleUmaterialSubmit: function(umaterial){
    var umaterials = this.state.data
    var newUmaterials = umaterials.concat([umaterial])
    this.setState({data: newUmaterials})
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: umaterial,
      success: function(data){
        this.setState({data: newUmaterials})
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  // handleExistingUmaterialSubmit: function(umaterial){
  //   //this is where i take all the old umaterials, add the new one to the array
  //   // and reset the state to the new array
  //   var umaterials = this.state.data
  //   var newUmaterials = this.state.data.concat([umaterial])
  //   this.setState({data: newUmaterials})
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: 'json',
  //     type: 'POST',
  //     data: umaterial,
  //     success: function(data){
  //       this.setState({data: newUmaterials})
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.error(this.props.url, status, err.toString())
  //     }.bind(this)
  //   })
  //
  // },
  handleDelete: function(umaterial){
    var umaterials = this.state.data

    var idx = umaterials.map(function(x){
      return x.id
    }).indexOf(umaterial.id)
    umaterials.splice(idx,1)
    this.setState({data: umaterials})
    $.ajax({
      url: this.props.url + "/" + umaterial.id,
      dataType: 'json',
      type: 'DELETE',
      data: umaterial,
      success: function(data){
        this.setState({data: data})
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {data: []}
  },

  componentWillMount: function(){
    this.setDB()
  },

  render: function(){
    var umaterialNode = this.state.data.map(function(umaterial,i){
      return (
        < UmaterialsList key={i} onDelete={this.handleDelete} name={umaterial.name}  id={umaterial.id} amount={umaterial.amount} unit={umaterial.unit} />
      )
    }.bind(this))
    return (
      <div className="materialsBox">
      <div id="materialCont">

      </div>
          <ul id="toolbelt" className="side-nav fixed">
            <UmaterialForm onExistingUmaterialSubmit={this.handleExistingUmaterialSubmit} onUmaterialSubmit={this.handleUmaterialSubmit}/>

            {umaterialNode}
          </ul>
          <a href="#" data-activates="toolbelt" className="button-collapse"><i className="mdi-navigation-menu"></i></a>

      </div>
    )
  }
})
