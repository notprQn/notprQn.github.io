const cameraView = document.querySelector("#hotspot-camera-view-demo");
const annotationClicked = (annotation) => {
let dataset = annotation.dataset;
    cameraView.cameraTarget = dataset.target;
    cameraView.cameraOrbit = dataset.orbit;
    cameraView.fieldOfView = '45deg';
}

cameraView.querySelectorAll('button').forEach((hotspot) => {
    hotspot.addEventListener('click', () => annotationClicked(hotspot));
});