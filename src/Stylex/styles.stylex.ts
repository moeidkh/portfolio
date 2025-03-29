import * as stylex from "@stylexjs/stylex";
import { CompiledStyles, StyleXArray } from "@stylexjs/stylex/lib/StyleXTypes";

export class StylexUtils {
  constructor() {}

  static getStyles(
    styles: StyleXArray<undefined | null | CompiledStyles>,
    theme = undefined,
  ) {
    return stylex.props(theme, styles);
  }
}
