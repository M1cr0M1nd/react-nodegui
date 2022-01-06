import { NodeWidget, QIcon, Component } from "@nodegui/nodegui";
import { RNComponent } from "../config";
import { RNTab } from "../Tab/RNTab";
export interface TabItemProps {
    title?: string;
    icon?: QIcon;
}
/**
 * @ignore
 */
export declare const setTabItemProps: (tabItem: RNTabItem, parentTab: RNTab, newProps: TabItemProps, oldProps: TabItemProps) => void;
/**
 * @ignore
 */
export declare class RNTabItem extends Component implements RNComponent {
    native: any;
    actualTabWidget?: NodeWidget<any>;
    initialProps: TabItemProps;
    parentTab?: RNTab;
    setProps(newProps: TabItemProps, oldProps: TabItemProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
