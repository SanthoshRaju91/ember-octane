import { module, test } from 'qunit';
import { visit, currentURL, fillIn, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-stub';

module('Acceptance | login test', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register("service:auth", MockAuthService);
  })

  test('visiting /login and selecting the user and logging in the user', async function(assert) {
    this.owner.lookup("service:auth").currentUserId = null;
    
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
