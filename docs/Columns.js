import { Docs } from './Docs.js';

export class Columns extends Docs {
    connectedCallback() {
        this.classList.add('row');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="bg-neutral p-2 column radius-1">
    ${super.renderClass(cl)}
    <div class="w-2 h-6 ${cl}">
        <div class="bg-surface full h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface full h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
    </div>
</div>`;
    }
}

customElements.define('cell-docs-columns', Columns);
