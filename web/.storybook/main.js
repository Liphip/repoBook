module.exports = {
    stories: ['../src/view/**/*.stories.tsx'],
    staticDirs: ["../public"],
    addons: [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/preset-create-react-app",
      '@storybook/addon-a11y',
      "@storybook/addon-docs"
    ],
    framework: "@storybook/react",
    core: {
      builder: "@storybook/builder-webpack5",
    },
    features: {
      interactionsDebugger: true,
    },
  };
  