module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  refs: {
    "Example-Design-System": {
      title: "Example Private Design System",
      url: "https://61e07a1187afd2003a29a919-pylncpegza.chromatic.com/",
      expanded: false, // optional, true by default
    },
  },
};
