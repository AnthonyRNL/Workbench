var UserProjectMaterials = React.createClass({
  checkUserMaterials: function(){
    $.ajax({
      url: "/api/v1/users/" + this.props.user_id + "/umaterials",
      dataType: 'json',
      success: function(data){
        //looking at the data from all the materials that a user has, check if the projectmaterials
        this.props.pmaterials.forEach(function(pmaterial){
          // debugger
          var owned = false
          data.forEach(function(umaterial){
            debugger
            if(umaterial.id === pmaterial.id){
              var current_own = this.state.own
              var new_own = current_own.push(pmaterial)
              this.setState({own: new_own})
              owned = true
              return
            }
          }.bind(this))
          if(!owned){
            var current_need = this.state.needed
            var new_need = current_need.push(pmaterial)
            this.setState({needed: new_need})
          }
        }.bind(this))
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {
      needed: [],
      own: []
    }
  },
  componentDidMount: function(){
    this.checkUserMaterials()
  },
  render: function(){
    // debugger
    return (

      <div className="uPmaterials">
        Needed Materials:
        <div className="mNeeded">
        </div>
        <p></p>
        Owned Materials:
        <div createClass="mOwned">

        </div>
      </div>

    )
  }
})
//
// var MaterialsNeeded = React.createClass({
//   render: function(){
//     return (
//
//     )
//   }
// })

// var MaterialsOwn = React.createClass({
//   render: function(){
//     return (
//
//     )
//   }
// })
