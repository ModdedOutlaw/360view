window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    video: 'londom_portal_injected.mp4',

    width: '512px',
    height: '256px'

  });




}