"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNGridView = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const RNView_1 = require("../View/RNView");
const RNGridRow_1 = require("./GridRow/RNGridRow");
const utils_1 = require("./utils");
const setGridViewProps = (widget, newProps, oldProps) => {
    const setter = {
        set horizontalSpacing(spacing) {
            var _a;
            (_a = widget.layout) === null || _a === void 0 ? void 0 : _a.setHorizontalSpacing(spacing);
        },
        set verticalSpacing(spacing) {
            var _a;
            (_a = widget.layout) === null || _a === void 0 ? void 0 : _a.setVerticalSpacing(spacing);
        },
        set columnProps(props) {
            var _a, _b;
            for (const indexString of Object.keys(props)) {
                const index = parseInt(indexString, 10);
                const { stretch, minWidth } = props[index];
                (_a = widget.layout) === null || _a === void 0 ? void 0 : _a.setColumnStretch(index, stretch !== null && stretch !== void 0 ? stretch : 0);
                (_b = widget.layout) === null || _b === void 0 ? void 0 : _b.setColumnMinimumWidth(index, minWidth !== null && minWidth !== void 0 ? minWidth : 0);
            }
        },
        set rowProps(props) {
            var _a, _b;
            for (const indexString of Object.keys(props)) {
                const index = parseInt(indexString, 10);
                const { stretch, minHeight } = props[index];
                (_a = widget.layout) === null || _a === void 0 ? void 0 : _a.setRowStretch(index, stretch !== null && stretch !== void 0 ? stretch : 0);
                (_b = widget.layout) === null || _b === void 0 ? void 0 : _b.setRowMinimumHeight(index, minHeight !== null && minHeight !== void 0 ? minHeight : 0);
            }
        },
    };
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(widget, newProps, oldProps);
};
/**
 * @ignore
 */
class RNGridView extends nodegui_1.QWidget {
    constructor() {
        super(...arguments);
        this.childRows = [];
    }
    get layout() {
        return this._layout;
    }
    set layout(l) {
        this._layout = l;
    }
    updateChildren(startIndex = 0) {
        (0, utils_1.updateDisplacedChildren)(startIndex, this.childRows, this, "height", "setParentGridAndUpdateProps");
    }
    /* RNComponent */
    setProps(newProps, oldProps) {
        if (this.layout) {
            setGridViewProps(this, newProps, oldProps);
        }
        else {
            this.initialProps = newProps;
        }
    }
    appendInitialChild(child) {
        this.appendChild(child);
    }
    appendChild(child) {
        if (!(child instanceof RNGridRow_1.RNGridRow)) {
            throw new Error("GridRow is the only supported child of GridView");
        }
        const updateChild = () => {
            const offset = (0, utils_1.offsetForIndex)(this.childRows.length, this.childRows, "height");
            child.setParentGridAndUpdateProps(this, offset);
            this.childRows.push({
                offset,
                data: child,
            });
        };
        if (this.layout) {
            updateChild();
            return;
        }
        const layout = new nodegui_1.QGridLayout();
        this.setLayout(layout);
        this.layout = layout;
        // Newly created layout, so set initial props
        if (this.initialProps) {
            setGridViewProps(this, this.initialProps, {});
        }
        updateChild();
    }
    insertBefore(child, beforeChild) {
        const prevIndex = this.childRows.findIndex(({ data }) => data === beforeChild);
        if (prevIndex === -1) {
            throw new Error("Attempted to insert child GridRow before nonexistent row");
        }
        const offset = (0, utils_1.offsetForIndex)(prevIndex, this.childRows, "height");
        this.childRows.splice(prevIndex, 0, {
            offset,
            data: child,
        });
        // Update displaced children
        this.updateChildren(prevIndex);
    }
    removeChild(child) {
        const prevIndex = this.childRows.findIndex(({ data }) => data === child);
        if (prevIndex !== -1) {
            this.childRows.splice(prevIndex, 1);
            this.updateChildren(prevIndex);
        }
        child.remove();
        child.parentGrid = undefined;
    }
}
exports.RNGridView = RNGridView;
RNGridView.tagName = "gridview";
