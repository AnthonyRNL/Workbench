var Project = React.createClass({
  render: function() {
    proj = []
    for(x in this.props){
      proj.push(this.props[x])
    }
    details = proj.map(function(x){
      return (
        <ProjectDescName name={x.name} key={x.id} desc={x.description}/>
      )
    })

    return (
      <div className="projects">
        {details}
      </div>
    );
  }
});
