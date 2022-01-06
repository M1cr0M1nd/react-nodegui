/// <reference types="react" />
import { NodeWidget, Component } from "@nodegui/nodegui";
import { Fiber } from "react-reconciler";
import { AppContainer } from "../reconciler";
declare type UpdatePayload = any;
export interface RNProps {
}
export declare abstract class RNComponent {
    static tagName: string;
    abstract setProps(newProps: RNProps, oldProps: RNProps): void;
    abstract appendInitialChild(child: Component): void;
    abstract appendChild(child: Component): void;
    abstract insertBefore(child: Component, beforeChild: Component): void;
    abstract removeChild(child: Component): void;
}
export declare abstract class RNWidget extends NodeWidget<any> implements RNComponent {
    static tagName: string;
    abstract setProps(newProps: RNProps, oldProps: RNProps): void;
    abstract appendInitialChild(child: NodeWidget<any>): void;
    abstract appendChild(child: NodeWidget<any>): void;
    abstract insertBefore(child: NodeWidget<any>, beforeChild: NodeWidget<any>): void;
    abstract removeChild(child: NodeWidget<any>): void;
}
export declare abstract class ComponentConfig {
    abstract tagName: string;
    getContext(parentContext: any, rootInstance: AppContainer): {};
    abstract shouldSetTextContent(nextProps: RNProps): boolean;
    abstract createInstance(newProps: RNProps, rootInstance?: AppContainer, context?: any, workInProgress?: Fiber): RNComponent;
    finalizeInitialChildren(instance: RNComponent, newProps: RNProps, rootContainerInstance: AppContainer, context: any): boolean;
    commitMount(instance: RNComponent, newProps: RNProps, internalInstanceHandle: any): void;
    prepareUpdate(instance: RNComponent, oldProps: RNProps, newProps: RNProps, rootContainerInstance: AppContainer, hostContext: any): UpdatePayload;
    abstract commitUpdate(instance: RNComponent, updatePayload: any, oldProps: RNProps, newProps: RNProps, finishedWork: Fiber): void;
}
declare type ReactNodeGuiTag<P> = string | React.ComponentType<P>;
export declare const getComponentByTagName: (tagName: string) => ComponentConfig;
export declare function registerComponent<Props>(config: ComponentConfig): ReactNodeGuiTag<Props>;
export {};
