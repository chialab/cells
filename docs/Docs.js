export class Docs extends HTMLElement {
    static observedAttributes = ['classes'];

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'classes':
                this.classes = newValue ? newValue.split(/\s*,\s*/) : [];
                this.render();
                break;
        }
    }

    render() {
        const classes = this.classes || [];
        this.innerHTML = classes.map((cl) => this.renderClass(cl)).join('\n    ');
    }

    renderClass(cl) {
        return `<span class="mono no-wrap">${cl}</span>`;
    }
}
