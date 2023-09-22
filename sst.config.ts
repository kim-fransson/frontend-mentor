import { SSTConfig } from "sst";
import { Web } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "frontend-mentor",
      region: "eu-north-1",
    };
  },
  stacks(app) {
    app.stack(Web);
  },
} satisfies SSTConfig;
