export const icon: string;
export const isSmall: string;
export const isMedium: string;
export const isLarge: string;
export const spinAround: string;

export type Block = "icon"
export type Modifiers = "isSmall" | "isMedium" | "isLarge"
export type Others = "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module