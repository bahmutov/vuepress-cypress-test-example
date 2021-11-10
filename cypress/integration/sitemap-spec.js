/// <reference types="cypress" />

// use https://github.com/abdolence/x2js to parse XML to JSON
const X2JS = require('x2js')

describe('sitemap', () => {
  it('fetches the sitemap.xml', () => {
    cy.request('/sitemap.xml').its('body').then(body => {
      const x2js = new X2JS()
      const json = x2js.xml2js(body)
      expect(json.urlset.url.length).to.be.greaterThan(0)
      json.urlset.url.forEach(url => {
        const parsed = new URL(url.loc)
        cy.log(parsed.pathname)
        cy.request(url.loc).its('status').should('eq', 200)
        cy.visit(url.loc).wait(1000, {log: false})
      })
    })
  })
})
