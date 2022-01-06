"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerComponent = exports.getComponentByTagName = exports.ComponentConfig = exports.RNWidget = exports.RNComponent = void 0;
const nodegui_1 = require("@nodegui/nodegui");
class RNComponent {
}
exports.RNComponent = RNComponent;
class RNWidget extends nodegui_1.NodeWidget {
}
exports.RNWidget = RNWidget;
class ComponentConfig {
    getContext(parentContext, rootInstance) {
        return {};
    }
    finalizeInitialChildren(instance, newProps, rootContainerInstance, context) {
        return false;
    }
    commitMount(instance, newProps, internalInstanceHandle) {
        return;
    }
    // Update methods:
    prepareUpdate(instance, oldProps, newProps, rootContainerInstance, hostContext) {
        return true;
    }
}
exports.ComponentConfig = ComponentConfig;
const components = new Map();
const getComponentByTagName = (tagName) => {
    const config = components.get(tagName);
    if (!config) {
        throw `Unknown component ${tagName}`;
    }
    return config;
};
exports.getComponentByTagName = getComponentByTagName;
function registerComponent(config) {
    if (components.has(config.tagName)) {
        throw `A component with tagName: ${config.tagName} already exists. This base component will be ignored`;
    }
    components.set(config.tagName, config);
    return config.tagName;
}
exports.registerComponent = registerComponent;
