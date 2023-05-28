import { createContext } from "react";

export const Contextindex = createContext({
  slideIndex: 0,
  setSlideIndex: (i: number) => {},
});
export default Contextindex;
