import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    collapsedRoots: [
      "results-summary",
      "qr-code-component",
      "newsletter-signup",
      "age-calculator",
    ],
  },
});
