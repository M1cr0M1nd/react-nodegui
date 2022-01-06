import { QWidget, QBoxLayoutSignals, QBoxLayout, NodeWidget, Direction } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNComponent } from "../config";
export interface BoxViewProps extends ViewProps<QBoxLayoutSignals> {
    direction?: Direction;
}
/**
 * @ignore
 */
export declare class RNBoxView extends QWidget implements RNComponent {
    native: any;
    initialProps?: BoxViewProps;
    children: Array<NodeWidget<any>>;
    get layout(): QBoxLayout | undefined;
    set layout(l: QBoxLayout | undefined);
    setProps(newProps: BoxViewProps, oldProps: BoxViewProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
