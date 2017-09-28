import React from 'react';
// import axios from 'axios';

import { MenuList } from '../../mock/data/shop';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MainRender from './mainRender';
import {getsum} from '../../stores/action_type'
class RenderList extends React.Component{
    constructor (...args) {
        super(...args);
        let leftList = [];
        let rightList = [];
        for(var i = 0; i<MenuList.goods.length; i++){
            leftList.push(MenuList.goods[i].name)
            rightList.push(MenuList.goods[i].children)
        }
        this.state = ({
            renderLeft: leftList,
            renderRight: rightList[0],
            count: 0,
            sum: 0
        })
    }
    render () {
        const {dispatch, text}  = this.props
        let price = 0;
        text.food.forEach((val)=>{
            price +=Number(val.price)
        })
        return (
            <div className='footList'>
                <header>
                    <ul>
                        <li className='footListOne'>
                            <span>&times;</span>
                        </li>
                        <li className='footListTwo'>
                            <p>满记甜食（西单大悦城）店</p>
                        </li>
                        <li className='footListThree'>
                            <span>···</span>
                        </li>
                    </ul>
                </header>
                <nav>
                    <dl>
                        <dt>
                            <p>
                                <img src="../../images/yeoman.png" alt=""/>
                            </p>
                        </dt>
                        <dd>
                            <p>满记甜食（西单大悦城店）</p>
                        </dd>
                    </dl>
                </nav>
                <MainRender onFood = {(val) => {
                    dispatch(getsum(val))
                }}/>
                <footer>
                    <p>总数<span> {text.food.length}</span>&nbsp;&nbsp;&nbsp;&nbsp;总价<span> ￥{price}</span></p>
                    <button type='button'><Link to='/showList'>选好了</Link></button>
                </footer>
            </div>
        )
    }
}
function slect (state) {
    return {
        text: state.getMoney
    }
}
export default {
    key: 'RenderList',
    path: '/buyFoot',
    component: connect(slect)(RenderList)
}
