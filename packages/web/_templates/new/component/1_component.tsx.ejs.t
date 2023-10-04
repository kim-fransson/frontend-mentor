---
to: src/<%= h.inflection.dasherize(challenge_name) %>/components/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---
export interface <%= h.changeCase.pascal(component_name) %>Props {}

export const <%= h.changeCase.pascal(component_name) %> = (props: <%= h.changeCase.pascal(component_name) %>Props) => {
  return (
    <div>
     Change me...
    </div>
  );
};