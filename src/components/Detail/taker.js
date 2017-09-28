import React from 'react';
import { connect } from 'react-redux';
class Taker extends React.Component{
    constructor (...args) {
        super(...args)
        let m = new Date().getMonth(),
            d = new Date().getDate(),
            h = new Date().getHours(),
            min = new Date().getMinutes();
        this.state = ({
            num: localStorage.getItem('id'),
            time:localStorage.getItem('time'),
            time2: (m+1)+'-'+d+''+' '+(h+1)+':'+min,
            need: localStorage.getItem('need'),
            personNum: localStorage.getItem('personNum'),
            telInfo: localStorage.getItem('telInfo'),
            addressInfo: localStorage.getItem('addressInfo')
        })
    }
    changeUrl () {
        this.props.history.push('/again')
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
                    <p>已接单</p>
                    <span><button type='button' onClick = {this.changeUrl.bind(this)}>确认收货</button></span>
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
                        <p>支付方式</p>
                        <span>在线支付</span>
                    </li>
                    <li>
                        <p>下单时间</p>
                        <span>{this.state.time}</span>
                    </li>
                </ul>
                <ul className='mes1'>
                    <li className='add'>
                        <p>收货地址</p>
                        <span>{this.state.telInfo} {this.state.addressInfo}</span>
                    </li>
                    <li>
                        <p>预计送达时间</p>
                        <span>{this.state.time2}</span>
                    </li>
                    <li>
                        <p>配送方式</p>
                        <span>送达</span>
                    </li>
                    <li>
                        <p>人数</p>
                        <span>{this.state.personNum}</span>
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
    key: 'taker',
    path: '/taker',
    component: connect(slect)(Taker)
}