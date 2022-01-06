import { QLabel, NodeWidget, QLabelSignals, TextInteractionFlag } from '@nodegui/nodegui';
import { ViewProps } from '../View/RNView';
import { RNWidget } from '../config';
export interface TextProps extends ViewProps<QLabelSignals> {
    children?: string | number | Array<string | number>;
    wordWrap?: boolean;
    scaledContents?: boolean;
    openExternalLinks?: boolean;
    textInteractionFlags?: TextInteractionFlag;
}
/**
 * @ignore
 */
export declare const setTextProps: (widget: RNText, newProps: TextProps, oldProps: TextProps) => void;
/**
 * @ignore
 */
export declare class RNText extends QLabel implements RNWidget {
    setProps(newProps: TextProps, oldProps: TextProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
