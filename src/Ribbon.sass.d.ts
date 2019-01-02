export const hasRibbon: string;
export const hasRibbonLeft: string;
export const ribbon: string;
export const hasRibbonBottom: string;
export const isWhite: string;
export const isOutlined: string;
export const isBlack: string;
export const isLight: string;
export const isDark: string;
export const isPrimary: string;
export const isLink: string;
export const isInfo: string;
export const isSuccess: string;
export const isWarning: string;
export const isDanger: string;
export const isSmall: string;
export const isMedium: string;
export const isLarge: string;
export const spinAround: string;

export type Block = "ribbon"
export type Modifiers = "hasRibbon" | "hasRibbonLeft" | "hasRibbonBottom" | "isWhite" | "isOutlined" | "isBlack" | "isLight" | "isDark" | "isPrimary" | "isLink" | "isInfo" | "isSuccess" | "isWarning" | "isDanger" | "isSmall" | "isMedium" | "isLarge"
export type Others = "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module