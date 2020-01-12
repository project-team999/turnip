import { GOLOGIN_ACTION } from '../type/type'
import { login } from '@api/api/ajax'
import axios from 'axios'





export const login = payload => dispatch => login().then(res => {
    res.code === 200 ?dispatch({ type: GOLOGIN_ACTION, key: 'list', value: res.data }) :alert('登陆失败，请稍后再试')
})



