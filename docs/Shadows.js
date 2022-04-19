import { Docs } from './Docs.js';

export class Shadows extends Docs {
    connectedCallback() {
        this.classList.add('grid');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="w-2 h-2 radius-1 bg-surface column align-center center ${cl}" tabindex="0" style="border: solid 1px #f5f5f5;">
    ${super.renderClass(cl)}
</div>`;
    }
}

customElements.define('cell-docs-shadows', Shadows);
