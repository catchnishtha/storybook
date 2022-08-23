<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
import './button.css';
import { reactive, computed } from 'vue';

export default {
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    header: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "secondary",
      validator: function (value) {
        return ['primary', 'secondary', 'hover', 'focus', 'active'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    state: {
      type: String
    },
  },

  emits: ['click'],

  setup(props, { emit }) {
    console.log('Button props =', props);
    props = reactive(props);
    return {
      classes: computed(() => ({
        'storybook-button': true,
        [`storybook-button--${props.type || 'secondary'}`]: true,
        [`storybook-button--${props.size || 'medium'}`]: true,
        [`storybook-button--${props.state}`]: props.state !== undefined,
        'storybook-button--header': props.header,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      }
    }
  },
};
</script>
