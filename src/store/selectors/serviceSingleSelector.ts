// selector.js
import { selector } from "recoil";
import { serviceData } from "../atoms/serviceSingleAtom";

export const serviceSelector = selector({
  key: "serviceTitleSelector",
  get: ({ get }) => {
    return get(serviceData);
  },
});
