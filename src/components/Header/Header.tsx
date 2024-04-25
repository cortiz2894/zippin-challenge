import { FC } from "react";
import * as React from "react";
import logo from '/logo-2.svg'

const Header: FC = () => {

  return (
    <div className='mb-5 px-6 flex justify-end'>
        <img src={logo} className='w-36'/>
    </div>
  );
};

export default Header;



               