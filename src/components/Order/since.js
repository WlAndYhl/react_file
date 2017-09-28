import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Since extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            telNum: localStorage.getItem('telNumber'),
            sex: 'girl',
            Name: localStorage.getItem('userName')
        })
    }
    changeSex () {
        this.setState({
            sex: this.state.sex==='girl'?'boy':'girl'
        })
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
                    <li>
                        <p>
                            <img src="../../images/yeoman.png" alt=""/>
                        </p>
                        <b><Link to='showList'>外送</Link></b>
                    </li>
                    <li style={{borderBottom: '3px solid red'}}>
                        <p>
                            <img src="../../images/yeoman.png" alt=""/>
                        </p>
                        <b>自提</b>
                    </li>
                </ul>
                <ul className='top1'>
                    <li className='sinceLiOne'>
                        <p>姓名</p>
                        <span><input type="text" defaultValue={this.state.Name}/></span>
                        <span>
                            <b style={{background: this.state.sex==='boy'? 'blue': 'none'}} onClick={this.changeSex.bind(this)}></b>
                            <b style={{background: this.state.sex==='girl'? 'red': 'none'}} onClick={this.changeSex.bind(this)}></b>
                        </span>
                    </li>
                    <li  className='sinceLiTwo'>
                        <p>手机号</p>
                        <span><Link to='/single'>{this.state.telNum}</Link></span>
                    </li>
                    <li  className='sinceLiThree'>
                        <p>取餐时间</p>
                        <span>尽快取餐></span>
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
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4-10</option>
                                <option value="">10-20</option>
                            </select>人
                            </span>
                            
                        </li>
                        <li className='addInner'>
                            <p>备注</p>
                            <input type="text" placeholder='可填写附加要求，我们尽量满足'/>
                        </li>
                    </ul>
                </main>
                <button className='jiesuan'><Link to='/success?2'>确认支付</Link></button>
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
    key: 'since',
    path: '/since',
    component: connect(slect)(Since)
}