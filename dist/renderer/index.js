"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
const reconciler_1 = __importStar(require("../reconciler"));
const react_1 = __importDefault(require("react"));
//@ts-ignore
const react_deep_force_update_1 = __importDefault(require("react-deep-force-update"));
const defaultOptions = {
    onInit: () => { },
    onRender: () => { }
};
class Renderer {
    static forceUpdate() {
        if (Renderer.container) {
            //@ts-ignore
            Renderer.container._reactInternalInstance = Renderer.container.current;
            (0, react_deep_force_update_1.default)(Renderer.container);
        }
    }
    static render(element, options) {
        const containerInfo = reconciler_1.appContainer;
        const isConcurrent = true;
        const hydrate = false;
        const rendererOptions = Object.assign({}, defaultOptions, options);
        Renderer.container = reconciler_1.default.createContainer(containerInfo, isConcurrent, hydrate); // Creates root fiber node.
        rendererOptions.onInit(reconciler_1.default);
        const parentComponent = null; // Since there is no parent (since this is the root fiber). We set parentComponent to null.
        reconciler_1.default.updateContainer(element, Renderer.container, parentComponent, () => {
            rendererOptions.onRender();
        }); // Start reconcilation and render the result
    }
}
exports.Renderer = Renderer;
// When webpack bundles everthing into one js file, there is no require cache. Hence, all the modules are present in a single array.
// When all the instructions from this bundled js file is executed and there are no more events left to listen to,
// NodeJs tries to clear up everything. Since all the modules in the bundled file are in a single variable and there is nothing referencing it,
// the gc is able to clean up even those. This is not the case in a regular nodejs app where we have require cache that keeps reference to all the modules.
// Hence to prevent all the modules from being gc'ed we keep reference to one of the modules in the entire array of modules.
// Here, we chose React, but it can be anything.
global.__REACT__ = react_1.default;
