import { Docs } from './Docs.js';

export class FontWeights extends Docs {
    connectedCallback() {
        this.classList.add('column');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `${super.renderClass(cl)}<p class="m-0 f-4 text-disabled ${cl}" tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>`;
    }
}

customElements.define('cell-docs-font-weights', FontWeights);
