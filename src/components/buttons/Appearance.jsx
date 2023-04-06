import { IconMoon, IconSun } from "../icons/AppearanceIcons";
import { makeDarkOnDesk, makeLightOnDesk } from "../functions/appearance/appearance-switch";

const Appearance = function () {
  return (
    <>
      <button className="btnDark" onClick={makeDarkOnDesk}>
        <IconMoon />
      </button>

      <button className="btnLight hidden" onClick={makeLightOnDesk}>
        <IconSun />
      </button>
    </>
  );
};

export default Appearance;