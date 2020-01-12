import React, { useState, useEffect, useLable } from 'react'
import { Select, Input, Button } from 'antd';
import { register } from '../../api/api/ajax'
import './css/register.css'
import MD5 from 'js-md5'




const { Option } = Select;

const Register = props => {

    let { history } = props

    let { Container, CenterBox, Img, AHref, TextBox, Wrapper } = useLable;


    let [phoneValue, setPhoneValue] = useState('')

    let [passwordValue, setPasswordValue] = useState('')
    
    let [size, setSize] = useState(0)


    const handlePhoneChange = (e) => setPhoneValue(e.target.value)

    const handlePassword = (e) => setPasswordValue(e.target.value)

    const handleSelectChange = () => {}
    
    const handleToLogin = () => history.push('/login')

    const handleToRegister = () => {

        if (phoneValue.trim() && passwordValue.trim()) {

            let password = MD5(passwordValue);

            register({ phone: phoneValue, password })
            .then(res => {
                if(res.code ===200 )history.push('/login')
            })
            .catch(e => alert('连接错误，请稍后再试'))

        }

    }
    const handlePhoneBlur = () => {}

    const handleRegister = () => {}

    const handleLogin = () => {}



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
                            value={phoneValue}
                        />
                    </Wrapper>
                </Wrapper>



                <Wrapper h="38px" className="text-box password-box">
                    <Wrapper className="text-conetnt password" w="319px">
                        <Input.Password placeholder="password" value={passwordValue} onChange={(e) => handlePassword(e)} />
                    </Wrapper>
                </Wrapper>



                <Wrapper h="40px" className="text-box password-box">
                    <Wrapper className="text-conetnt" w="319px">
                        <Button type="primary" block onClick={() => handleToRegister()}>
                            快速注册
                    </Button>
                    </Wrapper>
                </Wrapper>



                <Wrapper className="protocol" h="40px">
                    <Wrapper w="200px" className="content">
                        即表明同意<span>《语雀服务协议》</span></Wrapper>
                </Wrapper>



                <Wrapper h="80px" className="buttom-box">
                    <Wrapper w="200px" className="buttom-center-wrapper">
                        <Wrapper w="100px" className="buttom-item" onClick={() => handleToLogin()}>直接登陆</Wrapper>
                        <Wrapper w="100px" className="buttom-item">遇到问题</Wrapper>
                        {/* <Wrapper w="100px" className="buttom-item" onClick={() => handleRegister()}>快速注册</Wrapper> */}
                    </Wrapper>
                </Wrapper>



            </CenterBox>

        </Container>
    )
}




export default Register;