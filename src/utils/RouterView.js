import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

export default ({routes})=>{
    return <Switch>
        {
            routes&&routes.map((item, index)=>{
                return <Route 
                key={index} 
                path={item.path} 
                render={
                    (props)=>{
                        if (item.redirect){
                            return <Redirect to={item.redirect}/>
                        }
                        if (item.children){
                            return <item.component {...props} routes={item.children}/>
                        }else{
                            return <item.component {...props}/>
                        }
                    }
                }/>
            })
        }
    </Switch>
}