
import { Input, Button } from 'antd';
import React from 'react';
import './css/newText.css'

let { Search } = Input;


const NewsText = props => {

    const handleToNews = () => {}
        
   


    return (
        <div className="new-text-wrapper">

            <div>知识库</div>
                
            
            <div className="left-box">
                <Search
                    placeholder="搜索"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />

                <Button type="primary" onClick={() => handleToNews()}>
                    新建知识库
                </Button>

            </div>



        </div>
    )
}

export default NewsText;