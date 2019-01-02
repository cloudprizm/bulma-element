export const content: string;
export const isLowerAlpha: string;
export const isLowerRoman: string;
export const isUpperAlpha: string;
export const isUpperRoman: string;
export const isSmall: string;
export const isMedium: string;
export const isLarge: string;
export const spinAround: string;

export type Block = "content"
export type Modifiers = "isLowerAlpha" | "isLowerRoman" | "isUpperAlpha" | "isUpperRoman" | "isSmall" | "isMedium" | "isLarge"
export type Others = "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module