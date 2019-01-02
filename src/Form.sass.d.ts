export const file: string;
export const select: string;
export const isMultiple: string;
export const isLoading: string;
export const control: string;
export const spinAround: string;
export const input: string;
export const textarea: string;
export const fileCta: string;
export const fileName: string;
export const isFocused: string;
export const isActive: string;
export const isHovered: string;
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
export const isSmall: string;
export const isMedium: string;
export const isLarge: string;
export const isFullwidth: string;
export const isInline: string;
export const isRounded: string;
export const isStatic: string;
export const hasFixedSize: string;
export const checkbox: string;
export const checkboxLabel: string;
export const radio: string;
export const radioLabel: string;
export const isDisabled: string;
export const fileIcon: string;
export const fa: string;
export const hasName: string;
export const isEmpty: string;
export const isBoxed: string;
export const fileLabel: string;
export const isCentered: string;
export const isRight: string;
export const fileInput: string;
export const label: string;
export const help: string;
export const field: string;
export const hasAddons: string;
export const button: string;
export const isExpanded: string;
export const hasAddonsCentered: string;
export const hasAddonsRight: string;
export const hasAddonsFullwidth: string;
export const isGrouped: string;
export const isGroupedCentered: string;
export const isGroupedRight: string;
export const isGroupedMultiline: string;
export const isHorizontal: string;
export const fieldLabel: string;
export const isNormal: string;
export const fieldBody: string;
export const isNarrow: string;
export const hasIcon: string;
export const icon: string;
export const hasIconRight: string;
export const hasIconsLeft: string;
export const hasIconsRight: string;
export const isLeft: string;
export const form: string;

export type Block = "file" | "select" | "control" | "input" | "textarea" | "checkbox" | "radio" | "fa" | "label" | "help" | "field" | "button" | "icon" | "form"
export type Modifiers = "isMultiple" | "isLoading" | "isFocused" | "isActive" | "isHovered" | "isWhite" | "isBlack" | "isLight" | "isDark" | "isPrimary" | "isLink" | "isInfo" | "isSuccess" | "isWarning" | "isDanger" | "isSmall" | "isMedium" | "isLarge" | "isFullwidth" | "isInline" | "isRounded" | "isStatic" | "hasFixedSize" | "isDisabled" | "hasName" | "isEmpty" | "isBoxed" | "isCentered" | "isRight" | "hasAddons" | "isExpanded" | "hasAddonsCentered" | "hasAddonsRight" | "hasAddonsFullwidth" | "isGrouped" | "isGroupedCentered" | "isGroupedRight" | "isGroupedMultiline" | "isHorizontal" | "isNormal" | "isNarrow" | "hasIcon" | "hasIconRight" | "hasIconsLeft" | "hasIconsRight" | "isLeft"
export type Others = "spinAround" | "fileCta" | "fileName" | "checkboxLabel" | "radioLabel" | "fileIcon" | "fileLabel" | "fileInput" | "fieldLabel" | "fieldBody"
export type All = Block | Modifiers | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module