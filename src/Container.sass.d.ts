export const container: string;
export const isFluid: string;
export const isWidescreen: string;
export const isFullhd: string;
export const spinAround: string;

export type Block = "container"
export type Modifiers = "isFluid" | "isWidescreen" | "isFullhd"
export type Others = "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module