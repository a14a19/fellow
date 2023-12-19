import React from "react";


export default function Sample(){
    return(
        <>
            <div className="parent flex justify-start items-center gap-4">
                <div className="left text-5xl">
                    1
                </div>
                <div className="right">
                    <div>Hello Nice</div>
                    <div>Welcome World</div>
                </div>
            </div>

            <div className="parent flex justify-start items-center gap-4">
                <div className="left flex justify-center text-5xl">
                    2
                </div>
                <div className="right">
                    <div>Hello Nice</div>
                    <div>Welcome World</div>
                </div>
            </div>
        </>
    )
}