"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNGridColumn = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const setGridColumnProps = (widget, parentRow, newProps, oldProps) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (widget.actualWidget) {
        // TODO: Optimize this
        (_b = (_a = parentRow.parentGrid) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b.removeWidget(widget.actualWidget);
        (_d = (_c = parentRow.parentGrid) === null || _c === void 0 ? void 0 : _c.layout) === null || _d === void 0 ? void 0 : _d.addWidget(widget.actualWidget, (_e = parentRow.rowIndex) !== null && _e !== void 0 ? _e : 0, (_f = widget.columnIndex) !== null && _f !== void 0 ? _f : 0, (_g = parentRow.height) !== null && _g !== void 0 ? _g : 1, (_h = widget.width) !== null && _h !== void 0 ? _h : 1);
    }
    const setter = {
        set width(width) {
            widget.width = width;
        },
    };
    Object.assign(setter, newProps);
};
class RNGridColumn extends nodegui_1.Component {
    setParentRowAndUpdateProps(parentRow, index) {
        var _a, _b;
        this.parentRow = parentRow;
        this.columnIndex = index;
        setGridColumnProps(this, parentRow, (_a = this.latestProps) !== null && _a !== void 0 ? _a : {}, (_b = this.prevProps) !== null && _b !== void 0 ? _b : {});
    }
    remove() {
        var _a, _b, _c;
        if (!this.actualWidget) {
            return;
        }
        (_c = (_b = (_a = this.parentRow) === null || _a === void 0 ? void 0 : _a.parentGrid) === null || _b === void 0 ? void 0 : _b.layout) === null || _c === void 0 ? void 0 : _c.removeWidget(this.actualWidget);
        this.actualWidget.close();
        this.actualWidget = undefined;
    }
    /* RNComponent */
    setProps(newProps, oldProps) {
        if (this.parentRow) {
            setGridColumnProps(this, this.parentRow, newProps, oldProps);
        }
        this.latestProps = newProps;
        this.prevProps = oldProps;
    }
    appendInitialChild(child) {
        if (this.actualWidget) {
            throw new Error("Grid column can have only one child");
        }
        this.actualWidget = child;
    }
    appendChild(child) {
        this.appendInitialChild(child);
    }
    insertBefore(child, beforeChild) {
        this.appendInitialChild(child);
    }
    removeChild(child) {
        this.remove();
    }
}
exports.RNGridColumn = RNGridColumn;
RNGridColumn.tagName = "gridcolumn";
