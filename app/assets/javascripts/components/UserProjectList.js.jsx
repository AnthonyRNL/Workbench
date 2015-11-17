var UserProjectList = React.createClass({
  getPmaterials: function(){
    $.ajax({
      url: "/api/v1/projects/" + this.props.project_id + "/pmaterials",
      dataType: "json",
      success: function(data){
        this.setState({data: data})
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {data:[]}
  },
  componentDidMount: function(){
    this.getPmaterials()
  },
  render: function(){
    return(

      <li className="userProject">
        Name: {this.props.name}
        <br></br>
        Description: {this.props.description}
        <br></br>
          <UserProjectMaterials pmaterials={this.state.data} user_id={this.props.user_id}/>
      <p></p>
      </li>
    )
  }
})
