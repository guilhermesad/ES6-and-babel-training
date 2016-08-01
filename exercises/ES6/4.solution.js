import { strawberry, raspberry, plum } from "./fruits";
import blend from "./blend";

export default function() {
  return blend(strawberry, raspberry, plum);
};
