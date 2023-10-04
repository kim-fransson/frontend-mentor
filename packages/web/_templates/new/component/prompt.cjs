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
      "age-calculator",
      "multi-step-form",
      "nes-homepage",
      "newsletter-signup",
      "qr-code-component",
      "results-summary",
    ],
  },
];
