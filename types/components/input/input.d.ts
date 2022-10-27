import { LitElement } from 'lit';
import 'lit-media-query/lit-media-query';
export declare class CommonInput extends LitElement {
    inputType: 'email' | 'password' | 'text';
    width: string;
    isRequired: boolean;
    private isEmpty;
    private isFocused;
    private hasError;
    private isMobile;
    inputValue: string;
    errorMessage: string;
    private isPasswordShown;
    inputPlaceholder: string;
    errorText: string;
    borderColor: string;
    mobileQuery: string;
    dark: boolean;
    input: HTMLInputElement;
    static styles: import("lit").CSSResult;
    handleInput(): void;
    handleFocusOut(): void;
    validateEmailInput(): void;
    validatePasswordInput(): void;
    toggleIsPasswordShown(): void;
    handleMobileQuery({ detail: { value } }: {
        detail: {
            value: boolean;
        };
    }): void;
    render(): import("lit-html").TemplateResult<1>;
}
