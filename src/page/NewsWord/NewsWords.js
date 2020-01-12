import React, { useState, useEffect } from 'react'
import EditingHead from '../../components/EditingHead/EditingHead'
import './css/newsWord.css'
import LEdit from 'wangeditor'
const NewsWord = () => {
    let [editorContent, setEditorContent] = useState('');
    useEffect(() => {
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        const editor = new LEdit(elemMenu, elemBody)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            // console.log(editor.txt.html())
            setEditorContent(editor.txt.html())
            // this.setState({
            //     // editorContent: editor.txt.text()
            //     editorContent: 
            // })
        }
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
    }, [])
    const textAreaValue = () => { }
    return (
        <div className="news-word-container">
            <EditingHead></EditingHead>
            <div>
                <div className="shop">
                    <div className="text-area" >
                        <div ref="editorElemMenu"
                            style={{ backgroundColor: '#f1f1f1', border: "1px solid #ccc" }}
                            className="editorElem-menu">
                        </div>
                        <div
                            style={{
                                padding: "0 10px",
                                overflowY: "scroll",
                                height: 300,
                                border: "1px solid #ccc",
                                borderTop: "none"
                            }}
                            ref="editorElemBody" className="editorElem-body">

                        </div>
                    </div>
                    <div onClick={() => textAreaValue()}>点击我获取值啊</div>
                </div>
            </div>
        </div>
    )
}

export default NewsWord;