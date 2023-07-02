import React from "react";

export default function Navbar() {
    return (
        <div>
            {/* navbar starts here */}
            <div className="p-2 w-[95%] mx-auto bg-white">
                <div className="flex flex-row justify-between place-content-center items-center md:gap-9">
                    <img src="https://www.goindiastocks.com/Content/assets/images/logewithname.png" alt="logo" width={100} />
                    <div className="md:grow ml-[2.5rem]">
                        <input type="search" className="md:bg-slate-400 rounded-[.2rem] bg-green-500 h-11 md:rounded-md p-4 text-md outline-none md:w-[74%] w-123" />
                        <span>&#128269</span>
                    </div>
                    <div className="decoration-none">
                        <ul className="md:flex gap-6 flex-row flex-wrap cursor-pointer font-semibold hidden">
                            <li className="">
                                <a href="#">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="border border-black py-2 px-5 b-white rounded-md ">SIGN IN</a>
                            </li>
                            <li>
                                <a href="#" className="border border-black py-2 px-5 b-white rounded-md">SIGN UP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* navbar ends here */}

            {/* adv. starts here */}
            <div className="w-full bg-black h-auto flex flex-col md:flex-row justify-between flex-wrap p-2 items-center text-yellow-50">
                <div className="flex flex-wrap flex-row justify-evenly gap-7">
                    <p>NIFTY BANK</p>
                    <p className="text-red-400">41,599.40</p>
                    <p className="text-green-500">0.01%</p>
                </div>
                <div className="flex flex-wrap justify-between gap-7 md:flex-row">
                    <p>NIFTY BANK</p>
                    <p className="text-red-400">41,599.40</p>
                    <p className="text-green-500">0.01%</p>
                </div>
                <div className="flex flex-wrap justify-between gap-7 md:flex-row">
                    <p>NIFTY BANK</p>
                    <p className="text-red-400">41,599.40</p>
                    <p className="text-green-500">0.01%</p>
                </div>
                <div className="flex flex-wrap justify-between gap-6 md:flex-row">
                    <p>NIFTY BANK</p>
                    <p className="text-red-400">41,599.40</p>
                    <p className="text-green-500">0.01%</p>
                </div>
                <div className="flex justify-between gap-7 md:flex-row">
                    <p>NIFTY BANK</p>
                    <p className="text-red-400">41,599.40</p>
                    <p className="text-green-500">0.01%</p>
                </div>
            </div>

            {/* adv ends here */}

            {/* company starts here */}

            <div className="w-full bg-sky-100 mx-auto py-3">
                <p className="text-xl text-red-600 uppercase pl-11 ">featured companies</p>
                <div className="flex flex-row  p-1 justify-between place-content-center w-[95%] mx-auto">
                    <div className="">
                        <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/caprinew1.jpg" alt="" className="" />
                    </div>
                    <div className="">
                        <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/fino.png"  alt="" />
                    </div>
                    <div className="">
                        <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/meghmani.png"  alt="" />
                    </div>
                    <div className="">
                        <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/ganeshhousing.jpg"  alt="" />
                    </div>
                    <div className="">
                        <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/D1edit.jpg"  alt="" />
                    </div>
                    <div className="">
                        <img src="https://s3.ap-south-1.amazonaws.com/goindiaconnect/UPLOADS/dtpatten1.png"  alt="" />
                    </div>



                </div>
            </div>

            {/* company ends here */}
        </div>
    )
}