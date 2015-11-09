var ProjectDescName = React.createClass({
  getMaterials: function(){
    $.ajax({
      url: this.props.url + '/' + "pmaterials",
      dataType: 'json',
      success: function(data){
        this.setState({data: data})

      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    })
  },
  getInitialState: function(){
    return {data: []}
  },
  componentDidUpdate: function(){
    this.getMaterials()

  },
  render: function(){
    return (
      <div className="proj">
          <h3>{this.props.name}</h3>
        <ProjDesc description={this.props.description}/>
        <ul>
          < ProjMaterials materials={this.state.data} />
        </ul>
      </div>

    )
  }
})
