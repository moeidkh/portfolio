// components/ResetProvider.jsx
import * as stylex from "@stylexjs/stylex";
import { resetStyles } from "../Stylex/cssReset.stylex";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ResetProvider({ children }: Props) {
  return <div {...stylex.props(resetStyles.base)}>{children}</div>;
}
