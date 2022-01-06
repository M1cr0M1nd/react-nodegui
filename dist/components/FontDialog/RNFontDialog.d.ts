import { FontDialogOption, NodeWidget, QFont, QFontDialog, QFontDialogSignals } from "@nodegui/nodegui";
import { RNWidget } from "../config";
import { DialogProps } from "../Dialog/RNDialog";
import { DialogOption } from "../FileDialog/RNFileDialog";
export interface FontDialogProps extends DialogProps<QFontDialogSignals> {
    currentFont?: QFont;
    option?: DialogOption<FontDialogOption>;
    options?: FontDialogOption;
}
export declare class RNFontDialog extends QFontDialog implements RNWidget {
    setProps(newProps: FontDialogProps, oldProps: FontDialogProps): void;
    appendInitialChild(child: NodeWidget<any>): void;
    appendChild(child: NodeWidget<any>): void;
    insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    removeChild(child: NodeWidget<any>): void;
    static tagName: string;
}
