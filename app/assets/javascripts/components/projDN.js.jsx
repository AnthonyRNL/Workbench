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
    return {
      materials: [],
      addedButtonText: "",
      addButtonClass: ""
    }
  },
  componentWillMount: function(){
    this.getMaterials()
    this.checkProjectAdded()
  },
  checkProjectAdded: function(){
    $.ajax({
      url: "/api/v1/projects/" + this.props.project_id + "/user_projects",
      dataType: 'json',
      success: function(data){
        var exists = false
        data.forEach(function(x){
          if(x.id === parseInt(this.props.user_id)){
            this.setState({addedButtonText: "Project Added", addButtonClass: 'added'})
            exists = true
            return
          }
        }.bind(this))
        if(!exists){
          this.setState({addedButtonText: "Add to your projects", addButtonClass: "notAdded"})
        }
      }.bind(this)
    })
  },
  addToUser: function(){
    $.ajax({
      url: "/api/v1/projects/" + this.props.project_id + "/user_projects",
      dataType: 'json',
      data: this.props.project_id,
      type: "POST",
      success: function(){
          $(this.getDOMNode()).find(".notAdded").removeClass("notAdded").addClass("added").text("Project Added")
        }.bind(this),
      error: function(xhr, status, err){
        alert("please sign in")
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
        <button className={this.state.addButtonClass} onClick={this.addToUser}>{this.state.addedButtonText}</button>
        <ProjDesc description={this.props.description}/>
        <ul>
        {materialNodes}
        </ul>
      </div>

    )
  }
})
