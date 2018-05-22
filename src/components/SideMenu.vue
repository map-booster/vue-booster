<template>
  <sui-sidebar as="Menu" animation='overlay' width='wide' v-bind:visible="visible" vertical>
    <button class="simpleBtn sidebarClose" v-on:click="$emit('close')">
      <sui-icon name="angle double left" size="big" />
    </button>
    <sui-form>
      <sui-menu-Item>
        <sui-menu-header>Data Sources</sui-menu-header>
        <sui-menu-menu>
          <sui-menu-item>
            <sui-checkbox label="Populated places" v-model="sources" value="places" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox label="Education news" v-model="sources" value="education" />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu-item>
      <sui-menu-item>
        <sui-menu-header>Tone of news</sui-menu-header>
        <sui-menu-menu>
          <sui-menu-item>
            <sui-checkbox radio label="All" value="all" v-model="tone" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox radio label="Positive" value="positive" v-model="tone" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox radio label="Neutral" value="neutral" v-model="tone" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox radio label="Negative" value="negative" v-model="tone" />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu-item>
    </sui-form>
  </sui-sidebar>
</template>

<script>
export default {
  name: 'side-menu',
  props: ['visible'],
  data: function() {
    return {
      tone: 'all',
      sources: ['education', 'places']
    };
  }
};
</script>

<style>
</style>
  