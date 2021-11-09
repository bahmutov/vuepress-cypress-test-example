# Third page

Wrap value to use BDD assertion

<!-- fiddle BDD Assertion -->

```js
function sum(a, b) {
  return a + b
}
cy.wrap(sum(2, 3)).should('equal', 5)
```

<!-- fiddle-end -->
