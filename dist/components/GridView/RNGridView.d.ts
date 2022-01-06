import { FunctionComponentElement } from "react";
import { QGridLayoutSignals, QGridLayout, QWidget } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNGridRow, GridRowProps } from "./GridRow/RNGridRow";
import { DataWithOffset } from "./utils";
export declare type GridViewColumnProps = {
    [ColumnIndex: number]: {
        stretch?: number;
        minWidth?: number;
    };
};
export declare type GridViewRowProps = {
    [RowIndex: number]: {
        stretch?: number;
        minHeight?: number;
    };
};
export interface GridViewProps extends ViewProps<QGridLayoutSignals> {
    children: Array<FunctionComponentElement<GridRowProps>> | FunctionComponentElement<GridRowProps>;
    columnProps?: GridViewColumnProps;
    rowProps?: GridViewRowProps;
    horizontalSpacing?: number;
    verticalSpacing?: number;
}
/**
 * @ignore
 */
export declare class RNGridView extends QWidget implements RNComponent {
    native: any;
    _layout?: QGridLayout;
    initialProps?: GridViewProps;
    childRows: Array<DataWithOffset<RNGridRow>>;
    get layout(): QGridLayout | undefined;
    set layout(l: QGridLayout | undefined);
    updateChildren(startIndex?: number): void;
    setProps(newProps: GridViewProps, oldProps: GridViewProps): void;
    appendInitialChild(child: RNGridRow): void;
    appendChild(child: RNGridRow): void;
    insertBefore(child: RNGridRow, beforeChild: RNGridRow): void;
    removeChild(child: RNGridRow): void;
    static tagName: string;
}
