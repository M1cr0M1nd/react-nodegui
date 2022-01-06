"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNTable = exports.setTableProps = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const RNView_1 = require("../View/RNView");
function verifyRanges({ row: rowCount, column: columnCount }, { row, column }) {
    if (row && (row < 0 || row > rowCount - 1)) {
        console.warn(`Row "${row}" is out of range "${rowCount - 1}"`);
    }
    if (column && (column < 0 || column > columnCount - 1)) {
        console.warn(`Column "${column}" is out range "${columnCount - 1}"`);
    }
}
/**
 * @ignore
 */
const setTableProps = (widget, newProps, oldProps) => {
    const cellRange = {
        row: widget.rowCount(),
        column: widget.columnCount(),
    };
    const setter = {
        set horizontalHeaderItems(items) {
            for (const item of items) {
                widget.setHorizontalHeaderItem(item.column, item.item);
            }
        },
        set horizontalHeaderLabels(labels) {
            widget.setHorizontalHeaderLabels(labels);
        },
        set verticalHeaderItems(items) {
            for (const { row, item } of items) {
                verifyRanges(cellRange, { row });
                widget.setVerticalHeaderItem(row, item);
            }
        },
        set verticalHeaderLabels(labels) {
            widget.setVerticalHeaderLabels(labels);
        },
        set cellWidgets(cellWidgets) {
            for (const { column, row, widget: cellWidget } of cellWidgets) {
                verifyRanges(cellRange, { row, column });
                widget.setCellWidget(row, column, cellWidget);
            }
        },
        set currentCell({ row, column }) {
            verifyRanges(cellRange, { row, column });
            widget.setCurrentCell(row, column);
        },
        set sortItems({ column, order }) {
            verifyRanges(cellRange, { column });
            widget.sortItems(column, order);
        },
        set selectedColumn(column) {
            verifyRanges(cellRange, { column });
            widget.selectColumn(column);
        },
        set selectedRow(row) {
            widget.selectRow(row);
        },
        set showGrid(showGrid) {
            widget.setShowGrid(showGrid);
        },
        set columnWidth(sizes) {
            for (const { column, width } of sizes) {
                verifyRanges(cellRange, { column });
                widget.setColumnWidth(column, width);
            }
        },
        set rowHeight(sizes) {
            for (const { row, width } of sizes) {
                verifyRanges(cellRange, { row });
                widget.setRowHeight(row, width);
            }
        },
        set sortingEnabled(sortingEnabled) {
            widget.setSortingEnabled(sortingEnabled);
        },
        set hideColumns(columns) {
            for (const column of columns) {
                verifyRanges(cellRange, { column });
                widget.hideColumn(column);
            }
        },
        set hideRows(rows) {
            for (const row of rows) {
                verifyRanges(cellRange, { row });
                widget.hideRow(row);
            }
        },
    };
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(widget, newProps, oldProps);
};
exports.setTableProps = setTableProps;
/**
 * @ignore
 */
class RNTable extends nodegui_1.QTableWidget {
    setProps(newProps, oldProps) {
        (0, exports.setTableProps)(this, newProps, oldProps);
    }
    removeChild(child) {
        child.close();
    }
    appendInitialChild(child) {
        const { cellPosition } = child;
        if (!this.layout) {
            this.setLayout(new nodegui_1.FlexLayout());
        }
        const row = this.rowCount();
        const column = this.columnCount();
        verifyRanges({ row, column }, { row: cellPosition[0], column: cellPosition[1] });
        this.setItem(cellPosition[0], cellPosition[1], child);
    }
    appendChild(child) {
        this.appendInitialChild(child);
    }
    insertBefore(child, beforeChild) {
        this.appendInitialChild(child);
    }
}
exports.RNTable = RNTable;
RNTable.tagName = "table";
