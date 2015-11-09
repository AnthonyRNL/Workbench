var Project = React.createClass({
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
  submitProjectForm: function(project){
    var projects = this.state.data
    var newProjects = projects.concat([project])
    this.setState({data: newProjects})
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: project,
      success: function(data){
        this.setState({data: data})
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {data:[]}
  },

  componentWillMount: function(){
    this.setDB()
    setInterval(this.setDB, this.props.pollInterval)
  },
  render: function() {
    var projectNode = this.state.data.map(function(project, i){
      return (
        <ProjectDescName url={this.props.url + "/" + project.id} name={project.name} key={i} description={project.description}/>
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
