import { NodeWidget, QColor, QColorDialog, QColorDialogSignals } from "@nodegui/nodegui";
import { ColorDialogOption } from "@nodegui/nodegui/dist/lib/QtWidgets/QColorDialog";
import { RNWidget } from "../config";
import { DialogProps } from "../Dialog/RNDialog";
import { DialogOption } from "../FileDialog/RNFileDialog";
export interface ColorDialogProps extends DialogProps<QColorDialogSignals> {
    currentColor?: QColor;
    option?: DialogOption<ColorDialogOption>;
    options?: ColorDialogOption;
}
export declare class RNColorDialog extends QColorDialog implements RNWidget {
    setProps(newProps: ColorDialogProps, oldProps: ColorDialogProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
