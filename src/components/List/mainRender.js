import React from 'react';
import { MenuList } from '../../mock/data/shop';

import BScroll from 'better-scroll';
class MainRender extends React.Component{
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
        let that = this;
        setTimeout(() => {
            that.bs();
        }, 50)
    }
    bs () {
        this.bsRight = new BScroll(this.refs.wscroll,{click:true});
    }
    turn (ev) {
        let leftList = [];
        let rightList = [];
        for(var j = 0; j<MenuList.goods.length; j++){
            leftList.push(MenuList.goods[j].name)
            rightList.push(MenuList.goods[j].children)
        }
        for(var i = 0;i < this.state.renderLeft.length; i ++){
            if(this.state.renderLeft[i]===ev.target.innerText){
                this.setState({
                    renderRight:rightList[i]
                })
            }
        }
        this.bs()
    }
    getNum (ev) {
        let price = ev.target.previousSibling.innerText,
            name = ev.target.previousSibling.previousSibling.innerText
        this.props.onFood({price,name})
    }
    render () {
        return (
            <main>
                <div className="listLeft">
                    <ul>
                        { this.state.renderLeft.map((value, index) => {
                            return <li key={index} onClick={this.turn.bind(this)}>{value}</li>
                        })}
                    </ul>
                </div>
                <div className="listRight" ref='wscroll'>
                    <div className="change">
                        <ul>
                            { this.state.renderRight.map((value, index) => {
                                return <li key={index}>
                                    <p>{value.name}</p>
                                    <span>{value.price}</span>
                                    <div className="add" onClick={this.getNum.bind(this)}>+</div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </main>
        )
    }
}
export default MainRender