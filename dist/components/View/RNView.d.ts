import { QWidget, WindowState, QCursor, CursorShape, NodeWidget, QIcon, WidgetEventTypes, QWidgetSignals } from "@nodegui/nodegui";
import { NativeRawPointer } from "@nodegui/nodegui/dist/lib/core/Component";
import { RNWidget, RNProps } from "../config";
/**
 * The View component can be used to encapsulate other components and provide structure.
 * It functions similar to a div in the web world. It is based on
 * [NodeGui's QWidget](https://docs.nodegui.org/docs/api/QWidget).
 * ## Example
 * ```javascript
 *import React from "react";
 *import { Renderer, Button, Window, View } from "./index";
 *const App = () => {
 *  return (
 *    <Window>
 *      <View>
 *        <Button style={buttonStyle} text={"Hello"} />
 *        <Button style={buttonStyle} text={"World"} />
 *      </View>
 *    </Window>
 *  );
 *};
 *const buttonStyle = `
 *  color: white;
 *`;
 *Renderer.render(<App />);
 * ```
 */
export interface ViewProps<Signals extends {}> extends RNProps {
    /**
     * Shows or hides the widget and its children. [QWidget: show](https://docs.nodegui.org/docs/api/NodeWidget#widgetshow)
     */
    visible?: boolean;
    /**
     * Sets the property that holds the widget's style sheet. [QWidget: setStyleSheet](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetstylesheetstylesheet)
     */
    styleSheet?: string;
    /**
     * Sets the inline stylesheet property. [QWidget: setInlineStyle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetinlinestylestyle)
     */
    style?: string;
    /**
     * Sets the screen position as well as size of the widget. [QWidget: setGeometry](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetgeometryx-y-width-height)
     */
    geometry?: Geometry;
    /**
     * Sets the object name (id) of the widget in Qt. Object name can be analogous to id of an element in the web world. Using the objectName of the widget one can reference it in the Qt's stylesheet much like what we do with id in the web world. [QWidget: setObjectName](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetobjectnameobjectname)
     */
    id?: string;
    /**
     * Sets the property that tells whether mouseTracking is enabled for the widget. [QWidget: setMouseTracking](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmousetrackingismousetracked)
     */
    mouseTracking?: boolean;
    /**
     * Sets the property that tells whether the widget is enabled. In general an enabled widget handles keyboard and mouse events; a disabled widget does not. [QWidget: setEnabled](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetenabledenabled)
     */
    enabled?: boolean;
    /**
     * This property holds the level of opacity for the window. [QWidget: setWindowOpacity](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowopacityopacity)
     */
    windowOpacity?: number;
    /**
     * Sets the window title property. [QWidget: setWindowTitle](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowtitletitle)
     */
    windowTitle?: string;
    /**
     * Sets the window state. [QWidget: setWindowState](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowstatestate)
     */
    windowState?: WindowState;
    /**
     * Sets the window mouse cursor. [QWidget: setCursor](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetcursorcursor)
     */
    cursor?: CursorShape | QCursor;
    /**
     * Sets the window icon. [QWidget: setWindowIcon](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetwindowiconicon)
     */
    windowIcon?: QIcon;
    /**
     * Sets the minimum size of the widget. [QWidget: setMinimumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetminimumsizewidth-height)
     */
    minSize?: Size;
    /**
     * Sets the maximum size of the widget. [QWidget: setMaximumSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetmaximumsizewidth-height)
     */
    maxSize?: Size;
    /**
     * Sets both the minimum and maximum sizes of the widget. [QWidget: setFixedSize](https://docs.nodegui.org/docs/api/NodeWidget#widgetsetfixedsizewidth-height)
     */
    size?: ViewSize;
    /**
     * Sets the screen position of the widget. [QWidget: move](https://docs.nodegui.org/docs/api/NodeWidget#widgetmovex-y)
     */
    pos?: Position;
    /**
     * Prop to set the event listener map. See [Handlong Events](/docs/guides/handle-events)
     */
    on?: Partial<WidgetEventListeners | Signals>;
    /**
     * Prop to set the ref. The ref will return the underlying nodegui widget.
     */
    ref?: any;
    /**
     * Prop to set the Widget Attributes. example:
     * `<View attributes={{[WidgetAttributes.WA_Disabled]: true}} />`
     */
    attributes?: WidgetAttributesMap;
    /**
     * Prop to set the Widget flags. example:
     * `<View windowFlags={{[WindowType.SplashScreen]: true}} />`
     */
    windowFlags?: WindowFlagsMap;
}
/**
 * @ignore
 */
export declare function setViewProps<Signals extends {}>(widget: NodeWidget<any>, newProps: ViewProps<Signals>, oldProps: ViewProps<Signals>): void;
/**
 * @ignore
 */
export declare class RNView extends QWidget implements RNWidget {
    setProps(newProps: ViewProps<QWidgetSignals>, oldProps: ViewProps<QWidgetSignals>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    static tagName: string;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
}
declare type Geometry = {
    x: number;
    y: number;
    width: number;
    height: number;
};
declare type Size = {
    width: number;
    height: number;
};
declare type ViewSize = Size & {
    fixed?: boolean;
};
declare type Position = {
    x: number;
    y: number;
};
declare type WidgetAttributesMap = {
    [key: number]: boolean;
};
declare type WindowFlagsMap = {
    [key: number]: boolean;
};
export declare type WidgetEventListeners = {
    [key in WidgetEventTypes]: (event?: NativeRawPointer<"QEvent">) => void;
};
export {};
