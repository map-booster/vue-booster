<template>
  <div ref="map" class="map">
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;
const dataUrl = process.env.VUE_APP_DATA_URL;

export default {
  name: 'map-view',
  data: function() {
    return {
      lng: 5,
      lat: 34,
      zoom: 1.5
    };
  },
  mounted: function() {
    const vm = this;
    const map = new mapboxgl.Map({
      container: vm.$refs.map,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [vm.lng, vm.lat],
      zoom: this.zoom
    });
    map.on('load', () => {
      map.addLayer({
        id: 'locations',
        type: 'circle',
        source: {
          type: 'geojson',
          data: dataUrl
        },
        paint: {
          'circle-radius': {
            'base': 1.75,
            'stops': [[12, 2], [22, 180]]
          },
          'circle-color': '#10627c'
        }
      });
    });    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
