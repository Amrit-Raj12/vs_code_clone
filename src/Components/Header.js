import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { VscChromeRestore } from "react-icons/vsc";
import Logo from '../logo.png';

const Header = () => {
  return (
      <>
    <div className="header_box">
      <ul className="menu_lists">
        <li className="menu_list"><img className="menu_logo" src={Logo}/></li>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                File
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">New File<span className="item_sc">Ctrl+N</span></a>
                <a class="dropdown-item" href="#">New Window<span className="item_sc">Ctrl+Shift+N</span></a>
                <hr />
                <a class="dropdown-item" href="#">Open File...<span className="item_sc">Ctrl+O</span></a>
                <a class="dropdown-item" href="#">Open Folder...<span className="item_sc">Ctrl+K Ctrl+O</span></a>
                <a class="dropdown-item" href="#">Open Workspace...</a>
                <a class="dropdown-item" href="#">Open Recent</a>
                <hr />
                <a class="dropdown-item" href="#">Add Folder to Workspace...</a>
                <a class="dropdown-item" href="#">Save Workspace As...</a>
                <hr />
                <a class="dropdown-item" href="#">Save<span className="item_sc">Ctrl+S</span></a>
                <a class="dropdown-item" href="#">Save As...</a>
                <a class="dropdown-item" href="#">Save All <span className="item_sc">Ctrl+K S</span></a>
                <hr />
                <a class="dropdown-item" href="#">Auto Save</a>
                <a class="dropdown-item" href="#">Prefrences</a>
                <hr />
                <a class="dropdown-item" href="#">Revert File</a>
                <a class="dropdown-item" href="#">Close Editor<span className="item_sc">Ctrl+F4</span></a>
                <a class="dropdown-item" href="#">Close Folder<span className="item_sc">Ctrl+K F</span></a>
                <a class="dropdown-item" href="#">Close Window<span className="item_sc">Ctrl+W</span></a>
                <hr />
                <a class="dropdown-item" href="#">Exit</a>
               
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Edit
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Undo<span className="item_sc">Ctrl+Z</span></a>
                <a class="dropdown-item" href="#">Redo<span className="item_sc">Ctrl+Y</span></a>
                <hr />
                <a class="dropdown-item" href="#">Cut<span className="item_sc">Ctrl+X</span></a>
                <a class="dropdown-item" href="#">Copy<span className="item_sc">Ctrl+C</span></a>
                <a class="dropdown-item" href="#">Paste<span className="item_sc">Ctrl+V</span></a>
                <hr />
                <a class="dropdown-item" href="#">Find<span className="item_sc">Ctrl+F</span></a>
                <a class="dropdown-item" href="#">Replace<span className="item_sc">Ctrl+H</span></a>
                <hr />
                <a class="dropdown-item" href="#">Find in Files<span className="item_sc">Ctrl+Shift+F</span></a>
                <a class="dropdown-item" href="#">Replace in Files<span className="item_sc">Ctrl+Shift+H</span></a>
                <hr />
                <a class="dropdown-item" href="#">Toggle Line Comment<span className="item_sc">Ctrl+/</span></a>
                <a class="dropdown-item" href="#">Toggle Block Comment<span className="item_sc">Shift+Alt+A</span></a>
                <a class="dropdown-item" href="#">Emmet: Expand Abbreviation<span className="item_sc">Tab</span></a>
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Selection
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Select All<span className="item_sc">Ctrl+A</span></a>
                <a class="dropdown-item" href="#">Expand Selection<span className="item_sc">Shift+Alt+RightArrow</span></a>
                <a class="dropdown-item" href="#">Shrink Selection<span className="item_sc">Shift+Alt+LeftArrow</span></a>
                <hr />
                <a class="dropdown-item" href="#">Copy Line Up<span className="item_sc">Shift+Alt+UpArrow</span></a>
                <a class="dropdown-item" href="#">Copy Line Down<span className="item_sc">Shift+Alt+DownArrow</span></a>
                <a class="dropdown-item" href="#">Move Line Up<span className="item_sc">Alt+UpArrow</span></a>
                <a class="dropdown-item" href="#">Move Line Down<span className="item_sc">Alt+DownArrow</span></a>
                <a class="dropdown-item" href="#">Dublicate Selection</a>
                <hr />
                <a class="dropdown-item" href="#">Add Cursor Above<span className="item_sc">Ctrl+Alt+UpArrow</span></a>
                <a class="dropdown-item" href="#">Add Cursor Below<span className="item_sc">Ctrl+Alt+DownArrow</span></a>
                <a class="dropdown-item" href="#">Add Cursor to Line Ends<span className="item_sc">Shift+Alt+I</span></a>
                <a class="dropdown-item" href="#">Add Next Occurence<span className="item_sc">Ctrl+D</span></a>
                <a class="dropdown-item" href="#">Add Previous Occurence</a>
                <a class="dropdown-item" href="#">Select All Occurence<span className="item_sc">Ctrl+Shift+L</span></a>
                <hr />
                <a class="dropdown-item" href="#">Switch to Ctrl+Click for Multi-Cursor</a>
                <a class="dropdown-item" href="#">Column Slection Mode</a>
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                View
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Command Palette...<span className="item_sc">Ctrl+Shift+P</span></a>
                <a class="dropdown-item" href="#">Open View</a>
                <hr />
                <a class="dropdown-item" href="#">Appearance</a>
                <a class="dropdown-item" href="#">Editor Layout</a>
                <hr />
                <a class="dropdown-item" href="#">Explorer<span className="item_sc">Ctrl+Shift+E</span></a>
                <a class="dropdown-item" href="#">Search</a>
                <a class="dropdown-item" href="#">SCM<span className="item_sc">Ctrl+Shift+G</span></a>
                <a class="dropdown-item" href="#">Run<span className="item_sc">Ctrl+Shift+D</span></a>
                <a class="dropdown-item" href="#">Extentions<span className="item_sc">Ctrl+Shift+X</span></a>
                <hr />
                <a class="dropdown-item" href="#">Problems<span className="item_sc">Ctrl+Shift+M</span></a>
                <a class="dropdown-item" href="#">Output<span className="item_sc">Ctrl+Shift+U</span></a>
                <a class="dropdown-item" href="#">Debug Console<span className="item_sc">Ctrl+Shift+Y</span></a>
                <a class="dropdown-item" href="#">Terminal<span className="item_sc">Ctrl+`</span></a>
                <hr />
                <a class="dropdown-item" href="#">Toggle Word Wrap<span className="item_sc">Alt+Z</span></a>
                <a class="dropdown-item" href="#">Show Minimap</a>
                <a class="dropdown-item" href="#">Show Breadcrumbs</a>
                <a class="dropdown-item" href="#">Render Whitespace</a>
                <a class="dropdown-item" href="#">Render Control Characters</a>
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Go
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Back<span className="item_sc">Alt+LeftArrow</span></a>
                <a class="dropdown-item" href="#">Forward<span className="item_sc">Alt+RightArrow</span></a>
                <a class="dropdown-item" href="#">Last Edit Location<span className="item_sc">Ctrl+K Ctrl+Q</span></a>
                <hr />
                <a class="dropdown-item" href="#">Switch Editor</a>
                <a class="dropdown-item" href="#">Switch Group</a>
                <hr />
                <a class="dropdown-item" href="#">Go to Files<span className="item_sc">Ctrl+P</span></a>
                <a class="dropdown-item" href="#">Go to Symbol in Workspace...<span className="item_sc">Ctrl+T</span></a>
                <hr />
                <a class="dropdown-item" href="#">Go to Symbol Editor</a>
                <a class="dropdown-item" href="#">Go to Definition<span className="item_sc">F12</span></a>
                <a class="dropdown-item" href="#">Go to Declration</a>
                <a class="dropdown-item" href="#">Go to Type Definition</a>
                <a class="dropdown-item" href="#">Go to Implementations<span className="item_sc">Ctrl+F12</span></a>
                <a class="dropdown-item" href="#">Go to References<span className="item_sc">Shift+F12</span></a>
                <hr />
                <a class="dropdown-item" href="#">Go to Line/Column...<span className="item_sc">Ctrl+G</span></a>
                <a class="dropdown-item" href="#">Go to Bracket<span className="item_sc">Ctrl+Shift+\</span></a>
                <hr />
                <a class="dropdown-item" href="#">Next Problem<span className="item_sc">F8</span></a>
                <a class="dropdown-item" href="#">Previous Problem<span className="item_sc">Shift+F8</span></a>
                <hr />
                <a class="dropdown-item" href="#">Next Change<span className="item_sc">Alt+F3</span></a>
                <a class="dropdown-item" href="#">Previous Change<span className="item_sc">Shift+Alt+F3</span></a>
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Run
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Start Debugging<span className="item_sc">F5</span></a>
                <a class="dropdown-item" href="#">Run Without Debugging<span className="item_sc">Ctrl+F5</span></a>
                <a class="dropdown-item" href="#">Stop Debugging<span className="item_sc">Shift+F5</span></a>
                <a class="dropdown-item" href="#">Restart Debugging<span className="item_sc">Ctrl+Shift+F5</span></a>
                <hr />
                <a class="dropdown-item" href="#">Open Configurations</a>
                <a class="dropdown-item" href="#">Add Configuration...</a>
                <hr />
                <a class="dropdown-item" href="#">Step Over<span className="item_sc">F10</span></a>
                <a class="dropdown-item" href="#">Step Into<span className="item_sc">F11</span></a>
                <a class="dropdown-item" href="#">Step Out<span className="item_sc">Shift+F11</span></a>
                <a class="dropdown-item" href="#">Continue<span className="item_sc">F5</span></a>
                <hr />
                <a class="dropdown-item" href="#">Toggle Breakpoint<span className="item_sc">F9</span></a>
                <a class="dropdown-item" href="#">New Breakpoint</a>
                <hr />
                <a class="dropdown-item" href="#">Enable All Breakpoints</a>
                <a class="dropdown-item" href="#">Desable All Breakpoints</a>
                <a class="dropdown-item" href="#">Remove All Breakpoints</a>
                <hr />
                <a class="dropdown-item" href="#">Install Additional Debuggers...</a>
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Terminal
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">New Terminal<span className="item_sc">Ctrl+Shift+`</span></a>
                <a class="dropdown-item" href="#">Split Terminal<span className="item_sc">Ctrl+Shift+5</span></a>
                <hr />
                <a class="dropdown-item" href="#">Run Task...</a>
                <a class="dropdown-item" href="#">Run Build Task...<span className="item_sc">Ctrl+Shift+B</span></a>
                <a class="dropdown-item" href="#">Run Active File</a>
                <a class="dropdown-item" href="#">Run Selected Text</a>
                <hr />
                <a class="dropdown-item" href="#">Show Running Tasks...</a>
                <a class="dropdown-item" href="#">Restart Running Task...</a>
                <a class="dropdown-item" href="#">Terminate Task...</a>
                <hr />
                <a class="dropdown-item" href="#">Configure Tasks...</a>
                <a class="dropdown-item" href="#">Configure Default Build Task...</a>
            </div>
        </div>
        <div class="dropdown">
            <p class="menu_list" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Help
            </p>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Welcome</a>
                <a class="dropdown-item" href="#">Getting Start</a>
                <a class="dropdown-item" href="#">Interactive Playground</a>
                <a class="dropdown-item" href="#">Documentation</a>
                <a class="dropdown-item" href="#">Release Notes</a>
                <hr />
                <a class="dropdown-item" href="#">Keyboard Shortcuts Reference<span className="item_sc">Ctrl+K Ctrl+R</span></a>
                <a class="dropdown-item" href="#">Introductory Videos</a>
                <a class="dropdown-item" href="#">Tips and Tricks</a>
                <hr />
                <a class="dropdown-item" href="#">Join Us on Twitter</a>
                <a class="dropdown-item" href="#">Search Feature Requests</a>
                <a class="dropdown-item" href="#">Report Issue</a>
                <hr />
                <a class="dropdown-item" href="#">View Licence</a>
                <a class="dropdown-item" href="#">Privacy Statement</a>
                <hr />
                <a class="dropdown-item" href="#">Toggle Developer Tools<span className="item_sc">Ctrl+Shift+I</span></a>
                <a class="dropdown-item" href="#">Open Process Explorer</a>
                <hr />
                <a class="dropdown-item" href="#">Check Updates</a>
                <hr />
                <a class="dropdown-item" href="#">About</a>
            </div>
        </div>
        <div className="menu_heading">
          <p>Visual Studio Code Clone</p>
      </div>
      </ul>
      
      <div className="menu_icons">
        <VscChromeMinimize  className="mini_icon"/>
        <VscChromeRestore className="max_icon" />
        <VscChromeClose className="close_icon" />
      </div>
    </div>

</>
  );
};

export default Header;
