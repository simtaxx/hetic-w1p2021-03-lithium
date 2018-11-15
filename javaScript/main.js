console.log(document.getElementById('container'))

var waypoint = new Waypoint({
  element: document.getElementById('container'),
  handler: function(direction) {
    document.getElementById('container').classList.add('is-reached')
  }
})