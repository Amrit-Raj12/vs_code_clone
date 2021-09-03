import React from "react";
import { VscFiles } from "react-icons/vsc";
import { VscSearch } from "react-icons/vsc";
import { VscSourceControl } from "react-icons/vsc";
import { VscDebugAlt2 } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";


const Leftbar = () => {
  return (
    <div>
      <aside>
        <VscFiles className="Lfiles_icon" />
        <br />
        <VscSearch className="Lsearch_icon" />
        <br />
        <VscSourceControl className="Lsource_icon" />
        <br />
        <VscDebugAlt2 className="Ldebug_icon" />
        <br />
        <VscExtensions className="Lexten_icon" />
        <br />
        <VscAccount className="Lprof_icon" />
        <br />
        <VscGear className="Lset_icon" />
      </aside>
    </div>
  );
};

export default Leftbar;
