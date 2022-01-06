import ReactReconciler, { Reconciler } from "react-reconciler";
import React from "react";
import { NodeWidget } from "@nodegui/nodegui";
import { RNComponent } from "../components/config";
declare type NodeGuiReconciler = Reconciler<RNComponent, any, Set<NodeWidget<any>>, any>;
export declare type RendererOptions = {
    onRender?: () => void;
    onInit?: (reconciler: NodeGuiReconciler) => void;
};
export declare class Renderer {
    static container?: ReactReconciler.FiberRoot;
    static forceUpdate(): void;
    static render(element: React.ReactNode, options?: RendererOptions): void;
}
export {};
