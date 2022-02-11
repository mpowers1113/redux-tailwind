import React from 'react';

const Navbar = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05asdf</div>
        <div>06</div>
        <div>07qq</div>
        <div>089808</div>
        <div>09</div>
      </div>
      <div className="flex justify-between align-middle items-center flex-row">
        <div className="col">2</div>
        <div className="col">2</div>
        <div className="col">2</div>
      </div>
      <div className="flex justify-center items-center align-middle flex-col">
        <input type="text" className="text" />
        <input type="text" className="text" />
        <input type="text" className="text" />
        <input type="text" className="text" />
      </div>
    </div>
  );
};

export default Navbar;
