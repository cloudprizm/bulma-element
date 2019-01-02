export const tags: string;
export const tag: string;
export const hasAddons: string;
export const isCentered: string;
export const isRight: string;
export const isWhite: string;
export const isBlack: string;
export const isLight: string;
export const isDark: string;
export const isPrimary: string;
export const isLink: string;
export const isInfo: string;
export const isSuccess: string;
export const isWarning: string;
export const isDanger: string;
export const isMedium: string;
export const isLarge: string;
export const icon: string;
export const isDelete: string;
export const isRounded: string;
export const spinAround: string;

export type Block = "tags" | "tag" | "icon"
export type Modifiers = "hasAddons" | "isCentered" | "isRight" | "isWhite" | "isBlack" | "isLight" | "isDark" | "isPrimary" | "isLink" | "isInfo" | "isSuccess" | "isWarning" | "isDanger" | "isMedium" | "isLarge" | "isDelete" | "isRounded"
export type Others = "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module