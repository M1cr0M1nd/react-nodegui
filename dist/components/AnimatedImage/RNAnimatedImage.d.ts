/// <reference types="node" />
import { QLabel, NodeWidget, QSize } from "@nodegui/nodegui";
import { TextProps } from "../Text/RNText";
import { RNWidget } from "../config";
export interface AnimatedImageProps extends TextProps {
    src?: string;
    buffer?: Buffer;
}
/**
 * @ignore
 */
export declare class RNAnimatedImage extends QLabel implements RNWidget {
    setProps(newProps: AnimatedImageProps, oldProps: AnimatedImageProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
    scaleMovie(size: QSize): void;
}
