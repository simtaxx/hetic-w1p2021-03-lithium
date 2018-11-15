var ids = ['container', 'photo-footer'];

ids.forEach(function(id) {
  var element = document.getElementById(id);
  console.log('wesh');


  var waypoint = new Waypoint({
    element: element,
    handler: function(direction) {
      if(element.className =='is-reached'){
        element.classList.remove('is-reached')
      } else{
        element.classList.add('is-reached')
      }
    },
 offset : '90%'
  });
});