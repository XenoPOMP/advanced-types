---
to: src/<%= h.changeCase.paramCase(at || 'other') %>/<%= h.changeCase.pascalCase(name) %>.ts
---
export type <%= h.changeCase.pascalCase(name) %> = unknown;
