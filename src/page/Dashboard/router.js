import React, { lazy } from 'react'

const Knowledge =  lazy(() => import('../../components/Knowledge/Knoeledge.js'));
const Appstore  =  lazy(() => import('./page/Appstore/Appstore'));
const Database  =  lazy(() => import('./page/Database/Database'));
const Collect   =  lazy(() => import('./page/Collect/Collect'));
const History   =  lazy(() => import('./page/History/History'));
const Gloval    =  lazy(() => import('./page/Global/Global'));
const Heart     =  lazy(() => import('./page/Heart/Heart'));
const Sync      =  lazy(() => import('./page/Sync/Sync'));
const Rest      =  lazy(() => import('./page/Rest/Rest'));
const Dashboard =  lazy(() => import('./Dashboard.js'));

const router={
        path:'/dashboard',
        component:Dashboard,
        children:[
            {
                path:'/dashboard/knowledge',
                component:Knowledge,
            },
            {
                path:'/dashboard/appstore',
                component:Appstore,
            },
            {
                path:'/dashboard/database',
                component:Database,
            },
            {
                path:'/dashboard/collect',
                component:Collect,
            },
            {
                path:'/dashboard/history',
                component:History,
            },
            {
                path:'/dashboard/global',
                component:Gloval,
            },
            {
                path:'/dashboard/heart',
                component:Heart,
            },
            {
                path:'/dashboard/sync',
                component:Sync,
            },
            {
                path:'/dashboard/rest',
                component:Rest,
            }
        ]
    }


export default router
