/* eslint-disable no-undef */
module.exports = [
  {
    type: "input",
    name: "component_name",
    message: "Write the name of the component",
  },
  {
    type: "select",
    name: "challenge_name",
    message: "Which challenge are you creating the component for?",
    default: 0,
    choices: [
      "product-preview-card",
      "shortly",
      "faq-accordion-card",
      "notifications-page",
      "age-calculator",
      "multi-step-form",
      "nes-homepage",
      "newsletter-signup",
      "qr-code-component",
      "results-summary",
    ],
  },
  {
    type: "select",
    name: "difficulty",
    message: "Challenge difficulty",
    default: 0,
    choices: ["Newbie", "Junior", "Intermediate", "Advanced", "Guru"],
  },
];
