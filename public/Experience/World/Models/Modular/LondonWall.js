import Modular from './Modular.js'
import * as THREE from '/node_modules/three/build/three.module.js'

export default class LondonWall extends Modular
{
    static asset_name = 'london_wall'
    constructor(unique_name)
    {
        super()

        this.unique_name = unique_name

        // Resource
        this.resource = this.resources.items[this.constructor.asset_name]

        this.preSetModel()
    }

    preSetModel(){
        // creates a copy of the original model
        this.model = this.resource.scene.clone()

        this.model.scale.set(1.35, 1.35, 1.35)

        // creates a box to cover the model
        const boxGeo = new THREE.BoxGeometry(40, 4, 80)
        boxGeo.applyMatrix4( new THREE.Matrix4().makeTranslation( -60, 2, 0 ) )
        this.modelDragBox = new THREE.Mesh(
            boxGeo,
            new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
        )
        this.modelDragBox.geometry.computeBoundingBox()

        this.setModel()
    }
}