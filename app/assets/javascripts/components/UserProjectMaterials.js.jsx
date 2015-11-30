var UserProjectMaterials = React.createClass({
  checkUserMaterials: function(){
    $.ajax({
      url: "/api/v1/users/" + this.props.user_id + "/umaterials",
      dataType: 'json',
      success: function(data){
        //looking at all the materials that a user has, check if the projectmaterials
        this.props.pmaterials.forEach(function(pmaterial){
          var owned = false
            // debugger
          data.forEach(function(umaterial){
            if(umaterial.material_id === pmaterial.material_id){
              var new_own = this.state.own
              new_own.push(pmaterial)
              this.setState({own: new_own})
              owned = true
              return
            }
          }.bind(this))
          if(!owned){
            var new_need = this.state.need
            new_need.push(pmaterial)
            this.setState({need: new_need})
          }

        }.bind(this))
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {
      need: [],
      own: []
    }
  },
  componentDidMount: function(){
    this.checkUserMaterials()
  },
  render: function(){
    // debugger
      var needNode = this.state.need.map(function(x, i){
        return (
          <MaterialsNeeded need={x} key={i}/>
        )
      })

      var ownNode = this.state.own.map(function(x,i){
        return (
          <MaterialsOwn own={x} key={i}/>
        )
      })
    return (
      <div className="uPmaterials">
        <div className="bold">Needed Materials:</div>
        <div className="mNeeded">
          {needNode}
        </div>
        <p></p>
        <div className="bold">Owned Materials:</div>
        <div createClass="mOwned">
          {ownNode}
        </div>
      </div>

    )
  }
})

var MaterialsNeeded = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.need.name}
      </div>
    )
  }
})

var MaterialsOwn = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.own.name}
      </div>
    )
  }
})
