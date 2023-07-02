import React from "react";

export default function MainSection(){
    return(
        <div>

            {/* sidebar section starts here  */}
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
            {/* sidebar section ends here */}
        </div>
    )
}