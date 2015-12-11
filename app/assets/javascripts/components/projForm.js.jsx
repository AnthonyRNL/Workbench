var ProjectForm = React.createClass({
  onAddMaterials: function(data){
    var materials = this.state.materials
    var newMaterials = materials.concat([data])
    this.setState({materials: newMaterials})
  },
  onDelete: function(data){
    var materials = this.state.materials
    var idx = materials.map(function(x){
      return x.id
    }).indexOf(data.name)

    materials.splice(idx,1)

    this.setState({materials: materials})
    // console.log("hello")
  },

  getInitialState: function(){
    return {
      materials:[],
      steps:[],
      pimage: null
        }
  },
  handleFile: function(e){
    var file = e.target.files[0]
    var reader = new FileReader();
    reader.onload = function(upload){
      this.setState({
        pimage: upload.target.result
      })
    }.bind(this)

    reader.readAsDataURL(file);
  },
  handleSubmit: function(e){
    e.preventDefault()
    var name = this.refs.name.value.trim()
    var description = this.refs.description.value.trim()
    var materials = this.state.materials

    if(!name || !description){
      return
    }

    this.props.onProjectSubmit({name: name, description: description, materials: materials, project_image: this.state.pimage})
    this.refs.name.value = ""
    this.refs.description.value = ""
    this.refs.project_image.value = ""
    this.refs.imgFile.value = ""
    $("#pform").find("input:text, textarea").val("")
    $("#pform").find(".pMaterialshow").remove()
    $("#pform")[0].reset()
    return
  },
  render: function(){
    $("#modal-close").on("click", function(){
      $("#pform").find("input:text, textarea").val("")
      $("#pform").find(".pMaterialshow").remove()
      $("#pform")[0].reset()
    })
    $("#modal-clear").on("click", function(){
      $("#pform").find("input:text, textarea").val("")
      $("#pform").find(".pMaterialshow").remove()
      $("#pform")[0].reset()
    })

    var pmaterialNode = this.state.materials.map(function(material, i){
      return (
          <PMaterialShow key={i} material={material} deleteMat={this.onDelete} />
      )
    }.bind(this))
    return (
        <div className="projModal">
          <a href="#modalPF" className="modal-trigger btn-floating btn-large waves-effect waves-light blue-grey"><i className="material-icons">add</i></a>
          <div id="modalPF" className="modal modal-fixed-footer">
            <div className="modal-content row">
              <h4 className="center-align">Add a new project</h4>
              <div id="leftArrow">
                {"<"}
              </div>
              <div id="rightArrow">
                {">"}
              </div>

              <form className="projectform container col s8" id="pform" onSubmit={this.handleSubmit} encType="multipart/form-data">

                <ul>
                  <li className="hideable" style={{display: "block"}}>
                      <div className="input-field col s6">
                        <input type="text" placeholder="Project Name" ref="name"/>
                      </div>
                  </li>
                  <li className="hideable">
                    <div className="file-field input-field" style={{right:"20%"}}>
                      <div className="btn">
                        <span>Image</span>
                        <input type="file" ref="imgFile" onChange={this.handleFile}/>
                      </div>
                      <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" ref="project_image"/>
                      </div>
                    </div>
                  </li>
                  <li className="hideable">
                      <div className="input-field col s6">
                        <textarea id="projdesc" className="materialize-textarea" ref="description"></textarea>
                        <label htmlFor="projdesc">Please write a description of your project</label>
                      </div>
                  </li>
                  <li className="hideable">
                      <PMaterialAdd materialAdd={this.onAddMaterials}/>
                      {pmaterialNode}
                  </li>

                </ul>

              </form>

            </div>
            <div className="modal-footer">
              <button className="waves-light waves-effect btn modal-close" type="submit" form="pform">Submit
                <i className="material-icons right">send</i>
              </button>
              <a href="#!" id="modal-close" className="modal-action modal-close waves-effect waves-green btn-flat ">Done</a>
              <a id="modal-clear" className="waves-effect waves-blue-grey btn-flat ">Clear</a>
            </div>
          </div>




        </div>

    )
  }
})
