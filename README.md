# vuepress-cypress-test-example
> Vuepress static site with Cypress running tests from Markdown files

[Cypress](https://www.cypress.io) Test Runner can run tests extracted from Markdown files using [@cypress/fiddle](https://github.com/cypress-io/cypress-fiddle).

[Vuepress](https://vuepress.vuejs.org/) can generate static sites from Markdown documents, just like this README file.

Put them together - write Cypress examples in Markdown files, and Cypress will execute them, ensuring that they are correct. Just surround code blocks with `<!-- fiddle name of the test -->` and

## Examples

### Hello

<!-- fiddle Hello world -->
This is the first test example. It has just JavaScript code.

```js
// single assertion
expect('hello').to.equal('hello')
```

<!-- fiddle-end -->
