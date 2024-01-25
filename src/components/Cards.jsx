import React, { useState } from 'react';
import ContextBox from './ContextBox';


const Cards = () => {

    const [suggestAnswer, setSuggestAnswer] = useState("none");
    const setYes = () => {
        setSuggestAnswer("yes");
    }
    const setNo = () => {
        setSuggestAnswer("no");
    }
    const setNone = () => {
        setSuggestAnswer("none");
    }

    return (
        <div>
            <div className={"card " + (suggestAnswer === "yes" ? "card-yes" : suggestAnswer === "no" ? "card-no" : "")}>
                <div className='choice-box'>
                    <div className='left-no'
                        onMouseEnter={setNo}
                        onMouseLeave={setNone}
                    ></div>
                    <div className='right-yes'
                        onMouseEnter={setYes}
                        onMouseLeave={setNone}
                    ></div>

                </div>
                <ContextBox/>
            </div>
        </div>
    );
};

export default Cards;