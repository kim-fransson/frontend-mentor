import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    collapsedRoots: [
      "faq-accordion-card",
      "notifications-page",
      "results-summary",
      "qr-code-component",
      "newsletter-signup",
      "age-calculator",
      "multi-step-form",
      "news-homepage",
    ],
  },
});
