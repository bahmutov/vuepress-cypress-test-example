/// <reference types="cypress-each" />
import 'cypress-each'

describe('Sitemap', () => {
  // I like testing the input list of URLs in its own test
  it('has urls', () => {
    expect(Cypress.env('sitemapUrls')).to.be.an('array').and.not.be.empty
  })

  const urls = Cypress.env('sitemapUrls').map((fullUrl) => {
    const parsed = new URL(fullUrl)
    return parsed.pathname
  })

  it.each(urls)('url %s', (url) => {
    // check if the resource exists
    cy.request('HEAD', url).its('status').should('eq', 200)
    // check if the resource exists AND download it
    cy.request(url).its('status').should('eq', 200)
    // visit the page to check if it loads in the browser
    cy.visit(url).wait(1000, { log: false })
  })
})
