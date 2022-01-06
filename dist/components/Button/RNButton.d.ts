import { QPushButton, NodeWidget, QPushButtonSignals } from "@nodegui/nodegui";
import { AbstractButtonProps } from "../AbstractComponents/RNAbstractButton";
import { RNWidget } from "../config";
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
export interface ButtonProps extends AbstractButtonProps<QPushButtonSignals> {
    /**
     * Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)
     */
    flat?: boolean;
}
/**
 * @ignore
 */
export declare class RNButton extends QPushButton implements RNWidget {
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    setProps(newProps: ButtonProps, oldProps: ButtonProps): void;
    static tagName: string;
}
