import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class LoginFormComponent extends Component {
    @tracked
    userId = null;

    get isDisabled() {
        return !this.userId;
    }

    loginWithUserId(val) {
        console.log("userId", val);
    }
    /**
     * 
     * @param {Event & { target: HTMLFormElement}} evt 
     */
    @action
    onLoginFormSubmit(evt) {
        evt.preventDefault();
        const { target } = evt;
        const val = target.querySelector("select").value;
        this.loginWithUserId(val);
    }

     /**
     * 
     * @param {Event & { target: HTMLFormElement}} evt 
     */
    @action
    onSelectChange(evt) {
        this.userId = evt.target.value;
    }
}
