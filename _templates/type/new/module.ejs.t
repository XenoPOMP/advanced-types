---
to: src/<%= at %>/index.ts
inject: true
append: true
skip_if: <%= h.changeCase.pascalCase(name) %>
---
export * from './<%= h.changeCase.pascalCase(name) %>';
