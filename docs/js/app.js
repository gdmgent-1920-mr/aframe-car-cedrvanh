console.info(AFRAME.version, AFRAME.THREE.REVISION);

AFRAME.registerSystem('_boot', {
  init() {
    console.log('init AFRAME');
    this.el.addEventListener('model-loaded', e => {
      const carEntity = document.getElementById('carEntity');
      const carMesh = carEntity.getObject3D('mesh');
      const car = carMesh.getObjectByName('Car');
    })
  }
})