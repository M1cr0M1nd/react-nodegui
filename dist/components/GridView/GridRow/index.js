"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridRow = void 0;
const config_1 = require("../../config");
const RNGridRow_1 = require("./RNGridRow");
class GridRowConfig extends config_1.ComponentConfig {
    constructor() {
        super(...arguments);
        this.tagName = RNGridRow_1.RNGridRow.tagName;
    }
    shouldSetTextContent(nextProps) {
        return false;
    }
    createInstance(newProps, rootInstance, context, workInProgress) {
        const widget = new RNGridRow_1.RNGridRow();
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
exports.GridRow = (0, config_1.registerComponent)(new GridRowConfig());
