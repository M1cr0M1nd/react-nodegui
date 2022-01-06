"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNBoxView = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const RNView_1 = require("../View/RNView");
const QDialog_1 = require("@nodegui/nodegui/dist/lib/QtWidgets/QDialog");
const setBoxViewProps = (widget, newProps, oldProps) => {
    const setter = {
        set direction(direction) {
            var _a;
            (_a = widget.layout) === null || _a === void 0 ? void 0 : _a.setDirection(direction);
        },
    };
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(widget, newProps, oldProps);
};
/**
 * @ignore
 */
class RNBoxView extends nodegui_1.QWidget {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    get layout() {
        return super.layout;
    }
    set layout(l) {
        super.layout = l;
    }
    setProps(newProps, oldProps) {
        if (this.layout) {
            setBoxViewProps(this, newProps, oldProps);
        }
        else {
            this.initialProps = newProps;
        }
    }
    appendInitialChild(child) {
        this.appendChild(child);
    }
    appendChild(child) {
        if (child instanceof QDialog_1.NodeDialog) {
            return;
        }
        const updateChild = () => {
            var _a;
            (_a = this.layout) === null || _a === void 0 ? void 0 : _a.addWidget(child);
            this.children.push(child);
        };
        if (this.layout) {
            updateChild();
            return;
        }
        const layout = new nodegui_1.QBoxLayout(nodegui_1.Direction.LeftToRight);
        this.setLayout(layout);
        this.layout = layout;
        // Newly created layout, so set initial props
        if (this.initialProps) {
            setBoxViewProps(this, this.initialProps, {});
        }
        updateChild();
    }
    insertBefore(child, beforeChild) {
        var _a;
        if (child instanceof QDialog_1.NodeDialog) {
            return;
        }
        const prevIndex = this.children.indexOf(beforeChild);
        if (prevIndex === -1) {
            throw new Error("Attempted to insert child Node before nonexistent child");
        }
        this.children.splice(prevIndex, 0, child);
        (_a = this.layout) === null || _a === void 0 ? void 0 : _a.insertWidget(prevIndex, child);
    }
    removeChild(child) {
        const prevIndex = this.children.indexOf(child);
        if (prevIndex !== -1) {
            this.children.splice(prevIndex, 1);
        }
        child.close();
    }
}
exports.RNBoxView = RNBoxView;
RNBoxView.tagName = "boxview";
