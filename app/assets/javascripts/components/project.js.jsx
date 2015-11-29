var Project = React.createClass({
  setDB: function(){
    $.ajax(
      this.props.url,
      {
        dataType: 'json',
        success: function(data){
          this.setState({data: data})
        }.bind(this),
        error: function(xhr, status, err){
          console.error(this.props.url, status, err.toString())
        }.bind(this)
      }
    )
  },
  submitProjectForm: function(project){
    var projects = this.state.data
    var newthing = {name: project.name, description: project.description}
    var newProjects = projects.concat([{name: project.name, description: project.description}])
    this.setState({data: newProjects})
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: project,
      success: function(data){
        this.setState({data: newProjects})
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  // addmaterial: function(material){
  //   // debugger
  //   $.ajax({
  //     url: "/api/v1/materials",
  //     dataType: 'json',
  //     data: material,
  //     type: 'POST',
  //     success: function(data){
  //       console.log("yes?")
  //     },
  //     error: function(xhr, status, err){
  //       console.error("/api/v1/materials", status, err.toString())
  //     }
  //   })
  // },
  getInitialState: function(){
    return {data:[]}
  },

  componentWillMount: function(){
    this.setDB()
  },
  render: function() {
    var projectNode = this.state.data.map(function(project, i){
      return (
        <ProjectDescName url={this.props.url + "/" + (i + 1) + "/pmaterials"}  user_id={this.props.user} project_id={project.id} name={project.name} key={i} description={project.description}/>

      )
    }.bind(this))
    return (
      <div className="projectBox">
        <ProjectForm onProjectSubmit={this.submitProjectForm}/>
        {projectNode}
      </div>
    );
  }
});
