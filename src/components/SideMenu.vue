<template>
  <sui-sidebar as="Menu" animation='overlay' width='wide' v-bind:visible="visible" vertical>
    <button class="simpleBtn sidebarClose">
      <sui-icon name="angle double left" size="big" />
    </button>
    <sui-menu-Item>
      <sui-menu-header>News Topics</sui-menu-header>
      <sui-menu-menu>
        <sui-menu-item>One</sui-menu-item>
        <sui-menu-item>Two</sui-menu-item>
      </sui-menu-menu>
    </sui-menu-item>
    <sui-menu-item>
      <sui-menu-header>Tone</sui-menu-header>
      <sui-menu-menu>
        <sui-menu-item>All</sui-menu-item>
        <sui-menu-item>Positive</sui-menu-item>
        <sui-menu-item>Negative</sui-menu-item>
        <sui-menu-item>Neutral</sui-menu-item>
      </sui-menu-menu>
    </sui-menu-item>
    <sui-menu-item>
      <sui-menu-header>Regions</sui-menu-header>
      <sui-menu-menu>
        <sui-menu-item>One</sui-menu-item>
        <sui-menu-item>Two</sui-menu-item>
      </sui-menu-menu>
    </sui-menu-item>
  </sui-sidebar>
</template>

<script>
export default {
  name: 'side-menu',
  props: ['visible']
};
</script>

<style>
</style>
