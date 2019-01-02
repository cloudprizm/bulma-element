export const box: string;
export const spinAround: string;

export type Block = "box"
export type Others = "spinAround"
export type All = Block | Others
export type BEM = Record<All, boolean>
declare let module: Record<All, string>
export default module