import { QPlainTextEdit, NodeWidget, QPlainTextEditSignals } from "@nodegui/nodegui";
import { ViewProps } from "../View/RNView";
import { RNWidget } from "../config";
/**
 * The PlainTextEdit component provides ability to add and manipulate native editable text field widgets. It is based on
 * [NodeGui's QPlainTextEdit](https://docs.nodegui.org/docs/api/generated/classes/qplaintextedit/).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, PlainTextEdit, Window } from "@nodegui/react-nodegui";
 *
 * const plainTextRef = React.createRef();
 * const App = () => {
 * React.useEffect(() => {
 *   plainTextRef.current.addEventListener("textChanged", () =>
 *     console.log(plainTextRef.current.toPlainText())
 *   );
 * });
 * return (
 *   <Window>
 *     <PlainTextEdit ref={plainTextRef} />
 *   </Window>
 *  );
 * };
 * Renderer.render(<App />);
 *
 * ```
 */
export interface PlainTextEditProps extends ViewProps<QPlainTextEditSignals> {
    text?: string;
    readOnly?: boolean;
    placeholderText?: string;
}
/**
 * @ignore
 */
export declare class RNPlainTextEdit extends QPlainTextEdit implements RNWidget {
    setProps(newProps: PlainTextEditProps, oldProps: PlainTextEditProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
