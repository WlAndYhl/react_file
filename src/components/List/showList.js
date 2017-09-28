import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class ShowList extends React.Component{
    personNum (ev) {
        localStorage.setItem('personNum',ev.target.value)
    }
    need (ev) {
        localStorage.setItem('need',ev.target.value)
    }
    render () {
        const { text } = this.props
        let price = 0;
        text.food.forEach((val)=>{
            price +=Number(val.price)
        })
        return (
            <div className='showList'>
                <header>
                    <ul>
                        <li className='showListOne'><Link to='/buyFoot'>〈返回</Link></li>
                        <li className='showListTwo'>确认订单</li>
                        <li  className='showListThree'>···</li>
                    </ul>
                </header>
                <ul className='top3'>
                    <li style={{borderBottom: '3px solid red'}}>
                        <p>
                            <img src="../../images/yeoman.png" alt=""/>
                        </p>
                        <b>外送</b>
                    </li>
                    <li>
                        <p>
                            <img src="../../images/yeoman.png" alt=""/>
                        </p>
                        <b><Link to='/since'>自提</Link></b>
                    </li>
                </ul>
                <ul className='top2'>
                    <li>
                        <p>请选择收货地址</p>
                        <span><Link to='address'>></Link></span>
                    </li>
                    <li>
                        <p>送达时间</p>
                        <span>尽快送达></span>
                    </li>
                </ul>
                <main>
                    <ul className='top4'>
                        {text.food.map((val, ind)=>{
                            return <li key={ind}>
                                <p className='one'>{val.name}</p>
                                <p className='two'>*1</p>
                                <p className='three'>￥{val.price}</p>
                            </li>
                        })}
                        <li>总价:￥{price}</li>
                    </ul>
                    <ul className='top5'>
                        <li className='person'>
                            <p>人数</p>
                            <span>
                            <select name="" id="" onChange={this.personNum.bind(this)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4-10">4-10</option>
                                <option value="10-20">10-20</option>
                            </select>人
                            </span>
                            
                        </li>
                        <li className='addInner'>
                            <p>备注</p>
                            <input type="text" placeholder='可填写附加要求，我们尽量满足' onChange={this.need.bind(this)}/>
                        </li>
                    </ul>
                </main>
                <button className='jiesuan'><Link to='/success?1'>确认支付</Link></button>
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
    key: 'ShowList',
    path: '/showList',
    component: connect(slect)(ShowList)
}