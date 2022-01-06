import { QRadioButton, NodeWidget, QRadioButtonSignals } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { AbstractButtonProps } from "../AbstractComponents/RNAbstractButton";
export interface RadioButtonProps extends AbstractButtonProps<QRadioButtonSignals> {
}
/**
 * @ignore
 */
export declare class RNRadioButton extends QRadioButton implements RNWidget {
    setProps(newProps: RadioButtonProps, oldProps: RadioButtonProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
