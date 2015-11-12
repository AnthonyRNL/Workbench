var UserProjectList = React.createClass({
  render: function(){
    return(

      <li className="userProject">
        Name: {this.props.name}
        <br></br>
        Description: {this.props.description}
      <p></p>
      </li>
    )
  }
})
