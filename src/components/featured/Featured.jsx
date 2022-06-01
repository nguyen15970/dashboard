import React from 'react';
import "./featured.scss"
import { MdMoreVert } from "react-icons/md";
import { BsChevronDown, BsChevronUp} from "react-icons/bs";
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';


const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <MdMoreVert fontSize="small"/>
            </div>
            <div className="bottom">
                <div className="featuredchart">
                    <CircularProgressbar 
                        value={75} 
                        text={"75%"}
                        strokeWidth={5}    
                    />
                </div>
                <p className="tite">Total sales madee today</p>
                <p className="amount">100$</p>
                <p className="desc">
                    Previous transactions processing. ast payment may not be incldued.
                </p>
                <div className="summary">
                    <div className="item">
                        <div className="iemTitle">Target</div>
                        <div className="itemresutl negative">
                            <BsChevronDown fontSize={"small"} style={{marginRight:'10px'}}/>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="iemTitle">Last Week</div>
                        <div className="itemresutl positive">
                            <BsChevronUp fontSize={"small"} style={{marginRight:'10px'}} />
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="iemTitle">Last Month</div>
                        <div className="itemresutl positive">
                            <BsChevronUp fontSize={"small"} style={{marginRight:'10px'}}/>
                            <div className="resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Featured;