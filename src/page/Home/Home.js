import VideoDialog from '../../components/VideoDialog/VideoDialog'
import React, { useLable, useState } from 'react'
import { Button } from 'antd';

import './css/Home.css'



const Home = props => {

    let { history } = props

    let { Wrapper, Img, TextBox } = useLable;

    let [flag, setFlag] = useState(false)
    let [shade, setShade] = useState(false);

    const handleToLogin = () => history.push('/login')

    const handleToRegister = () => history.push('/register')

    const handleClice = () => setFlag(false)


    return (
        <Wrapper className="home" bg="#ffffff">
            <VideoDialog dialogflag={flag} handleClose={handleClice}></VideoDialog>
            <Wrapper w="1134px" className="home-container">


                <Wrapper h="100px" className="home-header">


                    <Wrapper className='logo-box' w="500px" h="100px">
                        <ul className="header-list">
                            <li className="logo-text">
                                <img src="https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg" alt="" />
                                语雀</li>
                            <li>产品功能</li>
                            <li>数据安全</li>
                            <li className="header-list-space">
                                <div className="space-icon">企业级</div>
                                空间</li>
                            <li>发现</li>
                        </ul>
                    </Wrapper>


                    <Wrapper className='header-right-box' w="200px" h="100px">
                        <Button className="go-login" onClick={() => handleToLogin()}>登陆</Button>
                        <Button type="primary toregisters" onClick={() => handleToRegister()}>快速注册</Button>
                    </Wrapper>


                </Wrapper>



                <TextBox size="44px" fw="700" className="home-title" lh="100px" mt="20px">
                    专业的云端知识库
                </TextBox>

                <TextBox size="18px">
                    面向个人和团队，提供与众不同的知识管理，打造轻松流畅的工作协同。
                </TextBox>




                <Wrapper h="550px" className="home-img-box">
                    <Wrapper
                        onClick={() => setFlag(true)}
                        onMouseOut={() => setShade(false)}
                        onMouseOver={() => setShade(true)}
                        className={`img-btn ${shade ? 'active' : ''}`} w="80px" h="80px"
                        >
                    <Img className="img-btns" src="https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*cB_WS6Q3G0wAAAAAAAAAAABjARQnAQ" alt="" /></Wrapper>
                    <Img src="https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*QT3DQZcBDqwAAAAAAAAAAABjARQnAQ"></Img>
                </Wrapper>


            </Wrapper>

        </Wrapper>
    )
}

export default Home