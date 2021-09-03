import React from 'react';
import { VscNewFile } from "react-icons/vsc";
import { VscGoToFile } from "react-icons/vsc";
import { VscFolderOpened } from "react-icons/vsc";
import { VscRepoClone } from "react-icons/vsc";
import { VscSymbolColor } from "react-icons/vsc";
import { VscSymbolEvent } from "react-icons/vsc";
import { VscLightbulb } from "react-icons/vsc";
import { VscMortarBoard } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { VscEllipsis } from "react-icons/vsc";
import { VscSplitHorizontal } from "react-icons/vsc";
import Logo from '../logo.png';

const Welcome = () => {
    return (
        <div className="container_box">
            <div className="upper_box">
                <div className="U_heading">
                <img className="U_logo" src={Logo}/>
                <p>Getting Started<VscClose className="U_icon" /></p>
                </div>
                <div className="UL_box">
                <VscSplitHorizontal className="UL_icon"/>
                <span>  </span>
                <VscEllipsis className="UL_icon" />
                </div>
            </div>
            <div className="box_heading">
                <h3>Visual Studio Code Clone</h3>
                <h4>Editing envolved</h4>
            </div>
            <div className="start_box">
                <h6>Start</h6>
                <div className="command_box">
                  <p> <VscNewFile className="W_icon" /> New File</p>
                  <p> <VscGoToFile className="W_icon" /> Open File...</p>
                  <p> <VscFolderOpened className="W_icon" /> Open Folder...</p>
                  <p> <VscRepoClone className="W_icon" /> Clone Git Repository...</p>
                  <p> <VscSymbolColor className="W_icon" /> Run a Command...</p>
                </div>
            </div>
            <br />
            <div className="recent_box">
                <h6>Recent</h6>
                <div className="path_box">
                  <p>code_clone <span> D:\VSCode_clone</span></p>
                  <p>src <span> D:\VSCode_clone\code_clone</span></p>
                  <p>Test <span> C:\users\Amrit Raj\ Desktop</span></p>
                  <p>Desktop<span> C:\users\Amrit Raj</span></p>
                  <p>More...</p>
                </div>
            </div>
            <div className="Gstart_box">
                <h6>Getting Started</h6>
                <div className="prog_box">
                    <div className="btm_box">
                        <p><VscSymbolEvent className="G_icon" />Customize Your Setup</p>
                    </div>
                </div>
                <div className="prog_box2">
                    <div className="btm_box2">
                        <p><VscLightbulb className="G_icon" />Learn the Fundamentals</p>
                    </div>
                </div>
                <div className="prog_box3">
                    <div className="btm_box3">
                        <p><VscMortarBoard className="G_icon" />Boost your Productivity</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
