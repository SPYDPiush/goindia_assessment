import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Sidebar.css'; // Make sure to create the CSS file for the sidebar styles

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="side-icon" onClick={toggleSidebar}>
                <FaBars />
            </div>
            {/* Your sidebar content goes here */}
            <div className="bg-blue-800 text-white w-[90%]">
                <div className="w-[95%] mx-auto cursor-pointer">
                    <div className="p-2 flex flex-row justify-between">
                        <div className="">
                            <a href="#">A</a>
                        </div>
                        <div className="">
                            Hello, User
                        </div>
                        <div className="">
                            icon
                        </div>
                    </div>

                    <div>
                        <hr />
                    </div>
                    <div className="hover:green-200 p-2 flex flex-row justify-between">
                        <p className="">
                            a
                        </p>
                        <p className="">
                            Disscussion Fourm
                        </p>
                        <p className="">
                            icon
                        </p>
                    </div>
                    <div className="hover:green-200 p-2 flex flex-row justify-between">
                        <p className="">
                            a
                        </p>
                        <p className="">
                            Market Stories
                        </p>
                        <p className="">
                            icon
                        </p>
                    </div>
                    <div className="text-center">
                        <p>
                            Sentiment
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="">
                            Market
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="">
                            Sector
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="">
                            Watchlist
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="">
                            Events
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="">
                            News/Interview
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
