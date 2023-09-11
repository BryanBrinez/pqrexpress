import React from "react";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BiMessageAltDetail, BiLogOut } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="w-screen h-14 p-3 fixed bottom-0 text-black bg-colorOne">
      
        <div className="flex items-center justify-between">
          <AiOutlineUserAdd size={32}></AiOutlineUserAdd>
          <BiMessageAltDetail size={32}></BiMessageAltDetail>

          <BiLogOut size={32}></BiLogOut>
        </div>
      
    </div>
  );
}
