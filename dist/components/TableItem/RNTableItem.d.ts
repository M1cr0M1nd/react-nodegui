import { QTableWidgetItem, NodeWidget, ItemFlag, CheckState, QVariant, QBrush, QIcon, QFont, QSize, AlignmentFlag } from "@nodegui/nodegui";
import { RNComponent } from "../config";
export interface TableData {
    role: number;
    value: QVariant;
}
export declare type CellPosition = [number, number];
export interface TableItemProps {
    /**
     * position of this item in the Table
     * @tuple [row: number, column: number]
     */
    cellPosition: CellPosition;
    text?: string;
    /**
     * handle the behavior of the TableItem
     *
     * following example makes the item non-editable+selectable only checkable
     * @example
     * ```javascript
     * <TableItem flags={ItemFlag.ItemIsEnabled | ItemFlag.ItemIsUserCheckable} {...props}/>
     * ```
     */
    flags?: ItemFlag;
    checkState?: CheckState;
    data?: TableData;
    background?: QBrush;
    foreground?: QBrush;
    icon?: QIcon;
    selected?: boolean;
    font?: QFont;
    hintSize?: QSize;
    statusTip?: string;
    textAlignment?: AlignmentFlag;
    toolTip?: string;
    whatsThis?: string;
}
/**
 * @ignore
 */
export declare class RNTableItem extends QTableWidgetItem implements RNComponent {
    cellPosition: CellPosition;
    setProps(newProps: TableItemProps, oldProps: TableItemProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
