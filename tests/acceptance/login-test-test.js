import { module, test } from 'qunit';
import { visit, currentURL, fillIn, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login test', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /login and selecting the user and logging in the user', async function(assert) {
    await visit('/login');
    assert.equal(currentURL(), '/login');
    await fillIn("select", "1");
    let button = /** @type { HTMLInputElement} */ (find("input[type='submit']"));

    if(!button.disabled) {
      await click((find("input[type='submit']")));
    }

    assert.equal(currentURL(), '/teams')
  });
});
