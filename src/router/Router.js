import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//router
import DashboardRouter from '../page/Dashboard/router'


const Register   =    lazy(() => import('../page/Register/Register.js'));
const Newsword   =    lazy(() => import('../page/NewsWord/NewsWord'));
const Login      =    lazy(() => import('../page/Login/Login'));
const Home       =    lazy(() => import('../page/Home/Home'));
const Docs       =    lazy(() => import('../page/Docs/Docs.js'));

    const routes=[
            
            {
                path:'/home',
                component:Home,
            },
            {
                path:"/login",
                component:Login,
            },
            {
                path:"/register",
                component:Register,
            },
            {
            ...DashboardRouter
            },
            {
                path:"/docs",
                component:Docs,
            },
            {
                path:"/newsword",
                component:Newsword,
            },
            {
                path:"/",
                redirect:'/home',
            },
]



// const Router = props => {

//     return (
//         <Suspense fallback={<div>Loading...</div>}>
//             <Switch>
//                 <Route path='/home' exam component={Home}></Route>
//                 <Route path='/login' exam component={Login}></Route>
//                 <Route path='/register' exam component={Register}></Route>
//                 <Route path='/dashboard' exam component={Dashboard}></Route>
//                 <Route path='/docs' exam component={Docs}></Route>
//                 <Route path='/newsword' exam component={Newsword}></Route>
//                 <Redirect to="/home" exam from="/" ></Redirect>
//             </Switch>
//         </Suspense>
//     )
// }




export default routes;