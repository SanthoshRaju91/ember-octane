import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-stub';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register("service:auth", MockAuthService);
  })

  test('visiting /teams and clicking logout', async function(assert) {
    this.owner.lookup("service:auth").currentUserId = "1";
    
    await visit('/teams/linkedin');
    // await this.pauseTest();
    assert.ok(currentURL().startsWith("/teams"));
  
    await click(".team-sidebar__logout-button");
    // await this.pauseTest();    
    assert.equal(currentURL(), '/login');
  });
});
