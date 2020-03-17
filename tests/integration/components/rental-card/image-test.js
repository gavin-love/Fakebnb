import { module, test } from 'qunit'
import { setupRenderingTest } from 'ember-qunit'
import { click, render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | rental-card/image', function(hooks) {
  setupRenderingTest(hooks)

  hooks.beforeEach( async function() {
    await render(hbs`
    <RentalCard::Image
      src="/assets/images/sour_patch_kid.png"
     alt="Sour Patch Kid"
    />  
  `)
  })

  test('it renders an image based on passed attributes', async function(assert) {

    assert.dom('.image').exists()
    assert.dom('.image img').hasAttribute('src', '/assets/images/sour_patch_kid.png')
    assert.dom('.image img').hasAttribute('alt', 'Sour Patch Kid')
  })

  test('clicking on the image toggles the size', async function(assert) {

    assert.dom('button.image').exists()

    assert.dom('.image').doesNotHaveClass('large')
    assert.dom('.image small').hasText('View Larger')

    await click('button.image')

    assert.dom('.image').hasClass('large')
    assert.dom('.image small').hasText('View Smaller')

    await click('button.image')

    assert.dom('.image').doesNotHaveClass('large')
    assert.dom('.image small').hasText('View Larger')
  })
})
