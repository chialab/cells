import { Docs } from './Docs.js';

export class Grids extends Docs {
    connectedCallback() {
        this.classList.add('column');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="p-2 column explode mt-0 mb-1 bg-neutral radius-1">
    ${super.renderClass(cl)}
    <div class="full ${cl}">
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-2 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-5 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-2 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-2 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-3 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-4 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
        <div class="bg-surface w-2 h-1 radius-1 elevation-2 column align-center center"></div>
    </div>
</div>`;
    }
}

customElements.define('cell-docs-grids', Grids);
