"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNDialog = exports.setDialogProps = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const QDialog_1 = require("@nodegui/nodegui/dist/lib/QtWidgets/QDialog");
const RNView_1 = require("../View/RNView");
function setDialogProps(widget, newProps, oldProps) {
    const setter = {
        set open(open) {
            open ? widget.open() : widget.close();
        },
        set font(font) {
            widget.setFont(font);
        },
        set focus(focus) {
            widget.setFocus(focus);
        },
        set modal(modal) {
            widget.setModal(modal);
        },
        set reject(reject) {
            reject && widget.reject();
        },
        set result(result) {
            widget.setResult(result);
        },
        set enableSizeGrip(sizeGrip) {
            widget.setSizeGripEnabled(sizeGrip);
        },
    };
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(widget, newProps, oldProps);
}
exports.setDialogProps = setDialogProps;
class RNDialog extends nodegui_1.QDialog {
    setProps(newProps, oldProps) {
        setDialogProps(this, newProps, oldProps);
    }
    appendInitialChild(child) {
        this.appendChild(child);
    }
    appendChild(child) {
        if (!child || child instanceof QDialog_1.NodeDialog) {
            return;
        }
        if (!this.layout) {
            const flexLayout = new nodegui_1.FlexLayout();
            flexLayout.setFlexNode(this.getFlexNode());
            this.setLayout(flexLayout);
            this.layout = flexLayout;
        }
        this.layout.addWidget(child);
    }
    insertBefore(child, beforeChild) {
        if (child instanceof QDialog_1.NodeDialog) {
            this.appendChild(child);
        }
    }
    removeChild(child) {
        if (!this.layout) {
            console.warn("parent has no layout to remove child from");
            return;
        }
        this.layout.removeWidget(child);
        child.close();
    }
}
exports.RNDialog = RNDialog;
RNDialog.tagName = "dialog";
