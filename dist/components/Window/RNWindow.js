"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNWindow = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const RNView_1 = require("../View/RNView");
const setWindowProps = (window, newProps, oldProps) => {
    const setter = {
        set menuBar(menubar) {
            window.setMenuBar(menubar);
            console.log("menubar was set");
        },
    };
    Object.assign(setter, newProps);
    (0, RNView_1.setViewProps)(window, newProps, oldProps);
};
/**
 * @ignore
 */
class RNWindow extends nodegui_1.QMainWindow {
    setProps(newProps, oldProps) {
        setWindowProps(this, newProps, oldProps);
    }
    removeChild(child) {
        const removedChild = this.takeCentralWidget();
        if (removedChild) {
            removedChild.close();
        }
        child.close();
    }
    appendInitialChild(child) {
        if (child instanceof nodegui_1.QMenuBar) {
            if (!this.menuBar()) {
                this.setMenuBar(child);
            }
            else {
                console.warn("MainWindow can't have more than one menubar.");
            }
            return;
        }
        if (!this.centralWidget) {
            this.setCentralWidget(child);
        }
        else {
            console.warn("MainWindow can't have more than one child node");
        }
    }
    appendChild(child) {
        this.appendInitialChild(child);
    }
    insertBefore(child, beforeChild) {
        this.appendInitialChild(child);
    }
}
exports.RNWindow = RNWindow;
RNWindow.tagName = "mainwindow";
