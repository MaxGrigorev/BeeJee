import React from 'react';

import axios from 'axios';

export default class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name:'',email:'',text:'',file: '',imagePreviewUrl: ''};
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);

    var form = new FormData();
        form.append("username", "Example");
        form.append("email", "example@example.com");
        form.append("text", "Some text");
        form.append("image", this.state.file);

        axios.post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Example', form,{
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        })
      .then(function (response) {
        console.log('response',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  _handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input name="name" value={this.state.name} onChange={(e)=>this._handleInputChange(e)} />
          <input name="email" value={this.state.email} onChange={(e)=>this._handleInputChange(e)} />
          <input name="text" value={this.state.text} onChange={(e)=>this._handleInputChange(e)} />


          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
  
//ReactDOM.render(<ImageUpload/>, document.getElementById("mainApp"));



function AddForm(props) {
    // textInput задекларирован здесь, т.к. обратный вызов ref ссылается на него
    let textInput = null;
  
    function handleClick() {
      textInput.focus();
    }
  
    return (
      <div>
        <input
          type="text"
          ref={(input) => { textInput = input; }} />
        <input
          type="button"
          value="Focus the text input"
          onClick={handleClick}
        />
      </div>
    );  
  }