import { QComboBox, NodeWidget, QSize, QVariant, SizeAdjustPolicy, InsertPolicy, QIcon, QComboBoxSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
export interface ComboBoxProps extends ViewProps<QComboBoxSignals> {
    items?: ComboBoxItem[];
    count?: number;
    iconSize?: QSize;
    frame?: boolean;
    currentIndex?: number;
    currentData?: QVariant;
    currentText?: string;
    duplicatesEnabled?: boolean;
    editable?: boolean;
    insertPolicy?: InsertPolicy;
    maxCount?: number;
    maxVisibleItems?: number;
    minimumContentsLength?: number;
    modelColumn?: number;
    sizeAdjustPolicy?: SizeAdjustPolicy;
}
declare type ComboBoxItem = {
    text: string;
    icon?: QIcon;
    userData?: QVariant;
};
/**
 * @ignore
 */
export declare class RNComboBox extends QComboBox implements RNWidget {
    setProps(newProps: ComboBoxProps, oldProps: ComboBoxProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
export {};
