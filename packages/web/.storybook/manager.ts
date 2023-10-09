import { addons } from "@storybook/manager-api";

addons.setConfig({
  sidebar: {
    collapsedRoots: ["newbie", "junior", "intermediate", "advanced", "guru"],
  },
});
