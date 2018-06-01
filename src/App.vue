<template>
  <sui-sidebar-pushable>
    <side-menu 
      v-bind:visible="sidebarVisible"
      v-bind:selectedTone="selections.tone"
      v-bind:selectedSources="selections.sources"
      v-on:close="handleClose"
      v-on:sourceChanged="handleSourceChange"
      v-on:toneChanged="handleToneChange"
    />
    <sui-button v-on:click="toggleSidebar" class="sidebarToggle simpleBtn">
      <sui-icon name="sidebar" size="big" />
    </sui-button>
    <sui-sidebar-pusher className="contentArea">
      <map-view v-bind:selectedSources="selections.sources" />
    </sui-sidebar-pusher>
  </sui-sidebar-pushable>  
</template>

<script>
import MapView from './components/MapView.vue';
import SideMenu from './components/SideMenu.vue';

export default {
  name: 'app',
  data: function() {
    return {
      sidebarVisible: true,
      selections: {
        sources: {
          education: true,
          places: true
        },
        tone: 'all' // one of: all, positive, negative, neutral
      }
    };
  },
  components: {
    MapView,
    SideMenu
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    handleClose() {
      this.sidebarVisible = false;
    },
    handleToneChange(tone) {
      if (tone.selected) {
        this.selections.tone = tone.name;
      }
    },
    handleSourceChange(source) {
      this.selections.sources[source.name] = source.selected;
    }
  }
};
</script>

<style>
.sidebarToggle {
  position: absolute;
  left: 0;
  z-index: 100;
}

.ui.button.simpleBtn,
.simpleBtn {
  padding: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.contentArea {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
