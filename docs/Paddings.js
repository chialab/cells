import { Docs } from './Docs.js';

export class Paddings extends Docs {
    connectedCallback() {
        this.classList.add('grid');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="w-2 h-2 radius-1 elevation-2 bg-neutral row align-justify ${cl}" tabindex="0">
    <div class="bg-surface fill radius-1 column align-center center">
        ${super.renderClass(cl)}
    </div>
</div>`;
    }
}

customElements.define('cell-docs-paddings', Paddings);
