var ProjectDescName = React.createClass({
  getMaterials: function(){
    $.ajax(
      this.props.url,
      {
      dataType: 'json',
      success: function(data){
        this.setState({materials: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {materials: []}
  },
  componentWillMount: function(){
    this.getMaterials()
  },
  addToUser: function(){
    // debugger
    $.ajax({
      url: "/api/v1/projects/" + this.props.project_id + "/user_projects",
      dataType: 'json',
      data: this.props.project_id,
      type: "POST",
      success: function(){
        $(this.getDOMNode()).find(".addProj").text("proj added")
      }.bind(this)
    })

  },
  render: function(){
    var materialNodes = this.state.materials.map(function(x, i){
      return (
          <ProjMaterials material={x} key={i} />
      )
    })
    return (
      <div className="proj">
          <h3>{this.props.name}</h3>
        <button className="addProj" onClick={this.addToUser}>Add to your projects</button>
        <ProjDesc description={this.props.description}/>
        <ul>
        {materialNodes}
        </ul>
      </div>

    )
  }
})
