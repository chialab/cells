import { Docs } from './Docs.js';

export class Rows extends Docs {
    connectedCallback() {
        this.classList.add('column');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="bg-neutral column p-2 radius-1 full">
    ${super.renderClass(cl)}
    <div class="full ${cl}">
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-2 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-2 radius-1 elevation-2 column align-center center"></div>
    </div>
</div>`;
    }
}

customElements.define('cell-docs-rows', Rows);
