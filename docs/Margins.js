import { Docs } from './Docs.js';

export class Margins extends Docs {
    connectedCallback() {
        this.classList.add('row');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="bg-neutral radius-1 elevation-2 row align-justify" tabindex="0">
    <div class="w-1 h-1 bg-surface radius-1 row align-center center ${cl}">
        ${super.renderClass(cl)}
    </div>
</div>`;
    }
}

customElements.define('cell-docs-margins', Margins);
