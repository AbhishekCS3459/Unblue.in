// selector.js
import { selector } from "recoil";
import { countState } from "../atoms/counter";

export const countStateLength = selector({
  key: "countStateLength",
  get: ({ get }) => {
    const count = get(countState);
    return count.toString().length;
  },
});
