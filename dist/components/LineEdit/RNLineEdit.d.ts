import { QLineEdit, EchoMode, NodeWidget, QLineEditSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
/**
* The LineEdit component provides ability to add and manipulate native editable text field widgets. It is based on
* [NodeGui's QLineEdit](https://docs.nodegui.org/docs/api/generated/classes/qlineedit).
* ## Example
* ```javascript
* import React from "react";
* import { Renderer, LineEdit, Window } from "@nodegui/react-nodegui";
* const App = () => {
*   const handleTextChanged = textValue => {
*    console.log(textValue);
*   };
*   return (
*     <Window>
*      <LineEdit on={{ textChanged: handleTextChanged }} />
*    </Window>
*   );
* };
* Renderer.render(<App />);
*
* ```
*/
export interface LineEditProps extends ViewProps<QLineEditSignals> {
    text?: string;
    placeholderText?: string;
    readOnly?: boolean;
    echoMode?: EchoMode;
}
/**
 * @ignore
 */
export declare class RNLineEdit extends QLineEdit implements RNWidget {
    setProps(newProps: LineEditProps, oldProps: LineEditProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
