import { QSlider, NodeWidget, QSliderSignals, TickPosition, Orientation } from '@nodegui/nodegui';
import { ViewProps } from '../View/RNView';
import { RNWidget } from '../config';
export interface SliderProps extends ViewProps<QSliderSignals> {
    tickInterval?: number;
    tickPosition?: TickPosition;
    orientation?: Orientation;
    minimum?: number;
    maximum?: number;
    invertedAppearance?: boolean;
    invertedControls?: boolean;
    pageStep?: number;
    singleStep?: number;
    isSliderDown?: boolean;
    sliderPosition?: number;
    hasTracking?: boolean;
    value?: number;
}
/**
 * @ignore
 */
export declare class RNSlider extends QSlider implements RNWidget {
    setProps(newProps: SliderProps, oldProps: SliderProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
