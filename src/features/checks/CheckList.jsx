
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import Checks from './Checks'



const CheckList = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { checkList } = useSelector(state => state.checkList)
    console.log("postID๋?", id)

    // useEffect(() => {
    //     dispatch(__getPosts())
    // }, [dispatch])
    // useEffect(() => {
    //     dispatch(__detailPosts(+id));
    // }, [dispatch, id])


    return (
        <CheckListWrap>

            <h1>๐ข๋  ์์ง ๋ง์์ค..๐ข</h1>
            <div>
                <div>
                    {checkList.filter(check => !check?.isDone).map((check) => check?.postId === Number(id) ? <Checks key={check?.id} check={check} /> : null)}
                </div>
            </div>
            <ListLine />
            <h1>๐ญ๊ณ ..๊ณ ๋ง์..!๐ญ</h1>
            <div>
                <div>
                    {checkList.filter(check => check?.isDone).map((check) => check?.postId === Number(id) ? <Checks key={check?.id} check={check} /> : null)}
                </div>
            </div>



        </CheckListWrap>
    )
}

export default CheckList
const CheckListWrap = styled.div`
    
    margin-top: 20px;
    /* background-color: white; */
    overflow: auto;
    &::-webkit-scrollbar {
    width: 10px;
    
  }
  &::-webkit-scrollbar-thumb {
    background-color: #293991;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: #ccd1e8;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`


const ListLine = styled.div`
    margin: 45px auto;
    border-bottom: 2px solid #293991;
`
