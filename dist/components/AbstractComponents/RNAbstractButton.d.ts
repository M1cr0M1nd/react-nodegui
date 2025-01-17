import { QIcon, QSize, QAbstractButtonSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { QAbstractButton } from "@nodegui/nodegui";
/**
 * The Button component provides ability to add and manipulate native button widgets. It is based on
 * [NodeGui's QPushButton](https://docs.nodegui.org/docs/api/QPushButton).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, Button, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *   return (
 *     <Window>
 *       <Button style={buttonStyle} text={"Hello World"} />
 *     </Window>
 *   );
 * };
 * const buttonStyle = `
 *   color: white;
 * `;
 * Renderer.render(<App />);
 *
 * ```
 */
export interface AbstractButtonProps<Signals extends QAbstractButtonSignals> extends ViewProps<Signals> {
    /**
     * Alternative method of providing the button text
     */
    children?: string;
    /**
     * Sets the given text to the button. [QPushButton: setText](https://docs.nodegui.org/docs/api/QPushButton#buttonsettexttext)
     */
    text?: string;
    /**
     * Sets an icon in the button. [QPushButton: setIcon](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonicon)
     */
    icon?: QIcon;
    /**
     * Sets an icon size in the button. [QPushButton: setIconSize](https://docs.nodegui.org/docs/api/QPushButton#buttonseticonsize)
     */
    iconSize?: QSize;
}
export declare function setAbstractButtonProps<Signals extends QAbstractButtonSignals>(widget: QAbstractButton<Signals>, newProps: AbstractButtonProps<Signals>, oldProps: AbstractButtonProps<Signals>): void;
