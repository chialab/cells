import { Docs } from './Docs.js';

export class Colors extends Docs {
    connectedCallback() {
        this.classList.add('grid');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="w-2 h-2 column radius-1 elevation-2 align-center center ${cl}" tabindex="0">
    ${super.renderClass(cl)}
</div>`;
    }
}

customElements.define('cell-docs-colors', Colors);
