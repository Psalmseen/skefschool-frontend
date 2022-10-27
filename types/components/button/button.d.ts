import { CSSResultGroup, LitElement } from 'lit';
export declare class Button extends LitElement {
    static styles: CSSResultGroup;
    label: string;
    variant: string;
    py: 'py-1' | 'py-2' | 'py-3';
    px: 'px-1' | 'px-2' | 'px-3';
    inActive: boolean;
    protected render(): unknown;
}
