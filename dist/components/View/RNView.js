"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNView = exports.setViewProps = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const QDialog_1 = require("@nodegui/nodegui/dist/lib/QtWidgets/QDialog");
/**
 * @ignore
 */
function setViewProps(widget, newProps, oldProps) {
    const setter = {
        set visible(shouldShow) {
            shouldShow ? widget.show() : widget.hide();
        },
        set styleSheet(styleSheet) {
            widget.setStyleSheet(styleSheet);
        },
        set style(inlineStyle) {
            if (newProps.styleSheet) {
                console.warn("Both styleSheet and inlineStyle can't be used together");
            }
            widget.setInlineStyle(inlineStyle);
        },
        set geometry(geometry) {
            widget.setGeometry(geometry.x, geometry.y, geometry.width, geometry.height);
        },
        set id(id) {
            widget.setObjectName(id);
        },
        set mouseTracking(isMouseTracked) {
            widget.setMouseTracking(isMouseTracked);
        },
        set enabled(enable) {
            widget.setEnabled(enable);
        },
        set windowOpacity(opacity) {
            widget.setWindowOpacity(opacity);
        },
        set windowTitle(title) {
            widget.setWindowTitle(title);
        },
        set windowState(state) {
            widget.setWindowState(state);
        },
        set cursor(cursor) {
            widget.setCursor(cursor);
        },
        set windowIcon(icon) {
            widget.setWindowIcon(icon);
        },
        set minSize(size) {
            widget.setMinimumSize(size.width, size.height);
        },
        set maxSize(size) {
            widget.setMaximumSize(size.width, size.height);
        },
        set size(size) {
            if (size.fixed) {
                widget.setFixedSize(size.width, size.height);
            }
            else {
                const minSize = newProps.minSize || { width: 0, height: 0 };
                const maxSize = newProps.maxSize || {
                    width: 16777215,
                    height: 16777215,
                };
                widget.setMinimumSize(minSize.width, minSize.height);
                widget.setMaximumSize(maxSize.width, maxSize.height);
                widget.resize(size.width, size.height);
            }
        },
        set pos(position) {
            widget.move(position.x, position.y);
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
        set attributes(attributesMap) {
            Object.entries(attributesMap).forEach(([attribute, value]) => {
                widget.setAttribute(Number(attribute), value);
            });
        },
        set windowFlags(windowFlagsMap) {
            Object.entries(windowFlagsMap).forEach(([flag, value]) => {
                widget.setWindowFlag(Number(flag), value);
            });
        },
    };
    Object.assign(setter, newProps);
}
exports.setViewProps = setViewProps;
/**
 * @ignore
 */
class RNView extends nodegui_1.QWidget {
    setProps(newProps, oldProps) {
        setViewProps(this, newProps, oldProps);
    }
    insertBefore(child, beforeChild) {
        if (!this.layout || child instanceof QDialog_1.NodeDialog) {
            !this.layout && console.warn("parent has no layout to insert child before another child");
            return;
        }
        this.layout.insertChildBefore(child, beforeChild);
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
    removeChild(child) {
        if (!this.layout) {
            console.warn("parent has no layout to remove child from");
            return;
        }
        this.layout.removeWidget(child);
        child.close();
    }
}
exports.RNView = RNView;
RNView.tagName = "view";
