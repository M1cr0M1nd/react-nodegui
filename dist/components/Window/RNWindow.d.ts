import { QMainWindow, NodeWidget, QMainWindowSignals, QMenuBar } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
export interface WindowProps extends ViewProps<QMainWindowSignals> {
    menuBar?: QMenuBar;
}
/**
 * @ignore
 */
export declare class RNWindow extends QMainWindow implements RNWidget {
    setProps(newProps: WindowProps, oldProps: WindowProps): void;
    removeChild(child: NodeWidget<any>): void;
    appendInitialChild(child: NodeWidget<any> | QMenuBar): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    static tagName: string;
}
