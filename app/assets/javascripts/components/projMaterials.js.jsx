var ProjMaterials = React.createClass({
  // getMaterials: function(){
  //   $.ajax({
  //     url: this.props.url,
  //     dataType: "json",
  //     success: function(data){
  //       this.setState({data: data})
  //     }.bind(this)
  //   })
  // },
  // componentDidMount: function(){
  //   this.getMaterials()
  // },
  // getInitialState: function(){
  //   return {data:{}}
  // },
  render: function(){
    
    return (
      <li>{this.props.material.name}</li>
    )
  }
})
