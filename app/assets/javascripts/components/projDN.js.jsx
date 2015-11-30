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
            this.setState({addedButtonText: "Project Added", addButtonClass: 'added waves-effect waves-light btn blue-grey darken-2'})
            exists = true
            return
          }
        }.bind(this))
        if(!exists){
          this.setState({addedButtonText: "Add Project", addButtonClass: "notAdded waves-effect waves-light btn brown lighten-2"})
        }
      }.bind(this)
    })
  },
  addToUser: function(){
    if($(ReactDOM.findDOMNode(this)).find(".notAdded").length > 0){
      $.ajax({
        url: "/api/v1/projects/" + this.props.project_id + "/user_projects",
        dataType: 'json',
        data: this.props.project_id,
        type: "POST",
        success: function(){
            $(ReactDOM.findDOMNode(this)).find(".notAdded").removeClass("notAdded").addClass("added waves-effect waves-light btn blue-grey darken-2").text("Project Added")
          }.bind(this),
        error: function(xhr, status, err){
          alert("please sign in")
        }.bind(this)
      })
    }

  },
  render: function(){
    var materialNodes = this.state.materials.map(function(x, i){
      return (
          <ProjMaterials material={x} key={i} />
      )
    })
    return (
      <div className="proj card col s4">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator projcard center-align" src={this.props.image}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.name}<i className="material-icons right">more_vert</i></span>
          <p></p>
          <button className={this.state.addButtonClass} onClick={this.addToUser}>{this.state.addedButtonText}</button>
        </div>

        <div className="card-reveal">
          <span className="card-title">Description<i className="material-icons right">close</i></span>
          <p></p>
          <ProjDesc description={this.props.description}/>
          <ul>
          <li>
            Materials:
          </li>
          {materialNodes}
          </ul>
        </div>
      </div>

    )
  }
})
