/// <reference types="cypress-each" />
import 'cypress-each'

describe('Sitemap', () => {
  it('has urls', () => {
    expect(Cypress.env('sitemapUrls')).to.be.an('array').and.not.be.empty
  })

  const urls = Cypress.env('sitemapUrls').map(fullUrl => {
    const parsed = new URL(fullUrl)
    return parsed.pathname
  })

  it.each(urls)('url %s', (url) => {
    cy.log(url)
    // check the response status and visit the page
    cy.request(url).its('status').should('eq', 200)
    cy.visit(url).wait(1000, {log: false})
  })
})
