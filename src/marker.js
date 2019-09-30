
const mapboxgl = require('mapbox-gl')

const iconURLs = {
    hotel: 'http://i.imgur.com/D9574Cu.png',
    restaurant: 'http://i.imgur.com/cqR6pUI.png',
    activity: 'http://i.imgur.com/WbMOfMl.png'
}

function markerFactory(placeType, lnglat){
  console.log('making a marker in the factory!')
  const markerDomEl  = document.createElement("div")
  markerDomEl.style.width = '32px'
  markerDomEl.style.height = '39px'
  markerDomEl.style.backgroundImage = `url(${iconURLs[placeType]})`
  return new mapboxgl.Marker(markerDomEl).setLngLat(lnglat)
}


module.exports = markerFactory
