// class SsttingsToggler extends HTMLElement {
//     static observedAttributes = ["turned-on"]
//     state: {
//         turnedOn: true | false | undefined
//     }
//
//     constructor() {
//         // Always call super first in constructor
//         super();
//
//         // state = settings
//         this.state = {
//             turnedOn: undefined
//         }
//     }
//
//     connectedCallback() {
//         this.state.turnedOn = This.hasAttribute('turned-on')
//         // if (This.hasAttribute('turned-on')) {
//         //     this.state.turnedOn = true
//         // }
//     }
//     // attributeChangedCallback(name, oldValue, newValue) {
//     //     console.log(
//     //         `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
//     //     );
//     // }
// }
//
// // secret component
// customElements.define("settings-toggler", SsttingsToggler);