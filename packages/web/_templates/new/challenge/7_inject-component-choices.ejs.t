---
to: _templates/new/component/prompt.cjs
inject: true
after: 'choices:'
---
      "<%= h.inflection.dasherize(challenge_name) %>",