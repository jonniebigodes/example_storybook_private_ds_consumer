import ExampleComponent from "./ExampleComponent";

export default {
  component: ExampleComponent,
  title: "ExampleComponent",
};

const Template = (args) => <ExampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  someProp: "some value",
  otherProp: 123,
};
