import { withRouter } from 'react-router-dom'
import React, { useLable } from 'react';
import { Input } from 'antd';
import './csss/header.css'

let { Search } = Input;

const Header = props => {

    let { Wrapper } = useLable


    const handleToDashboard = () => {
        props.history.push('/dashboard')
    }

    return (
        <Wrapper className="header-container">
            <Wrapper className="header-main-conetnt">

                
                <div className="main-left-box">
                    <div className="logo-wrapper" onClick={() => handleToDashboard()}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg" alt="" />
                        <span>语雀</span>
                    </div>


                    <div className="search-box">
                        <Search
                            placeholder="搜索"
                            onSearch={value => console.log(value)}
                            style={{ width: 200 }}
                        />
                    </div>


                    <div className="tab-title-wrapper">
                        <ul className="title-list">
                            <li>工作台</li>
                            <li onClick={() => window.location.href = 'https://www.yuque.com/about/organization'}>空间</li>
                            <li onClick={() => window.location.href = 'https://www.yuque.com/explore/headlines'}>发现</li>
                            <li onClick={() => window.location.href = 'https://www.yuque.com/yuque/help'}>帮助</li>
                            <li>反馈</li>
                        </ul>
                    </div>


                </div>


                <div className="main-right-box">
                    <div className="news">
                        <span>+</span>▼
                        </div>
                    <div className="elamp">llll</div>
                    <div className="user-info">user</div>
                </div>


            </Wrapper>
        </Wrapper>
    )
}


export default withRouter(Header);