import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: classNames.ArgumentArray) {
  return twMerge(classNames(inputs));
}
