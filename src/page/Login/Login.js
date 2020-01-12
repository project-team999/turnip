import React, { useState, useEffect, useLable } from 'react'
import { Select, Input, Button } from 'antd';
import { login } from '../../api/api/ajax'
import MD5 from 'js-md5'
import './css/page.css'




const { Option } = Select;

const Login = props => {

    let { history } = props

    let { Container, CenterBox, Img, AHref, TextBox, Wrapper } = useLable;

    let [phone, setPhone] = useState('')
    let [password, setPassword] = useState('')
    let [size, setSize] = useState(0)


    const handleLogin = () => {

        if (phone.trim() && password.trim()) {
            login({ phone, password: MD5(password) })
            .then(res => {
                if (res.code === 200) history.push('/dashboard')
                else alert(res.msg)
            })
            .catch(e => alert('连接错误，请稍后再试'))
        }


    }




    const handleChangePassword = (e) => setPassword(e.target.value)

    const handlePhoneChange = (e) => setPhone(e.target.value)

    const handleRegister = () => history.push('/register')

    const handleSelectChange = () => { }

    const handlePhoneBlur = () => { }


    return (
        <Container className='login'>
            <CenterBox>



                <Wrapper h="100px" className='logo-wrapper'>
                    <AHref href='/' width="66px" height="58px">
                        <Img src="https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg"></Img>
                    </AHref>
                </Wrapper>



                <div className="logo-explain">
                    <TextBox colot="#262626" size="32px" lh="1.2"> 语雀</TextBox>
                    <TextBox colot="#595959" size="18px" mt="20px"> 专业的云端知识库</TextBox>
                </div>



                <Wrapper h="38px" className="text-box">
                    <Wrapper className="text-conetnt" w="319px">


                        <Select defaultValue="+86" style={{ width: 120 }} onChange={() => handleSelectChange()}>
                            <Option className="select-box" value="+86">+86</Option>
                            <Option className="select-box" value="lucy">Lucy</Option>
                            <Option className="select-box" value="Yiminghe">yiminghe</Option>
                        </Select>


                        <Input
                            onChange={(e) => handlePhoneChange(e)}
                            className="phones"
                            onBlur={() => handlePhoneBlur()}
                            placeholder="请输入手机号"
                            maxLength={11}
                            type="number"
                            value={phone}
                        />

                    </Wrapper>

                </Wrapper>




                <Wrapper h="38px" className="text-box password-box">
                    <Wrapper className="text-conetnt password" w="319px">
                        <Input.Password placeholder="password" value={password} onChange={(e) => handleChangePassword(e)} />
                    </Wrapper>
                </Wrapper>




                <Wrapper h="40px" className="text-box password-box">
                    <Wrapper className="text-conetnt" w="319px">
                        <Button type="primary" block onClick={() => handleLogin()}>
                            登陆
                    </Button>
                    </Wrapper>
                </Wrapper>



                <Wrapper h="80px" className="buttom-box">
                    <Wrapper w="319px" className="buttom-center-wrapper">
                        <Wrapper w="100px" className="buttom-item">找回密码</Wrapper>
                        <Wrapper w="100px" className="buttom-item">邮箱登陆</Wrapper>
                        <Wrapper w="100px" className="buttom-item" onClick={() => handleRegister()}>快速注册</Wrapper>
                    </Wrapper>
                </Wrapper>


            </CenterBox>

        </Container>
    )
}




export default Login;