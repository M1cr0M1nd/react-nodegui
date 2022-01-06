import { EchoMode, InputDialogOptions, InputMode, NodeWidget, QInputDialog, QInputDialogSignals } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { DialogProps } from "../Dialog/RNDialog";
export interface InputDialogProps extends DialogProps<QInputDialogSignals> {
    cancelButtonText?: string;
    comboBoxEditable?: boolean;
    doubleDecimals?: number;
    doubleMax?: number;
    doubleMin?: number;
    doubleStep?: number;
    doubleValue?: number;
    inputMode?: InputMode;
    intMax?: number;
    intMin?: number;
    intStep?: number;
    intValue?: number;
    labelText?: string;
    okButtonText?: string;
    options?: InputDialogOptions;
    textEchoMode?: EchoMode;
    textValue?: string;
}
export declare class RNInputDialog extends QInputDialog implements RNWidget {
    setProps(newProps: InputDialogProps, oldProps: InputDialogProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
