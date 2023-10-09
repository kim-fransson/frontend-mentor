/* eslint-disable no-undef */
module.exports = [
  {
    type: "input",
    name: "challenge_name",
    message: "Write the name of the challenge",
  },
  {
    type: "select",
    name: "difficulty",
    message: "Challenge difficulty",
    default: 0,
    choices: ["Newbie", "Junior", "Intermediate", "Advanced", "Guru"],
  },
];
