import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | team-sidebar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    const currentTeam = {
      name: "LinkedIn",
      order: 3,
      iconUrl: ""
    }
    this.set("team", currentTeam);
    await render(hbs`<TeamSidebar @team={{team}}/>`);    
    assert.deepEqual(this.element.textContent
        .trim()
        .replace(/\s*\n+\s*/g, "\n")
        .split("\n"), 
        [
          "LinkedIn",
          "Mike North",
          "Channels",
          "#",
          "general",
          "Logout"
        ]);
  });
});
