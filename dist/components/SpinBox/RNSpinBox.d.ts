import { QSpinBox, NodeWidget, QSpinBoxSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
/**
 * The SpinBox component provides the ability to add and manipulate native spin box widgets. It is based on
 * [NodeGui's QSpinBox](https://docs.nodegui.org/docs/api/generated/classes/qspinbox/).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, SpinBox, Window } from "@nodegui/react-nodegui";
 * const App = () => {
 *  const handleValuehanged = {
 *    valueChanged: (newValue) => {
 *       console.log(newValue);
 *    },
 *   };
 *   return (
 *    <Window>
 *       <SpinBox on={handleValuehanged} value={10} />
 *    </Window>
 *   );
 * };
 * Renderer.render(<App />);
 *
 * ```
 */
export interface SpinBoxProps extends ViewProps<QSpinBoxSignals> {
    prefix?: string;
    suffix?: string;
    singleStep?: number;
    range?: Range;
    value?: number;
}
/**
 * @ignore
 */
export declare class RNSpinBox extends QSpinBox implements RNWidget {
    setProps(newProps: SpinBoxProps, oldProps: SpinBoxProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
declare type Range = {
    minimum: number;
    maximum: number;
};
export {};
