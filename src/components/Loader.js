import React, { Component } from 'react'
import PropTypes from 'prop-types'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import OBJLoader from 'three-obj-loader'
OBJLoader(THREE)
import path from 'path'
import MTLLoader from 'three-mtl-loader'

class Transform extends Component {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
    //color: PropTypes.string.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.cameraPosition = new THREE.Vector3(1000, 500, 1000)
    this.lookAt = new THREE.Vector3(0, 200, 0)
    this.lightPosition = new THREE.Vector3(1, 1, 1)
    THREE.ImageUtils.crossOrigin = '' //moved from render()
    this.object

    this._onAnimate = () => {}
  }

  _loadModel = () => {
    //const PATH = 'https://s3-us-west-2.amazonaws.com/BUCKET/'
    const MTL_FILE = 'dragon4_2.mtl'
    const OBJ_FILE = 'dragon4_2.obj'

    var onProgress = function(xhr) {
      if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100
        console.log(Math.round(percentComplete, 2) + '% downloaded')
      }
    }
    var onError = function(xhr) {
      console.log('error', xhr)
    }

    const mtlLoader = new MTLLoader()
    //mtlLoader.setBaseUrl(path.resolve(__dirname, 'dragon4_2'))
    mtlLoader.setPath(path.resolve(__dirname, 'dragon4_2')) // One of these might not be needed
    mtlLoader.crossOrigin = '*' // Use as needed
    mtlLoader.load(MTL_FILE, materials => {
      materials.preload()
      // OBJ Loader
      const objLoader = new THREE.OBJLoader()
      objLoader.setMaterials(materials)
      objLoader.setPath(path.resolve(__dirname, 'dragon4_2'))
      objLoader.load(
        OBJ_FILE,
        object => {
          console.log(object)
          object.scale.set(300, 300, 300)
          this._group.add(object) //Puts the loaded object into the render tag with ref "group"
        },
        onProgress,
        onError
      )
    })
  }
  componentDidMount() {
    this._loadModel()
  }

  render() {
    const { width, height } = this.props

    return (
      <React3
        mainCamera="camera"
        width={width}
        height={height}
        onAnimate={this._onAnimate}
        ref={node => (this._react3 = node)}
      >
        <scene ref={node => (this._scene = node)}>
          <perspectiveCamera
            name="camera"
            fov={70}
            aspect={width / height}
            near={1}
            far={3000}
            position={this.cameraPosition}
            lookAt={this.lookAt}
          />
          <ambientLight color={new THREE.Color('white')} />

          <group ref={node => (this._group = node)} />

          <mesh
            position={this.groundPosition}
            rotation={this.groundRotation}
            receiveShadow
          >
            <planeBufferGeometry width={500} height={500} />
            <meshPhongMaterial color={0xffffff} specular={0x111111}>
              <texture
                url={path.resolve(__dirname, 'dragon4_2/dragon4_201.jpg')}
                wrapS={THREE.RepeatWrapping}
                wrapT={THREE.RepeatWrapping}
                repeat={this.groundRepeat}
                anisotropy={16}
              />
            </meshPhongMaterial>
          </mesh>

        </scene>
      </React3>
    )
  }
}
export default Transform
