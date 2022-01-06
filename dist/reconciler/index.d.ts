import Reconciler from "react-reconciler";
import { NodeWidget } from "@nodegui/nodegui";
import { RNComponent } from "../components/config";
export declare type AppContainer = Set<NodeWidget<any>>;
export declare const appContainer: AppContainer;
declare const _default: Reconciler.Reconciler<RNComponent, any, AppContainer, any>;
export default _default;
