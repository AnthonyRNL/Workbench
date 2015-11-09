var ProjectForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault()
    var name = this.refs.name.value.trim()
    var description = this.refs.description.value.trim()

    if(!name || !description){
      return
    }
    this.props.onProjectSubmit({name: name, description: description})
    this.refs.name.value = ""
    this.refs.description.value = ""
    return
  },
  render: function(){
    return (
      <form className="projectform" id="pform" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Project Name" ref="name"/>
        <p></p>
        <textarea form="pform" cols="35" rows="8" placeholder="enter description" ref="description"></textarea>
        <input type="submit" value="Enter new Project"/>
      </form>
    )
  }
})
