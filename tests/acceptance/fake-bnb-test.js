import { module, test } from 'qunit'
import { click, visit, currentURL } from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit'
import { setupMirage } from 'ember-cli-mirage/test-support'

module('Acceptance | fake-bnb', function(hooks) {
  setupApplicationTest(hooks)
  setupMirage(hooks)
  
  test('visiting /', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/')
    assert.dom('nav').exists()
    assert.dom('h1').hasText('Fakebnb')
    assert.dom('h2').hasText('Welcome to Fakebnb!')
    assert.dom('.jumbo a.button.about').hasText('About Us')
    assert.dom('.jumbo a.button.contact').hasText('Contact Us')
  })

  test('viewing the details of a rental property', async function(assert) {
    await visit('/');
    assert.dom('.rental').exists({ count: 3 });

    await click('.rental:first-of-type a');
    assert.equal(currentURL(), '/rentals/grand-old-mansion');
  });

  test('visiting /rentals/grand-old-mansion', async function(assert) {

    await visit('/rentals/grand-old-mansion');

    assert.equal(currentURL(), '/rentals/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('h1').containsText('Fakebnb');
    // assert.dom('h2').containsText('hello');
    assert.dom('.rental.detailed').exists();
  });

  test('visiting /about', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/')

    await click('.jumbo a.button.about')

    assert.equal(currentURL(), '/about')
    assert.dom('nav').exists()
    assert.dom('h1').hasText('Fakebnb')
    assert.dom('h2').hasText('About Fakebnb')
    assert.dom('p').hasText("Fakebnb is the place to be! Don't miss out! Book Now.")
    assert.dom('.jumbo a.button.contact').hasText('Contact Us')
    assert.dom('.jumbo a.button.home').hasText('Home')
  })

  test('visiting /contact', async function(assert) {
    await visit('/')

    assert.equal(currentURL(), '/')

    await click('.jumbo a.button.contact')

    assert.equal(currentURL(), '/getting-in-touch')
    assert.dom('nav').exists()
    assert.dom('h1').hasText('Fakebnb')
    assert.dom('h2').hasText('Contact Us')
    assert.dom('p').hasText("Fakebnb is the place to be! Don't miss out! Book Now.")
    assert.dom('.jumbo a.button.about').hasText('About Us')
    assert.dom('.jumbo a.button.home').hasText('Home')
  })
})