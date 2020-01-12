import UserHeadMsg from '@components/UserHeadMsg/UserHeadMsg.js'
import Headear from '@components/Header/Header'
import React,{useLable} from 'react';
import './css/docs.css'




const Docs = props => {

    let { Wrapper, Img, TextBox } = useLable;


    return (
        <div className="docs-container">

            <Headear></Headear>

            <UserHeadMsg></UserHeadMsg>

            <div className="docs-center-main-box">
                
            </div>
            
        </div>
    )
}


export default Docs;