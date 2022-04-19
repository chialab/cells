import { Docs } from './Docs.js';

export class Clamping extends Docs {
    connectedCallback() {
        this.classList.add('grid');
        super.connectedCallback();
    }

    renderClass(cl) {
        return `<div class="w-3 h-2 radius-1 bg-surface elevation-2 p-2 column" tabindex="0">
    ${super.renderClass(cl)}
    <div class="${cl}">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit quos ut inventore tempora veniam, ducimus asperiores quam, nesciunt fugit consequatur itaque placeat ad? Culpa vitae saepe consequuntur commodi in suscipit.
    </div>
</div>`;
    }
}

customElements.define('cell-docs-clamping', Clamping);
