import { QScrollArea, NodeWidget, QScrollAreaSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
export interface ScrollAreaProps extends ViewProps<QScrollAreaSignals> {
    widgetResizable?: boolean;
}
/**
 * @ignore
 */
export declare class RNScrollArea extends QScrollArea implements RNWidget {
    setProps(newProps: ScrollAreaProps, oldProps: ScrollAreaProps): void;
    removeChild(child: NodeWidget<any>): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    static tagName: string;
}
