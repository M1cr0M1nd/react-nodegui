"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNSystemTrayIcon = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const helpers_1 = require("../../utils/helpers");
const setSystemTrayIconProps = (widget, newProps, oldProps) => {
    const setter = {
        set icon(icon) {
            widget.setIcon(icon);
        },
        set id(id) {
            widget.setObjectName(id);
        },
        set on(listenerMap) {
            const listenerMapLatest = Object.assign({}, listenerMap);
            const oldListenerMap = Object.assign({}, oldProps.on);
            Object.entries(oldListenerMap).forEach(([eventType, oldEvtListener]) => {
                const newEvtListener = listenerMapLatest[eventType];
                if (oldEvtListener !== newEvtListener) {
                    widget.removeEventListener(eventType, oldEvtListener);
                }
                else {
                    delete listenerMapLatest[eventType];
                }
            });
            Object.entries(listenerMapLatest).forEach(([eventType, newEvtListener]) => {
                widget.addEventListener(eventType, newEvtListener);
            });
        },
        set tooltip(tooltip) {
            widget.setToolTip(tooltip);
        },
        set visible(shouldShow) {
            shouldShow ? widget.show() : widget.hide();
        },
    };
    Object.assign(setter, newProps);
};
/**
 * @ignore
 */
class RNSystemTrayIcon extends nodegui_1.QSystemTrayIcon {
    setProps(newProps, oldProps) {
        setSystemTrayIconProps(this, newProps, oldProps);
    }
    appendInitialChild(child) {
        if (child instanceof nodegui_1.QMenu) {
            if (!this.contextMenu) {
                this.setContextMenu(child);
            }
            else {
                console.warn("SystemTrayIcon can't have more than one Menu.");
            }
        }
        else {
            console.warn("SystemTrayIcon only supports Menu as its children");
        }
    }
    appendChild(child) {
        this.appendInitialChild(child);
    }
    insertBefore(child, beforeChild) {
        (0, helpers_1.throwUnsupported)(this);
    }
    removeChild(child) {
        (0, helpers_1.throwUnsupported)(this);
    }
}
exports.RNSystemTrayIcon = RNSystemTrayIcon;
RNSystemTrayIcon.tagName = "systemtrayicon";
