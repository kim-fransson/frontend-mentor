import { StackContext, StaticSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const web = new StaticSite(stack, "web", {
    path: "packages/web",
    customDomain: {
      domainName: "frontend-mentor.made-by-kim.com",
      domainAlias: "www.frontend-mentor.made-by-kim.com",
    },
    buildOutput: "storybook-static",
    buildCommand: "npm run build-storybook",
  });

  stack.addOutputs({
    Web: web.url,
  });
}
