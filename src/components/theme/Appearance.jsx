import { IconMoon, IconSun } from "../icons/AppearanceIcons";
import { makeDark, makeLight } from "../../functions/switch-appearance";

const Appearance = function () {
  return (
    <>
      <button className="btnDark" onClick={makeDark}>
        <IconMoon />
      </button>

      <button className="btnLight hidden" onClick={makeLight}>
        <IconSun />
      </button>
    </>
  );
};

export default Appearance;
