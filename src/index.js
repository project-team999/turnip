import { BrowserRouter,Route, Switch, Redirect  } from 'react-router-dom'
import *as useLable from '@lable/common/Lable'
import Routers from '@router/Router'
import ReactDOM from 'react-dom';
import React,{Suspense} from 'react';
import renderRoutes from './components/Util/RouterView'


import './reset.min.css'
import 'antd/dist/antd.css';



React.useLable = useLable



ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                {renderRoutes(Routers, true)}
            </Suspense>
        </React.Fragment>
    </BrowserRouter>
    
    , document.getElementById('root'));
