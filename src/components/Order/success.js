import React from 'react';
import { connect } from 'react-redux';
class Success extends React.Component{
    componentDidMount () {
        let that = this
        setTimeout(function() {
           if(location.href.split('?')[1] === '1'){
                that.props.history.push('/detail')
            } else if(location.href.split('?')[1] === '2'){
                that.props.history.push('/detailBymyself')
            }
        }, 3000);
        
    }
    render () {
        const { text } = this.props
        let price = 0;
        text.food.forEach((val)=>{
            price +=Number(val.price)
        })
        return (
            <div className='success'>
                <p className='img'>
                    <img src="../../images/yeoman.png" alt=""/>
                </p>
                <dl>
                    <dt>￥{price}</dt>
                    <dd>支付成功</dd>
                </dl>
                <ul>
                    <li>
                        <p>订单金额</p>
                        <b>￥{price}</b>
                    </li>
                    <li>
                        <p>优惠明细</p>
                        <b>0</b>
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
    key: 'success',
    path: '/success',
    component: connect(slect)(Success)
}