---
to: src/<%= h.changeCase.lowerCase(difficulty) %>/<%= h.inflection.dasherize(challenge_name) %>/Overview.mdx
---
import { Canvas, Meta } from "@storybook/blocks";

import * as <%= h.changeCase.pascal(challenge_name) %>Stories from "./<%= h.changeCase.pascal(challenge_name) %>.stories.tsx";

<Meta of={<%= h.changeCase.pascal(challenge_name) %>Stories} />

# <%= h.inflection.titleize(challenge_name)  %>

<Canvas of={<%= h.changeCase.pascal(challenge_name) %>Stories.Basic} />

## Tools

🧑🏼‍🎨 Designs from [frontend mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV)

🎨 Styled with ...

🔨 Built with:

- [react](https://react.dev/)
- [react-aria](https://react-spectrum.adobe.com/react-aria)
- ...

🖥️ Code on [github](https://github.com/kim-fransson/frontend-mentor/tree/main/packages/web/src/<%= h.inflection.dasherize(challenge_name) %>)
