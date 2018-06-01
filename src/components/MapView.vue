<template>
  <div ref="map" class="map">
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import api from '../util/api';

mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;

export default {
  name: 'map-view',
  data: function() {
    return {
      lng: 5,
      lat: 34,
      zoom: 1.5,
      map: {}
    };
  },
  props: ['selectedSources'],
  computed: {
    // Convert boolean to Mapbox-style paint property.
    // These properties are used by the watchers and the map init.
    educationVisible: function() {
      return (this.selectedSources.education) ? 'visible' : 'none';
    },
    placesVisible: function() {
      return (this.selectedSources.places) ? 'visible' : 'none';
    }
  },
  watch: {
    educationVisible: function (newVal) {
      this.map.setLayoutProperty('education', 'visibility', newVal);
    },
    placesVisible: function (newVal) {
      this.map.setLayoutProperty('places', 'visibility', newVal);
    }
  },
  mounted: function() {
    const vm = this;
    vm.map = new mapboxgl.Map({
      container: vm.$refs.map,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [vm.lng, vm.lat],
      zoom: this.zoom
    });
    vm.map.on('load', () => {
      vm.map.addLayer({
        id: 'education',
        type: 'circle',
        source: {
          type: 'geojson',
          data: api.URL_EDUCATION
        },
        layout: {
          visibility: vm.educationVisible
        },
        paint: {
          'circle-radius': {
            'base': 1.75,
            'stops': [[12, 2], [22, 180]]
          },
          'circle-color': '#fa824c'
        }
      });
      vm.map.addLayer({
        id: 'places',
        type: 'circle',
        source: {
          type: 'geojson',
          data: api.URL_POPULATED_PLACES
        },
        layout: {
          visibility: vm.placesVisible
        },
        paint: {
          'circle-radius': {
            'base': 1.75,
            'stops': [[12, 4], [22, 360]]
          },
          'circle-color': '#3c91e6',
          'circle-opacity': 0.6
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
