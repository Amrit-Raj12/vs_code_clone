import React from 'react';
import { VscError } from "react-icons/vsc";
import { VscWarning } from "react-icons/vsc";
import { VscFeedback } from "react-icons/vsc";
import { VscBell } from "react-icons/vsc";

const Footer = () => {
    return (
        <div className="footer_box">
            <div className="F_box">
                <VscError className="F_icon" />
                0
                <VscWarning className="F_icon"  />
                0
                <VscFeedback className="FR_icon"  />

                <VscBell className="FR_icon"  />
            </div>
        </div>
    )
}

export default Footer
