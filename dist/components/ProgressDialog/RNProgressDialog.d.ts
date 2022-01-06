import { NodeWidget, QProgressDialog, QProgressDialogSignals } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { DialogProps } from "../Dialog/RNDialog";
interface ProgressBarRange {
    max: number;
    min: number;
}
export interface ProgressDialogProps extends DialogProps<QProgressDialogSignals> {
    autoClose?: boolean;
    autoReset?: boolean;
    cancelButtonText?: string;
    labelText?: string;
    maxValue?: number;
    minValue?: number;
    /**
     * This property holds the time(`in milliseconds`) that must pass before the dialog appears.
     *
     * https://doc.qt.io/qt-5/qprogressdialog.html#minimumDuration-prop
     * @default 4
     */
    minDuration?: number;
    range?: ProgressBarRange;
    value?: number;
    /**
     * Set this to `false` to allow the progress dialog opening
     * automatically when window first mounts
     */
    shouldReset?: boolean;
}
export declare class RNProgressDialog extends QProgressDialog implements RNWidget {
    setProps(newProps: ProgressDialogProps, oldProps: ProgressDialogProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
export {};
