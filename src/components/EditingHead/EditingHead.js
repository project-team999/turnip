import React,{useState} from 'react'
import { Button } from 'antd';
import './css/EditingHead.css'

const EditingHead = () => {
    let [size,SetSize] = useState('large')
    return (
        <div className="edit-container">
            <div className="edit-right-box">
                <div>ss</div>
                <div>箐竹</div>
                <div>锁</div>
                <div>无标题</div>
                <div>↓</div>
                <div>保存于20:02:45</div>
            </div>
            <div className="edit-left-box">
                <div className="user"></div>
                <div> <Button size={size}>协作</Button></div>
                <div> <Button size={size}>历史</Button></div>
                <div>
                <Button type="primary">发布</Button>
                </div>
            </div>
        </div>
    )
}

export default EditingHead;