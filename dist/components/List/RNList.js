"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNList = exports.setListProps = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const RNView_1 = require("../View/RNView");
const RNListItem_1 = require("../ListItem/RNListItem");
/**
 * @ignore
  */
const setListProps = (widget, newProps, oldProps) => {
    const setter = {};
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(widget, newProps, oldProps);
};
exports.setListProps = setListProps;
/**
 * @ignore
  */
class RNList extends nodegui_1.QListWidget {
    setProps(newProps, oldProps) {
        (0, exports.setListProps)(this, newProps, oldProps);
    }
    removeChild(child) {
        const row = this.row(child);
        this.takeItem(row);
    }
    appendInitialChild(child) {
        this.appendChild(child);
    }
    appendChild(child) {
        if (!this.layout) {
            this.setLayout(new nodegui_1.FlexLayout());
        }
        if (!(child instanceof RNListItem_1.RNListItem)) {
            throw new Error("Children of list should be of type ListItem");
        }
        this.addItem(child);
        if (child.actualListItemWidget) {
            child.setSizeHint(child.actualListItemWidget.size());
            this.setItemWidget(child, child.actualListItemWidget);
        }
    }
    insertBefore(child, beforeChild) {
        const row = this.row(beforeChild);
        this.insertItem(row, child);
    }
}
exports.RNList = RNList;
RNList.tagName = "list";
