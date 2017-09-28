import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getaddress } from '../../stores/action_type'
class ChangeInformation extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            telNum: localStorage.getItem('telNumber'),
            sex: 'girl',
            num: location.href.split('?')[1],
            changeName: '',
            changeAddress: ''
        })
    }
    changeSex () {
        this.setState({
            sex: this.state.sex==='girl'?'boy':'girl'
        })
    }
    changeInfor1 (ev) {
        this.setState({
            changeName: ev.target.value
        })
    }
    changeInfor2 (ev) {
        this.setState({
            changeAddress: ev.target.value
        })
    }
    render () {
        const { dispatch, text } = this.props
        return (
            <div className='changeInformation'>
                <header>
                    <ul>
                        <li className='changeInformationOne'><Link to='/address'>&times;</Link></li>
                        <li className='changeInformationTwo'>编辑地址</li>
                        <li  className='changeInformationThree'>···</li>
                    </ul>
                </header>
                <ul>
                    <li>
                        <p>姓名</p>
                        <span><input type="text" defaultValue={text.address[this.state.num].name} onChange={this.changeInfor1.bind(this)}/></span>
                    </li>
                    <li>
                        <p>性别</p>
                        <span>
                            <b style={{background: this.state.sex==='boy'? 'blue': 'none'}} onClick={this.changeSex.bind(this)}></b>
                            <b style={{background: this.state.sex==='girl'? 'red': 'none'}} onClick={this.changeSex.bind(this)}></b>
                        </span>
                    </li>
                    <li>
                        <p>联系电话</p>
                        <span>{this.state.telNum}</span>
                    </li>
                    <li>
                        <p>收货地址</p>
                        <dl>
                            <dt><input type="text" defaultValue={text.address[this.state.num].onlyAddress} onChange={this.changeInfor2.bind(this)}/></dt>
                            <dd><Link to='getUrl'>></Link></dd>
                        </dl>
                    </li>
                    <li>
                        <p>详细地址</p>
                        <span>
                            T-16
                        </span>
                    </li>
                </ul>
                <button type='button' onClick = {()=>{
                    dispatch(getaddress({name: this.state.changeName, onlyAddress: this.state.changeAddress, num: this.state.num}))
                }}><Link to='/address'>保存</Link></button>
            </div>
        )
    }
}
function slect (state) {
    return {
        text: state.getaddress
    }
}
export default {
    key: 'changeInformation',
    path: '/changeInformation',
    component: connect(slect)(ChangeInformation)
}