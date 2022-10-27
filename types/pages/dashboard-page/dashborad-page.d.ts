import { CSSResultGroup } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
export declare class DashboardPage extends MobxLitElement {
    static styles?: CSSResultGroup;
    isChangeImgOpen: boolean;
    connectedCallback(): void;
    handleChangeImage(): void;
    protected render(): unknown;
}
