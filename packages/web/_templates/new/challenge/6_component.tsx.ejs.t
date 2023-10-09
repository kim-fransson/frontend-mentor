---
to: src/<%= h.changeCase.lowerCase(difficulty) %>/<%= h.inflection.dasherize(challenge_name) %>/<%= h.changeCase.pascal(challenge_name) %>.tsx
---
export interface <%= h.changeCase.pascal(challenge_name) %>Props {}


export const <%= h.changeCase.pascal(challenge_name) %> = (props: <%= h.changeCase.pascal(challenge_name) %>Props) => {
  return (
    <div>
     Change me...
    </div>
  );
};