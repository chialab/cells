import { Docs } from './Docs.js';

export class Blocks extends Docs {
    connectedCallback() {
        this.classList.add('row');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="bg-surface radius-1 elevation-2 column align-center center ${cl}">
    ${super.renderClass(cl)}
</div>`;
    }
}

customElements.define('cell-docs-blocks', Blocks);
