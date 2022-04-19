import { Docs } from './Docs.js';

export class Borders extends Docs {
    connectedCallback() {
        this.classList.add('grid');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="w-2 h-2 elevation-2 bg-surface column align-center center ${cl}" tabindex="0">
    ${super.renderClass(cl)}
</div>`;
    }
}

customElements.define('cell-docs-borders', Borders);
