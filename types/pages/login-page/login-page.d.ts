import { LitElement, CSSResultGroup } from 'lit';
import '../../components/input/input';
import '../../components/button/button';
export declare class LoginPage extends LitElement {
    static styles: CSSResultGroup;
    private hasInputError;
    private userCredentials;
    private hasEmailError;
    private hasPasswordError;
    handleInputChange({ detail: { value } }: CustomEvent, property: string): void;
    handleError({ detail: { value } }: CustomEvent, type: string): void;
    handleLogin(): Promise<void>;
    protected render(): unknown;
}
