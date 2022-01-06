import { QProgressBar, Orientation, NodeWidget, QProgressBarSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
/**
* The ProgressBar component provides ability to add and manipulate native progress bar widgets. It is based on
* [NodeGui's QProgressBar](https://docs.nodegui.org/docs/api/generated/classes/qprogressbar/).
* ## Example
* ```javascript
* import React from "react";
* import { Renderer, ProgressBar, Window } from "@nodegui/react-nodegui";
* const App = () => {
*   return (
*    <Window>
*      <ProgressBar value={45} />
*   </Window>
*  );
* };
* Renderer.render(<App />);
* ```
*/
export interface ProgressBarProps extends ViewProps<QProgressBarSignals> {
    value?: number;
    minimum?: number;
    maximum?: number;
    orientation?: Orientation;
}
/**
 * @ignore
 */
export declare class RNProgressBar extends QProgressBar implements RNWidget {
    setProps(newProps: ProgressBarProps, oldProps: ProgressBarProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
