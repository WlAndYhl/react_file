import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class UnDetailBymyself extends React.Component{
    constructor (...args) {
        super(...args)
        var id = '';
        for(var i=0;i<10;i++){
            id+=Math.floor(Math.random()*10)
        }
        let m = new Date().getMonth(),
            d = new Date().getDate(),
            h = new Date().getHours(),
            min = new Date().getMinutes();
        this.state = ({
            num: id,
            time: (m+1)+'-'+d+''+' '+h+':'+min,
            need: localStorage.getItem('need'),
            personNum: localStorage.getItem('personNum'),
            telInfo: localStorage.getItem('telInfo'),
            addressInfo: localStorage.getItem('addressInfo')
        })
        localStorage.setItem('id', id)
        localStorage.setItem('time', new Date())
    }
    render () {
        const { text } = this.props
        let price = 0;
        text.food.forEach((val)=>{
            price +=Number(val.price)
        })
        return (
            <div className='detail'>
                <header>
                    <ul className='top'>
                        <li className='detailOne'>〈</li>
                        <li className='detailTwo'>订单详情</li>
                    </ul>
                </header>
                <nav>
                    <p>已退订</p>
                    <span></span>
                </nav>
                <ul className='main'>
                    <li className='tit'>
                        <p>望湘园店</p>
                        <span><p><img src="../../images/u1217.png" alt=""/></p>联系商家</span>
                    </li>
                    {text.food.map((val, ind)=>{
                        return <li key={ind}>
                            <p className='one'>{val.name}</p>
                            <p className='two'>*1</p>
                            <p className='three'>￥{val.price}</p>
                        </li>
                    })}
                    <li>总价:￥{price}</li>
                </ul>
                <ul className='mes1'>
                    <li>
                        <p>订单编号</p>
                        <span>{this.state.num}</span>
                    </li>
                    <li>
                        <p>下单时间</p>
                        <span>{this.state.time}</span>
                    </li>
                </ul>
                <ul className='mes1'>
                    <li>
                        <p>取餐方式</p>
                        <span>自提</span>
                    </li>
                    <li className='add'>
                        <p>联系信息</p>
                        <span>{this.state.telInfo}</span>
                    </li>
                    <li>
                        <p>自提时间</p>
                        <span>{this.state.time}</span>
                    </li>
                    <li>
                        <p>订单备注</p>
                        <span>{this.state.need}</span>
                    </li>
                </ul>
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
    key: 'undetailBymyself',
    path: '/unBymyself',
    component: connect(slect)(UnDetailBymyself)
}