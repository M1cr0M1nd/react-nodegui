import { NodeWidget, QMenu, QMenuBar, QMenuBarSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
export interface MenuBarProps extends ViewProps<QMenuBarSignals> {
    nativeMenuBar?: boolean;
}
export declare class RNMenuBar extends QMenuBar implements RNWidget {
    setProps(newProps: MenuBarProps, oldProps: MenuBarProps): void;
    appendInitialChild(child: QMenu): void;
    appendChild(child: QMenu): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
