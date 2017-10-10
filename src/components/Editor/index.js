import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { uploadItem, addNewItem } from '../../actions/item'
import { getAllCategory } from '../../actions/category'
import styles from './editor.css'
import Preview from '../Preview'

@connect(
  state => ({
    listCategory: state.categories
  }),
  dispatch => ({
    actions: bindActionCreators({ uploadItem, addNewItem }, dispatch),
    category: bindActionCreators({ getAllCategory }, dispatch)
  })
)
export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      haveModel: false,
      imageFile: '',
      imagePreview: '',
      modelFile: '',
      modelPreview: '',
      isAddCategory: false
    }
  }

  componentDidMount() {
    const { getAllCategory } = this.props.category
    getAllCategory()
  }

  _handleChange = () => {
    this.setState({
      haveModel: !this.state.haveModel
    })
  }

  _handleFileUpload = (ref, checkFile, stateAttr) => {
    const files = ref.files
    if (files && files[0]) {
      if (checkFile(files[0])) {
        const reader = new FileReader()
        reader.onload = e => {
          if (stateAttr === 'imageFile') {
            this.setState({
              [stateAttr]: files[0],
              imagePreview: e.target.result
            })
          } else {
            this.setState({
              [stateAttr]: files[0],
              modelPreview: URL.createObjectURL(files[0])
            })
          }
        }
        reader.readAsDataURL(files[0])
      } else {
        alert('Invalid File Type')
      }
    }
  }

  _handleImageUpload = () => {
    this._handleFileUpload(this._image, this._checkImageExtension, 'imageFile')
  }

  _handleModelUpload = () => {
    this._handleFileUpload(this._model, this._checkModelExtension, 'modelFile')
  }

  _checkImageExtension(fileInput) {
    return fileInput.name.match(/.(jpg|jpeg|png)$/i)
  }

  _checkModelExtension(fileInput) {
    return fileInput.name.match(/.(fbx)$/i)
  }

  _addNewItem = e => {
    e.preventDefault()
    const { addNewItem } = this.props.actions
    const dataInfo = {
      name: this._name.value,
      summary: this._summary.value,
      description: this._description.value,
      image: this.state.imageFile
    }
    addNewItem(dataInfo)
  }

  render() {
    const { haveModel, imageFile, imagePreview, modelPreview } = this.state
    const { listCategory } = this.props
    return (
      <div className={`container ${styles.editor_container}`}>
        <form className="col-md-offset-3 col-md-6">
          <div className="row">
            <div className="col-md-12 form-group">
              <label htmlFor="category">Category: </label>
              {listCategory &&
                listCategory.get('ListItem') &&
                listCategory.get('ListItem').length > 0 &&
                <select
                  ref={node => (this._category = node)}
                  className="form-control"
                  id="category"
                >
                  {listCategory.get('ListItem').map(category => {
                    return (
                      <option key={category['_id']} value={category['_id']}>
                        {category['name']}
                      </option>
                    )
                  })}
                </select>}

              <label htmlFor="name">Name: </label>
              <input
                type="text"
                className="form-control"
                id="name"
                ref={node => (this._name = node)}
              />
              <label htmlFor="summary">Summary: </label>
              <input
                className="form-control"
                type="text"
                id="summary"
                ref={node => (this._summary = node)}
              />
              <label htmlFor="description">Description: </label>
              <input
                className="form-control"
                type="text"
                id="description"
                ref={node => (this._description = node)}
              />

              <label htmlFor="description">Image: </label>
              <input
                type="file"
                className="form-control"
                ref={node => (this._image = node)}
                onChange={this._handleImageUpload}
              />
              {imageFile && <img src={imagePreview} />}
              <div>
                <label htmlFor="model">Do you have 3D model: </label>
                <input
                  type="checkbox"
                  checked={haveModel}
                  onChange={this._handleChange}
                  className={styles.model_checkbox}
                />
              </div>
              {haveModel
                ? <div>
                    <input
                      type="file"
                      ref={node => (this._model = node)}
                      onChange={this._handleModelUpload}
                    />
                    {modelPreview &&
                      <a
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#editorPreview"
                      >
                        Preview
                      </a>}
                  </div>
                : null}
              <button className="btn btn-primary" onClick={this._addNewItem}>
                Save
              </button>
            </div>
          </div>
        </form>
        {modelPreview && <Preview id="editorPreview" url={modelPreview} />}
      </div>
    )
  }
}
