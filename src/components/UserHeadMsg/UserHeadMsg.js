
import { Button, Menu, Dropdown, Icon } from 'antd';
import React, { useLable, useState } from 'react';
import { withRouter } from 'react-router-dom'
import './css/userHeadMsg.css'


const UserHeadMsg = props => {

    let { Wrapper, Img, TextBox } = useLable;

    let { history } = props



    const handleMenuClick = () => {
        console.log("asdasd");
    }


    const handleToNewWord = () => history.push('/newsword')

    const menu = (

        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">1st item</Menu.Item>
            <Menu.Item key="2">2nd item</Menu.Item>
            <Menu.Item key="3">3rd item</Menu.Item>
        </Menu>
        
    );




    return (
        <Wrapper h="80px" className="userHeadMsg-container">
            
            <div className="userHeadMsg-center-main-box">


                <div className="user-left-msg-box">
                    <div className="user-img">
                        <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008142408,2229729459&fm=26&gp=0.jpg" alt="" />
                        头像</div>

                    <div className="user-name">姓名</div>
                    <div className="user-collect">收藏</div>
                    <div className="accention">已关注</div>
                </div>



                <div className="user-right-btn-box">

                    <div><Button>分享</Button></div>
                    <div><Button>管理</Button></div>

                    <div>
                        <Dropdown overlay={menu}>
                            <Button onClick={() => handleToNewWord()}>
                                新建文档 <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </div>

                    <div>...</div>
                </div>



            </div>
        </Wrapper>
    )
}





export default withRouter(UserHeadMsg);