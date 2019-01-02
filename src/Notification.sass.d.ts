export const notification: string;
export const button: string;
export const dropdownItem: string;
export const title: string;
export const subtitle: string;
export const content: string;
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
export const isDelete: string;
export const spinAround: string;

export type Block = "notification" | "button" | "title" | "subtitle" | "content"
export type Modifiers = "isWhite" | "isBlack" | "isLight" | "isDark" | "isPrimary" | "isLink" | "isInfo" | "isSuccess" | "isWarning" | "isDanger" | "isDelete"
export type Others = "dropdownItem" | "spinAround"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module