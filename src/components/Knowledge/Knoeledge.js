import List_Item from './component/List_item'
import NewsText from '../NewsText/NewsText'
import React, { useLable } from 'react'

import './css/know.css'




const Knowledge = props => {

    let { Wrapper } = useLable

    return (
        <Wrapper w="940px" className="knowledge">

            <NewsText></NewsText>

            <List_Item></List_Item>
            <List_Item></List_Item>
            <List_Item></List_Item>

        </Wrapper>
    )
}
export default Knowledge;