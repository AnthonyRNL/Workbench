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
        <UserProjectList key={i} project_id={project.id} name={project.name} description={project.description} image={project.project_image.url} user_id={this.props.user_id}/>
      )
    }.bind(this))
    return (
      <div className="Projects">
        <h4>Hey, {this.props.username}</h4>
        <h3>Projects Saved</h3>
          <div className="row">
          {projectNodes}
          </div>
      </div>
    )

  }


})
