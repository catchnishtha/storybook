import MyButton from './Button.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'EFM/Button',
  component: MyButton,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    }, 
    state: {
      control: {type:'select'},
      options:['', 'hover', 'focus'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success'],
    }, 
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Primary.args = {
  type: "primary",
  label: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  label: "Success",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small",
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  type: "primary",
  label: "Hover",
  state: "hover",
};

export const PrimaryFocus = Template.bind({});
PrimaryFocus.args = {
  type: "primary",
  label: "Focus",
  state: "focus",
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: "primary",
  label: "Disabled",
  state: "disabled",
};

export const SecondaryHover = Template.bind({});
SecondaryHover.args = {
  label: "Hover",
  state: "hover",
};

export const SecondaryFocus = Template.bind({});
SecondaryFocus.args = {
  label: "Focus",
  state: "focus",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  label: "Disabled",
  state: "disabled",
};

export const HeaderButton = Template.bind({});
HeaderButton.args = {
  label: "Header",
  header: true,
};
HeaderButton.decorators= [() => ({ template: '<div style="background-color: #444;padding: 6px;"><story/></div>' })];

export const HeaderButtonHover = Template.bind({});
HeaderButtonHover.args = {
  label: "Header Hover",
  state: "hover",
  header: true,
};

export const SuccessHover = Template.bind({});
SuccessHover.args = {
  type: "success",
  label: "Success",
  state: "hover",
};

export const SuccessFocus = Template.bind({});
SuccessFocus.args = {
  type: "success",
  label: "Success",
  state: "focus",
};
