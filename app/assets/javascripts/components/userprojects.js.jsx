var UserProjects = React.createClass({
  getProjects: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data){
        this.setState({data: data})
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {data: []}
  },
  componentWillMount: function(){
    this.getProjects()
  },
  render: function(){
    var projectNodes = this.state.data.map(function(project, i){
      return(
        <UserProjectList key={i} project_id={project.id} name={project.name} description={project.description}/>
      )
    })
    return (
      <div className="Projects">
        <h1>Projects Saved</h1>
          <ul>
          {projectNodes}
          </ul>
      </div>
    )

  }


})
