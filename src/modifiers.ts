import StaticCSS, { Modifiers } from './modifiers.sass'
import { getMonoid } from 'fp-ts/lib/Record'
import { Semigroup } from 'fp-ts/lib/Semigroup'

export type WithModifiers<K> = Record<keyof K | Modifiers, boolean>

export const semigroupCSS: Semigroup<string> = {
  concat: (x, y) => `${y} ${x}`
}
export const cssMonoid = getMonoid(semigroupCSS)

// to make it variadic
// const M = getDictionaryMonoid(semigroupCSS)
// const result = fold(M)([dictA, dictB, ...])

export const combineCSSDefinitions =
  <D1, D2>(dictA: Record<keyof D1, string>, dictB: Record<keyof D2, string>) =>
    cssMonoid.concat(dictA, dictB) as Record<keyof (D1 & D2), string>

export const combineCSSWithModifiers =
  <K>(dict: Record<keyof K, string>, modifiers: Record<Modifiers, string> = StaticCSS) =>
    combineCSSDefinitions(dict, modifiers)

export const extendVariantLookup = combineCSSWithModifiers

// TODO implement Block = "highlight" | "block" | "loader" | "heading" | "number"