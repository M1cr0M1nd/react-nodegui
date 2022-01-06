"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNScrollArea = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const RNView_1 = require("../View/RNView");
const setScrollAreaProps = (widget, newProps, oldProps) => {
    const setter = {
        set widgetResizable(resizable) {
            widget.setWidgetResizable(resizable);
        }
    };
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(widget, newProps, oldProps);
};
/**
 * @ignore
 */
class RNScrollArea extends nodegui_1.QScrollArea {
    setProps(newProps, oldProps) {
        setScrollAreaProps(this, newProps, oldProps);
    }
    removeChild(child) {
        const removedChild = this.takeWidget();
        if (removedChild) {
            removedChild.close();
        }
        child.close();
    }
    appendInitialChild(child) {
        if (this.contentWidget) {
            console.warn("ScrollView can't have more than one child node");
            return;
        }
        this.setWidget(child);
    }
    appendChild(child) {
        this.appendInitialChild(child);
    }
    insertBefore(child, beforeChild) {
        this.appendInitialChild(child);
    }
}
exports.RNScrollArea = RNScrollArea;
RNScrollArea.tagName = "scrollarea";
