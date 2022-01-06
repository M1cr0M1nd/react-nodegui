import { FocusReason, NodeWidget, QDialog, QDialogSignals, QFont } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { ViewProps } from "../View/RNView";
export interface DialogProps<T = QDialogSignals> extends ViewProps<T> {
    open?: boolean;
    font?: QFont;
    focus?: FocusReason;
    modal?: boolean;
    result?: number;
    reject?: boolean;
    enableSizeGrip?: boolean;
}
export declare function setDialogProps(widget: RNDialog, newProps: DialogProps, oldProps: DialogProps): void;
export declare class RNDialog extends QDialog implements RNWidget {
    setProps(newProps: DialogProps, oldProps: DialogProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
