import { NodeWidget, QErrorMessage, QErrorMessageSignals } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { DialogProps } from "../Dialog/RNDialog";
export interface ErrorPromptProps extends DialogProps<QErrorMessageSignals> {
    message: string;
}
export declare class RNErrorPrompt extends QErrorMessage implements RNWidget {
    setProps(newProps: ErrorPromptProps, oldProps: ErrorPromptProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
