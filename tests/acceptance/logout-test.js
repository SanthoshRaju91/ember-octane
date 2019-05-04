import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /teams and clicking logout', async function(assert) {
    await visit('/teams');
    // await this.pauseTest();
    assert.equal(currentURL(), "/teams");
  
    await click(".team-sidebar__logout-button");
    // await this.pauseTest();    
    assert.equal(currentURL(), '/login');
  });
});
