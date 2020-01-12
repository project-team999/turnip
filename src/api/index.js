import { commonPost, commonGet } from './api/ajax'
import *as urls from './urls/urls'




//post
export const login = data => commonPost(urls.login, data);
export const register = data => commonPost(urls.register, data);


//get