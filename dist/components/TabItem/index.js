"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabItem = void 0;
const config_1 = require("../config");
const RNTabItem_1 = require("./RNTabItem");
class TabItemConfig extends config_1.ComponentConfig {
    constructor() {
        super(...arguments);
        this.tagName = RNTabItem_1.RNTabItem.tagName;
    }
    shouldSetTextContent(nextProps) {
        return false;
    }
    createInstance(newProps, rootInstance, context, workInProgress) {
        const item = new RNTabItem_1.RNTabItem();
        item.setProps(newProps, {});
        return item;
    }
    finalizeInitialChildren(instance, newProps, rootContainerInstance, context) {
        return false;
    }
    commitUpdate(instance, updatePayload, oldProps, newProps, finishedWork) {
        instance.setProps(newProps, oldProps);
    }
}
exports.TabItem = (0, config_1.registerComponent)(new TabItemConfig());
