<template>
  <sui-sidebar-pushable>
    <side-menu v-bind:visible="sidebarVisible" v-on:close="toggleSidebar" />
    <sui-button v-on:click="toggleSidebar" class="sidebarToggle simpleBtn">
      <sui-icon name="sidebar" size="big" />
    </sui-button>
    <sui-sidebar-pusher className="contentArea">
      <map-view />
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
      sidebarVisible: false
    };
  },
  components: {
    MapView,
    SideMenu
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
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
