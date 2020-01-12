import { BrowserRouter } from 'react-router-dom'
import *as useLable from '@lable/common/Lable'
import Router from '@router/Router'
import ReactDOM from 'react-dom';
import React from 'react';



import './reset.min.css'
import 'antd/dist/antd.css';



React.useLable = useLable 



ReactDOM.render(

                <BrowserRouter>
                    <Router />
                </BrowserRouter>

        , document.getElementById('root'));
