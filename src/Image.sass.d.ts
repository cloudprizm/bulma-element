export const image: string;
export const isSquare: string;
export const is1By1: string;
export const is5By4: string;
export const is4By3: string;
export const is3By2: string;
export const is5By3: string;
export const is16By9: string;
export const is2By1: string;
export const is3By1: string;
export const is4By5: string;
export const is3By4: string;
export const is2By3: string;
export const is3By5: string;
export const is9By16: string;
export const is1By2: string;
export const is1By3: string;
export const isRounded: string;
export const is16X16: string;
export const is24X24: string;
export const is32X32: string;
export const is48X48: string;
export const is64X64: string;
export const is96X96: string;
export const is128X128: string;
export const spinAround: string;

export type Block = "image"
export type Modifiers = "isSquare" | "isRounded"
export type Others = "is1By1" | "is5By4" | "is4By3" | "is3By2" | "is5By3" | "is16By9" | "is2By1" | "is3By1" | "is4By5" | "is3By4" | "is2By3" | "is3By5" | "is9By16" | "is1By2" | "is1By3" | "is16X16" | "is24X24" | "is32X32" | "is48X48" | "is64X64" | "is96X96" | "is128X128" | "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module