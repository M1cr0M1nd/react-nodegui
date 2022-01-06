/// <reference types="node" />
import { QLabel, QPixmap, AspectRatioMode, NodeWidget, QSize, TransformationMode } from "@nodegui/nodegui";
import { TextProps } from "../Text/RNText";
import { RNWidget } from "../config";
/**
 * The Image component provides the ability to render images. It is based on
 *  [NodeGui's QPixmap](https://docs.nodegui.org/docs/api/generated/classes/qpixmap).
 * ## Example
 * ```javascript
 * import React from "react";
 * import { Renderer, Image, Window } from "@nodegui/react-nodegui";
 * import { AspectRatioMode } from "@nodegui/nodegui";
 * const App = () => {
 *   return (
 *     <Window>
 *       <Image
 *         aspectRatioMode={AspectRatioMode.KeepAspectRatio}
 *         size={{ height: 200, width: 150 }}
 *         src="https://place-hold.it/200x150"
 *       ></Image>
 *     </Window>
 *   );
 * };
 * Renderer.render(<App />);
 * ```
 */
export interface ImageProps extends TextProps {
    src?: string;
    aspectRatioMode?: AspectRatioMode;
    transformationMode?: TransformationMode;
    buffer?: Buffer;
}
/**
 * @ignore
 */
export declare class RNImage extends QLabel implements RNWidget {
    setProps(newProps: ImageProps, oldProps: ImageProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
    originalPixmap?: QPixmap;
    aspectRatioMode?: AspectRatioMode;
    transformationMode?: TransformationMode;
    setPixmap: (pixmap: QPixmap) => void;
    setAspectRatioMode(mode: AspectRatioMode): void;
    setTransformationMode(mode: TransformationMode): void;
    scalePixmap(size: QSize): void;
}
