export const title: string;
export const subtitle: string;
export const tag: string;
export const highlight: string;
export const isSpaced: string;
export const is1: string;
export const is2: string;
export const is3: string;
export const is4: string;
export const is5: string;
export const is6: string;
export const is7: string;
export const spinAround: string;

export type Block = "title" | "subtitle" | "tag" | "highlight"
export type Modifiers = "isSpaced"
export type Others = "is1" | "is2" | "is3" | "is4" | "is5" | "is6" | "is7" | "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module