import { NodeWidget, QTableWidget, QTableWidgetItem, QTableWidgetSignals, SortOrder } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNComponent } from "../config";
import { RNTableItem } from "../TableItem/RNTableItem";
export interface CellRange {
    row: number;
    column: number;
}
interface HorizontalHeader extends Omit<CellRange, "row"> {
    item: QTableWidgetItem;
}
interface VerticalHeader extends Omit<CellRange, "column"> {
    item: QTableWidgetItem;
}
interface CellWidget extends CellRange {
    widget: NodeWidget<any>;
}
interface Sort extends Omit<CellRange, "row"> {
    order?: SortOrder;
}
interface ColumnSize extends Omit<CellRange, "row"> {
    width: number;
}
interface RowSize extends Omit<CellRange, "column"> {
    width: number;
}
export interface TableProps extends ViewProps<QTableWidgetSignals> {
    cellRange: CellRange;
    horizontalHeaderItems?: HorizontalHeader[];
    horizontalHeaderLabels?: string[];
    verticalHeaderItems?: VerticalHeader[];
    verticalHeaderLabels?: string[];
    cellWidgets?: CellWidget[];
    currentCell?: CellRange;
    sortItems?: Sort;
    selectedColumn?: number;
    selectedRow?: number;
    showGrid?: boolean;
    columnWidth?: ColumnSize[];
    rowHeight?: RowSize[];
    sortingEnabled?: boolean;
    hideColumns?: number[];
    hideRows?: number[];
}
declare type CustomTableProps = Omit<TableProps, "cellRange">;
/**
 * @ignore
 */
export declare const setTableProps: (widget: RNTable, newProps: CustomTableProps, oldProps: CustomTableProps) => void;
/**
 * @ignore
 */
export declare class RNTable extends QTableWidget implements RNComponent {
    setProps(newProps: CustomTableProps, oldProps: CustomTableProps): void;
    removeChild(child: NodeWidget<any>): void;
    appendInitialChild(child: RNTableItem): void;
    appendChild(child: RNTableItem): void;
    insertBefore(child: RNTableItem, beforeChild: RNTableItem): void;
    static tagName: string;
}
export {};
