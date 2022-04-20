import { Component, customElements, html, window } from '@chialab/dna';

export const DesignTokenType = {
    Spacing: 'spacing',
    Margin: 'margin',
    Padding: 'padding',
    Row: 'row',
    Column: 'column',
    Grid: 'grid',
    Text: 'text',
    Family: 'family',
    Size: 'size',
    Weight: 'weight',
    Color: 'color',
    Background: 'background',
    Shadow: 'shadow',
    Radius: 'radius',
};

export class DesignToken extends Component {
    static properties = {
        type: String,
        name: {
            type: String,
            observe() {
                if (this.name) {
                    const doc = this.ownerDocument.documentElement;
                    const style = window.getComputedStyle(doc);
                    this.value = style.getPropertyValue(this.name);
                } else {
                    this.value = undefined;
                }
            },
        },
        rule: String,
        value: String,
    };

    render() {
        switch (this.type) {
            case DesignTokenType.Spacing:
                return this.renderSpacing();
            case DesignTokenType.Margin:
                return this.renderMargin();
            case DesignTokenType.Padding:
                return this.renderPadding();
            case DesignTokenType.Row:
                return this.renderRow();
            case DesignTokenType.Column:
                return this.renderColumn();
            case DesignTokenType.Grid:
                return this.renderGrid();
            case DesignTokenType.Text:
                return this.renderText();
            case DesignTokenType.Family:
                return this.renderFamily();
            case DesignTokenType.Size:
                return this.renderSize();
            case DesignTokenType.Weight:
                return this.renderWeight();
            case DesignTokenType.Color:
                return this.renderColor();
            case DesignTokenType.Background:
                return this.renderBackground();
            case DesignTokenType.Shadow:
                return this.renderShadow();
            case DesignTokenType.Radius:
                return this.renderRadius();
            default:
                return html`<div class=${`design-token__wrapper px-2 py-1 radius-1 elevation-1 ${!this.name ? this.rule : ''}`}>
                    ${this.renderTokens()}
                    <slot />
                </div>`;
        }
    }

    renderToken(value) {
        return html`<div class="design-token__value">
            <div class="design-token__value-field">${value}</div>
            <button aria-label="copy" onclick=${() => navigator.clipboard.writeText(value)}>
                <svg x="0px" y="0px" viewBox="0 0 115.77 122.88" aria-hidden="true">
                    <path d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" />
                </svg>
            </button>
        </div>`;
    }

    renderTokens() {
        return html`<div class="design-token__name">
            ${this.name && this.renderToken(this.name)}
            ${this.rule && this.renderToken(this.rule)}
            ${this.value && this.renderToken(this.value)}
        </div>`;
    }

    renderSpacing() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1 elevation-2">
            <div class="design-token__spacing" style=${{ height: `var(${this.name})` }}></div>
            ${this.renderTokens()}
            <slot />
        </div>`;
    }

    renderMargin() {
        return html`<div class="design-token__wrapper bg-neutral radius-1 elevation-2">
            <div class=${`bg-surface p-2 radius-1 fill ${!this.name ? this.rule : ''}`} style=${{ margin: `var(${this.name})` }}>
                ${this.renderTokens()}
            </div>
            <slot />
        </div>`;
    }

    renderPadding() {
        return html`<div class=${`design-token__wrapper bg-neutral radius-1 elevation-2 ${!this.name ? this.rule : ''}`} style=${{ padding: `var(${this.name})` }}>
            <div class="bg-surface radius-1 fill column center align-center">
                ${this.renderTokens()}
            </div>
            <slot />
        </div>`;
    }

    renderRow() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1 elevation-2">
            ${this.renderTokens()}
            <div class=${`design-token__layout full p-2 ${this.rule}`}>
                <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
                <div class="bg-surface w-1 h-2 radius-1 elevation-2 column align-center center"></div>
                <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
                <div class="bg-surface w-1 h-2 radius-1 elevation-2 column align-center center"></div>
            </div>
        </div>`;
    }

    renderColumn() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1 elevation-2">
            ${this.renderTokens()}
            <div class=${`design-token__layout full p-2 ${this.rule}`}>
                <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
                <div class="bg-surface w-2 h-1 radius-1 elevation-2 column align-center center"></div>
                <div class="bg-surface w-1 h-1 radius-1 elevation-2 column align-center center"></div>
                <div class="bg-surface w-2 h-1 radius-1 elevation-2 column align-center center"></div>
            </div>
        </div>`;
    }

    renderGrid() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1 elevation-2">
            ${this.renderTokens()}
            <div class=${`design-token__layout full p-2 ${this.rule}`}>
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

    renderText() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1 elevation-2">
            ${this.renderTokens()}
            <p class=${`design-token__paragrapgh ${!this.name ? this.rule : ''}`}>
                ${this.slotChildNodes.length ? html`<slot />` : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis blanditiis, obcaecati ex earum sunt mollitia voluptatem dignissimos! Culpa vitae, quas cum asperiores aspernatur dolor deserunt unde hic nostrum quod molestiae.'}
            </p>
        </div>`;
    }

    renderFamily() {
        return html`<div class="design-token__wrapper">
            <p class=${`design-token__paragrapgh f-3 ${!this.name ? this.rule : ''}`} style=${{ fontFamily: `var(${this.name})` }}>
                ${this.slotChildNodes.length ? html`<slot />` : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
            </p>
            ${this.renderTokens()}
        </div>`;
    }

    renderSize() {
        return html`<div class="design-token__wrapper">
            <p class=${`design-token__paragrapgh ${!this.name ? this.rule : ''}`} style=${{ fontSize: `var(${this.name})` }}>
                ${this.slotChildNodes.length ? html`<slot />` : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
            </p>
            ${this.renderTokens()}
        </div>`;
    }

    renderWeight() {
        return html`<div class="design-token__wrapper">
            <p class=${`design-token__paragrapgh f-3 ${!this.name ? this.rule : ''}`} style=${{ fontWeight: `var(${this.name})` }}>
                ${this.slotChildNodes.length ? html`<slot />` : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'}
            </p>
            ${this.renderTokens()}
        </div>`;
    }

    renderColor() {
        return html`<div class="design-token__wrapper" style=${{ color: `var(${this.name})` }}>
            ${this.renderTokens()}
        </div>`;
    }

    renderBackground() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1 elevation-2" style=${{ background: `var(${this.name})` }}>
            ${this.renderTokens()}
            <slot />
        </div>`;
    }

    renderShadow() {
        return html`<div class="design-token__wrapper px-2 py-1 radius-1" style=${{ boxShadow: `var(${this.name})`, border: 'solid 1px #e5e5e5' }}>
            ${this.renderTokens()}
            <slot />
        </div>`;
    }

    renderRadius() {
        return html`<div class=${`design-token__wrapper center align-center p-2 elevation-2 ${!this.name ? this.rule : ''}`} style=${{ borderRadius: `var(${this.name})` }}>
            ${this.renderTokens()}
            <slot />
        </div>`;
    }
}

customElements.define('cells-design-token', DesignToken);
