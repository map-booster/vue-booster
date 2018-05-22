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
            <sui-checkbox label="Populated places" v-bind:input-value="sources.places === true" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox label="Education news" v-bind:input-value="sources.education === true" />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu-item>
      <sui-menu-item>
        <sui-menu-header>Tone of news</sui-menu-header>
        <sui-menu-menu>
          <sui-menu-item>
            <sui-checkbox radio label="All" v-bind:input-value="tone === 'all'" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox radio label="Positive" v-bind:input-value="tone === 'positive'" />
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox radio label="Neutral" v-bind:input-value="tone === 'neutral' "/>
          </sui-menu-item>
          <sui-menu-item>
            <sui-checkbox radio label="Negative" v-bind:input-value="tone === 'negative'" />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu-item>
    </sui-form>
  </sui-sidebar>
</template>

<script>
export default {
  name: 'side-menu',
  props: ['visible', 'tone', 'sources']
};
</script>

<style>
</style>
  