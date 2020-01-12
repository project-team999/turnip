
import { withRouter } from 'react-router-dom'
import React, { useLable } from 'react'
import '../css/know.css'




const List_Item = props => {

    let { Wrapper } = useLable;
    let { history } = props

    const handleToDocs = () => history.push('/docs')

    
    return (
        <div className="list-item-wrapper">
            <div className="title">学习笔记</div>
            <div className="type">类型</div>
            <div className="synopsis">简介 </div>
            <div className="magage" onClick={() => handleToDocs()}>管理</div>
        </div>
    )
}



export default withRouter(List_Item);