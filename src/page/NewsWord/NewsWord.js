import EditingHead from '../../components/EditingHead/EditingHead'
import React, { Component } from 'react'
import LEdit from 'wangeditor'
import './css/newsWord.css'


//   标题,    粗体,     字号,          字体,         斜体,       下划线,        删除线,  
//  'head',  'bold',  'fontSize',  'fontName',   'italic',  'underline'',  strikeThrough'


export default class Child extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editorContent:''
         };

         this.textAreaValue=this.textAreaValue.bind(this);

    }



    componentDidMount() {
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        const editor = new LEdit(elemMenu, elemBody)
        


        let div = `<h1 className="titltss">无标题</h1>`

        /*使用 onchange 函数监听内容的变化，并实时更新到 state 中*/

        editor.customConfig.onchange = html => {
            this.setState({
                editorContent: editor.txt.html()
            })
        }


        editor.customConfig.menus = [
            
            'strikeThrough', 
            'underline',  
            'foreColor', 
            'backColor', 
            'fontSize',  
            'fontName', 
            'emoticon',  
            'justify',  
            'italic', 
            'quote', 
            'image',  
            'table',  
            'video',  
            'link', 
            'list',  
            'code',  
            'undo',  
            'redo',
            'head', 
            'bold',  

        ]



        editor.customConfig.emotions = [
            {
                title: '默认',
                type: 'image',
                content: [
                    {
                        alt: '[坏笑]',
                        src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png'
                    },
                    {
                        alt: '[舔屏]',
                        src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png'
                    }
                ]
            },
            {
                title: 'emoji',
                type: 'emoji',
                content: ['😀', '😃', '😄', '😁', '😆']
            }
        ]



        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
        editor.txt.html(div)



    };



    textAreaValue () {
        console.log('编辑器data：', this.state.editorContent)
    }


    render() {
        return (
            <div className="shop">


                <EditingHead></EditingHead>


                <div className="edit-header">
                    <div ref="editorElemMenu"
                         style={{backgroundColor:'#f1f1f1',border:"1px solid #ccc"}}
                         className="editorElem-menu">
                    </div>
                </div>
                


                <div className="center-wrapper">
                    <div className="center-main">
                    <div className="text-area" >
                    <div
                        style={{
                            padding:"0 10px",
                            overflowY:"auto",
                            height:810,
                            border:"1px solid #ccc",
                            borderTop:"none"
                        }}
                        ref="editorElemBody" className="editorElem-body">
                    </div>
                    </div>
                    </div>
                </div>
                


            </div>
        )
    }
}