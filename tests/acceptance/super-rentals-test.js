import { module, test } from 'qunit'
import { click, visit, currentURL } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks)

  test('visiting /', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/')
    assert.dom('nav').exists()
    assert.dom('h1').hasText('SuperRentals')
    assert.dom('h2').hasText('Welcome to Super Rentals!')
    assert.dom('.jumbo a.button.about').hasText('About Us')
    assert.dom('.jumbo a.button.contact').hasText('Contact Us')
  })

  test('visiting /about', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/')

    await click('.jumbo a.button.about')

    assert.equal(currentURL(), '/about')
    assert.dom('nav').exists()
    assert.dom('h1').hasText('SuperRentals')
    assert.dom('h2').hasText('About Super Rentals')
    assert.dom('p').hasText('The Super Rentals website is a delightful project created to explore Ember. By building a property rental site, we can simultaneously imagine traveling AND building Ember applications.')
    assert.dom('.jumbo a.button.contact').hasText('Contact Us')
    assert.dom('.jumbo a.button.home').hasText('Home')
  })

  test('visiting /contact', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/')

    await click('.jumbo a.button.contact')

    assert.equal(currentURL(), '/getting-in-touch')
    assert.dom('nav').exists()
    assert.dom('h1').hasText('SuperRentals')
    assert.dom('h2').hasText('Contact Us')
    assert.dom('p').hasText('Super Rentals Representatives would love to help you choose a destination or answer any questions you may have.')
    assert.dom('.jumbo a.button.about').hasText('About Us')
    assert.dom('.jumbo a.button.home').hasText('Home')
  })
})