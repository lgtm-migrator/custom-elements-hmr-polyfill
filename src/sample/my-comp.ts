import { defineCustomElement } from './decorator/defineCustomElement';

@defineCustomElement('my-comp')
export default class extends HTMLElement {
    'some-attribute': string;

    constructor() {
        super();
        this['some-attribute'] = 'huhu';
    }

    static get observedAttributes() {
        return ['some-attribute'];
    }

    connectedCallback() {
        console.log(' [my-comp] connectedCallb111ack()');
        this.innerHTML = this.render();
    }

    disconnectedCallback() {
        console.log('[my-comp] disconnectedCallback()', ...arguments);
    }

    adoptedCallback() {
        console.log('[my-comp] adoptedCallback()', ...arguments);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log('[my-comp] attribute changed', ...arguments);
        this['some-attribute'] = newValue;
        this.innerHTML = this.render();
    }

    render() {
        return `
            <p>my-comp: some-attribute ${this.lala}: ${this['some-attribute']}</p>
        `;
    }

    get lala() {
        return 'huhu';
    }
}
