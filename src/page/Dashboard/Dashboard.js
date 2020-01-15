import React, { useLable, useState, lazy, Suspense } from 'react'
import Header from '../../components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd';
import RenderRoutes from '../../utils/RouterView'

import './css/dashboard.css'


// const Knowledge =  lazy(() => import('../../components/Knowledge/Knoeledge.js'));
// const Appstore  =  lazy(() => import('./page/Appstore/Appstore'));
// const Database  =  lazy(() => import('./page/Database/Database'));
// const Collect   =  lazy(() => import('./page/Collect/Collect'));
// const History   =  lazy(() => import('./page/History/History'));
// const Gloval    =  lazy(() => import('./page/Global/Global'));
// const Heart     =  lazy(() => import('./page/Heart/Heart'));
// const Sync      =  lazy(() => import('./page/Sync/Sync'));
// const Rest      =  lazy(() => import('./page/Rest/Rest'));




const { SubMenu } = Menu;


const Dashboard = props => {

    let { Wrapper, Img, TextBox } = useLable;
    let [collapsed, setCollapsed] = useState()
    let { history,routes} = props

    return (
        <Wrapper className="dashboard-container" bg="#fafafa">
            <div className="dashboard-header">
                <Header></Header>
            </div>
            <Wrapper w="1134px" bg="#fafafa" className="main-box">

                
                <Wrapper w="200px" className="left-box-wrapper">
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                    >


                        <Menu.Item key="1" className="work" onClick={() => history.push('/dashboard/appstore')}>
                            <Icon type="appstore" />
                            <span>工作台</span>
                        </Menu.Item>


                        <Menu.Item key="2" onClick={() => history.push('/dashboard/database')}>
                            <Icon type="database" />
                            <span>文档</span>
                        </Menu.Item>


                        <Menu.Item key="3" onClick={() => history.push('/dashboard/knowledge')}>
                            <Icon type="bank" />
                            <span>知识库</span>
                        </Menu.Item>


                        <Menu.Item key="4" onClick={() => history.push('/dashboard/global')}>
                            <Icon type="global" />
                            <span>团队</span>
                        </Menu.Item>


                        <Menu.Item key="5" onClick={() => history.push('/dashboard/sync')}>
                            <Icon type="sync" />
                            <span>协作</span>
                        </Menu.Item>


                        <Menu.Item key="6" onClick={() => history.push('/dashboard/message')}>
                            <Icon type="message" />
                            <span>讨论</span>
                        </Menu.Item>


                        <Menu.Item key="7">
                            <Icon type="heart" onClick={() => history.push('/dashboard/heart')} />
                            <span>关注</span>
                        </Menu.Item>


                        <Menu.Item key="8" onClick={() => history.push('/dashboard/collect')}>
                            <Icon type="inbox" />
                            <span>收藏</span>
                        </Menu.Item>


                        <Menu.Item key="9" onClick={() => history.push('/dashboard/history')} >
                            <Icon type="history" />
                            <span>最近浏览</span>
                        </Menu.Item>


                        <Menu.Item key="10" onClick={() => history.push('/dashboard/rest')}>
                            <Icon type="rest" />
                            <span>回收站</span>
                        </Menu.Item>

                        
                    </Menu>
                </Wrapper>


                <RenderRoutes routes={routes}/>

                {/* <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/dashboard/knowledge" component={Knowledge}></Route>
                        <Route path="/dashboard/appstore" component={Appstore}></Route>
                        <Route path="/dashboard/database" component={Database}></Route>
                        <Route path="/dashboard/collect" component={Collect}></Route>
                        <Route path="/dashboard/history" component={History}></Route>
                        <Route path="/dashboard/global" component={Gloval}></Route>
                        <Route path="/dashboard/heart" component={Heart}></Route>
                        <Route path="/dashboard/sync" component={Sync}></Route>
                        <Route path="/dashboard/rest" component={Rest}></Route>
                    </Switch>
                </Suspense> */}




            </Wrapper>
        </Wrapper>
    )
}


export default Dashboard;