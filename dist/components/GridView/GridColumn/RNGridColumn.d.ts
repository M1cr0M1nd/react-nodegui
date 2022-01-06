import { Component, NodeWidget } from "@nodegui/nodegui";
import { RNComponent } from "../../config";
import { RNGridRow } from "../GridRow/RNGridRow";
export declare type GridColumnProps = {
    /**
     * The number of horizontal units to occupy
     */
    width?: number;
};
export declare class RNGridColumn extends Component implements RNComponent {
    native: any;
    actualWidget?: NodeWidget<any>;
    parentRow?: RNGridRow;
    latestProps?: GridColumnProps;
    prevProps?: GridColumnProps;
    columnIndex?: number;
    width?: number;
    setParentRowAndUpdateProps(parentRow: RNGridRow, index: number): void;
    remove(): void;
    setProps(newProps: GridColumnProps, oldProps: GridColumnProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
