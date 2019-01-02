export const footer: string;
export const spinAround: string;

export type Block = "footer"
export type Others = "spinAround"
export type All = Block | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module