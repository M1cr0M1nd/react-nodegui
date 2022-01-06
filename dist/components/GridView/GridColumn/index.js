"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridColumn = void 0;
const RNGridColumn_1 = require("./RNGridColumn");
const config_1 = require("../../config");
class GridColumnConfig extends config_1.ComponentConfig {
    constructor() {
        super(...arguments);
        this.tagName = RNGridColumn_1.RNGridColumn.tagName;
    }
    shouldSetTextContent(nextProps) {
        return false;
    }
    createInstance(newProps, rootInstance, context, workInProgress) {
        const widget = new RNGridColumn_1.RNGridColumn();
        widget.setProps(newProps, newProps);
        return widget;
    }
    finalizeInitialChildren(instance, newProps, rootContainerInstance, context) {
        return true;
    }
    commitMount(instance, newProps, internalInstanceHandle) {
        return;
    }
    commitUpdate(instance, updatePayload, oldProps, newProps, finishedWork) {
        instance.setProps(newProps, oldProps);
    }
}
exports.GridColumn = (0, config_1.registerComponent)(new GridColumnConfig());
