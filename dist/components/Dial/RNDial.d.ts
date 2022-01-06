import { QDial, NodeWidget, QDialSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
/**
 * The Dial provides ability to add and manipulate native dial slider widgets. It is based on
 * [NodeGui's QDial](https://docs.nodegui.org/docs/api/generated/classes/qdial/).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, Dial, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *   return (
 *     <Window>
 *       <Dial />
 *     </Window>
 *   );
 * };
 * Renderer.render(<App />);
 * ```
 */
export interface DialProps extends ViewProps<QDialSignals> {
    notchesVisible?: boolean;
    wrapping?: boolean;
    notchTarget?: number;
}
/**
 * @ignore
 */
export declare class RNDial extends QDial implements RNWidget {
    setProps(newProps: DialProps, oldProps: DialProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
