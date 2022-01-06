import { NodeWidget, QListWidgetItem, QIcon } from "@nodegui/nodegui";
import { RNComponent } from "../config";
export interface ListItemProps {
    title?: string;
    icon?: QIcon;
}
/**
 * @ignore
  */
export declare const setListItemProps: (widget: RNListItem, newProps: ListItemProps, oldProps: ListItemProps) => void;
/**
 * @ignore
  */
export declare class RNListItem extends QListWidgetItem implements RNComponent {
    native: any;
    actualListItemWidget?: NodeWidget<any>;
    setProps(newProps: ListItemProps, oldProps: ListItemProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
