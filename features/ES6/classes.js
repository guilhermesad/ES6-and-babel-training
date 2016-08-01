class SkinnedMesh extends THREE.Mesh {

  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    //...
  }

  update(camera) {
    //...
    super.update();
  }

  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
