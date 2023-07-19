import { Dispatch, SetStateAction } from "react";

export function cleanTypeEvent(
  setTyped: Dispatch<SetStateAction<string>>,
  typed: string,
  event: KeyboardEvent,
) {
  // Manually handle backspace
  if (event.key === "Backspace") {
    if (event.ctrlKey) {
      // Remove the entire current word
      const words = typed.split(" ");
      words.pop();
      setTyped(words.join(" "));
    } else {
      // Manually remove the last character from the string
      setTyped((prevTyped) => prevTyped.substring(0, prevTyped.length - 1));
    }
  }

  // Block ALL special keys that are NOT handled, e.g. Return, Control, Shift
  // NOTE: We don't have to manually handle Shift, as it is already applied to the character.
  if (event.key.length > 1) {
    return;
  }

  setTyped((prevTyped) => prevTyped + event.key);
}
