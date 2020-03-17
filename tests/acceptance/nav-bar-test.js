import { module, test } from 'qunit'
import { click, visit, currentURL } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks)

  test('navigating using the nav-bar', async function(assert) {
    await visit('/')

    assert.dom('nav').exists()
    assert.dom('nav a.menu-index').hasText('Fakebnb')
    assert.dom('nav a.menu-about').hasText('About')
    assert.dom('nav a.menu-contact').hasText('Contact')

    await click('nav a.menu-about')
    assert.equal(currentURL(), '/about')

    await click('nav a.menu-contact')
    assert.equal(currentURL(), '/getting-in-touch')

    await click('nav a.menu-index')
    assert.equal(currentURL(), '/')
  })
})