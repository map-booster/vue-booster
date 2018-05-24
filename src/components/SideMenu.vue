<template>
  <sui-sidebar as="Menu" animation='overlay' width='wide' v-bind:visible="visible" vertical>
    <button class="simpleBtn sidebarClose" v-on:click="$emit('close')">
      <sui-icon name="angle double left" size="big" />
    </button>
    <sui-form>
      <sui-menu-Item>
        <sui-menu-header>Data Sources</sui-menu-header>
        <sui-menu-menu>
          <sui-menu-item v-for="source in sourceList" v-bind:key="source.id">
            <sui-checkbox
              v-bind:label="source.name"
              v-bind:input-value="selectedSources[source.id] === true"
              v-on:change="$emit('sourceChanged', {name:source.id, selected: $event})"
            />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu-item>
      <sui-menu-item>
        <sui-menu-header>Tone of news</sui-menu-header>
        <sui-menu-menu>
          <sui-menu-item v-for="tone in toneList" v-bind:key="tone.id">
            <sui-checkbox
              radio
              v-bind:label="tone.name"
              v-bind:input-value="selectedTone === tone.id"
              v-on:change="$emit('toneChanged', {name: tone.id, selected: $event})"
            />
          </sui-menu-item>
        </sui-menu-menu>
      </sui-menu-item>
    </sui-form>
  </sui-sidebar>
</template>

<script>
export default {
  name: 'side-menu',
  props: ['visible', 'selectedTone', 'selectedSources'],
  data: function() {
    return {
      sourceList: [
        {name: 'Populated places', id: 'places'},
        {name: 'Education news', id: 'education'}
      ],
      toneList: [
        {name: 'All', id: 'all'},
        {name: 'Positive', id: 'positive'},
        {name: 'Neutral', id: 'neutral'},
        {name: 'Negative', id: 'negative'}
      ]
    };
  }
};
</script>

<style>
</style>
  