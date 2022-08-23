<template>
  <header>
    <div class="wrapper">
      <div>
        <h1>Enterprise Fleet Management</h1>
      </div>
      <div class="callapi" v-if="midsection === true">
        <a href="#" @click.prevent="$emit('getOrders')"> Orders </a>
        <a href="#" @click.prevent="$emit('getOrdersHistory')"> History </a>
      </div>
      <div>
        <span class="user-info" v-if="user">Welcome, <b>{{ user.name }}</b>!</span>
        <my-button v-bind:header="true" size="small" @click="$emit('logout')" label="Log out" v-if="user" />
        <my-button v-bind:header="true" size="small" @click="$emit('login')" label="Log in" v-if="!user" />
        <my-button type="primary" v-bind:header="true" size="small" @click="$emit('createAccount')" label="Sign up" v-if="!user" />
      </div>
    </div>
  </header>
</template>

<script>
import './header.css';
import MyButton from './Button.vue';

export default {
  name: 'my-header',

  components: { MyButton },

  props: {
    user: {
      type: Object,
    },
    midsection: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['login', 'logout', 'createAccount', 'getOrders', 'getOrdersHistory'],
  setup(props, { emit }) {
    console.log('Header props =', props)
  }
};
</script>
