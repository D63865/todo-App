import React from "react";
import { Link } from "react-router-dom";

export default function Logobutton() {
  return (
    <>
      <div class="flex h-screen justify-center items-center bg-teal-400 drop-shadow-lg ">
        <div className="text-center">
          <Link to="/Header">
            <button
              type="button"
              className="  rounded-md text-sm font-medium text-white  hover:text-gray-900 hover:scale-110 "
            >
              <span>
                {
                  <img
                    src="image/logo1.png"
                    alt="Logo"
                    className="rounded-full h-20 w-20 "
                  />
                }
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
