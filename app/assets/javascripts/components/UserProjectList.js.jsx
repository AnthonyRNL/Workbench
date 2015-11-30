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

      <div className="proj card col s4">
        <div className="card-image waves-effect waves-block waves-ligh">
          <img className="activator projcard center-align" src={this.props.image}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.name}<i className="material-icons right">more_vert</i></span>
        </div>
        <div className="card-reveal">
          <span className="card-title">Description<i className="material-icons right">close</i></span>
          Description: {this.props.description}
          <p></p>
          <UserProjectMaterials pmaterials={this.state.data} user_id={this.props.user_id}/>
        </div>
      </div>
    )
  }
})
