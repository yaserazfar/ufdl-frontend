import React, { Component } from 'react';
import ReactImageAnnotate from "react-image-annotate"

class Annotate extends Component {    
    constructor(props) {
        super(props);
        this.state = {
          file: '',
          imagePreviewUrl: ''
        };
        this._handleImageChange = this._handleImageChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
      }
    
      _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
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
    render() {

        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        }
     
        return (
            <div className="backgroundAll">
                <form className="selectForm" onSubmit={this._handleSubmit}>
                    <input type="file" id="file" className="fileInputButton" onChange={this._handleImageChange} />
                    <label for="file" class="fileLabel">Select Image</label>
                    {/* <button type="submit" onClick={this._handleSubmit}>Send Annotations</button> */}
                </form>
                <div className="imageDisplay">

{/* Probably will need an if statement so that we can check if an image has been uploaded before we annotate it */}

                    <ReactImageAnnotate
                        selectedImage="https://i.imgur.com/SY4z4Cx.jpg"
                        taskDescription="# Draw region around each Kiwifruit bunch"
                        images={[{ src: "https://i.imgur.com/SY4z4Cx.jpg", name: "Kiwifruit.png" }]}
                        regionClsList={["Kiwifruit", "Human Face"]}
                    />
                  

                    {/* {$imagePreview} */}



                </div>
            </div>
        )
        
    }
}

export default Annotate