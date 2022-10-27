import { CSSResultGroup } from 'lit';
import { MobxLitElement } from '@adobe/lit-mobx';
import '../button/button';
import 'lit-media-query/lit-media-query';
export declare class Navbar extends MobxLitElement {
    static styles: CSSResultGroup;
    isMobile: boolean;
    mobileQuery: string;
    isNavbarOpen: boolean;
    handleMobileQuery({ detail: { value } }: {
        detail: {
            value: boolean;
        };
    }): void;
    toggleNavbarOpen(): void;
    handleLogin(): void;
    protected render(): unknown;
}
