import { NodeWidget, QFileDialog, DialogLabel, QFileDialogSignals, Option } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { DialogProps } from "../Dialog/RNDialog";
export interface FileDialogLabelText {
    label: DialogLabel;
    text: string;
}
export interface DialogOption<T = Option> {
    option: T;
    on: boolean;
}
export interface FileDialogProps extends DialogProps<QFileDialogSignals> {
    defaultSuffix?: string;
    supportedSchemes?: string[];
    labelText?: FileDialogLabelText;
    option?: DialogOption;
    options?: Option;
}
export declare class RNFileDialog extends QFileDialog implements RNWidget {
    setProps(newProps: FileDialogProps, oldProps: FileDialogProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
