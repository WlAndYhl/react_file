import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addaddress } from '../../stores/action_type';
class AddNew extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            telNum: localStorage.getItem('telNumber'),
            sex: 'girl'
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
    changeSex () {
        this.setState({
            sex: this.state.sex==='girl'?'boy':'girl'
        })
    }
    render(){
        const { dispatch } = this.props
        return (
            <div className='addNew'>
                <header>
                    <ul>
                        <li className='addNewOne'><Link to='/address'>&times;</Link></li>
                        <li className='addNewTwo'>新增地址</li>
                        <li  className='addNewThree'>···</li>
                    </ul>
                </header>
                <ul>
                    <li>
                        <p>姓名</p>
                        <span><input type="text" defaultValue='请输入姓名' onChange={this.changeInfor1.bind(this)}/></span>
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
                            <dt><input type="text" defaultValue='请选择收货地址' onChange={this.changeInfor2.bind(this)}/></dt>
                            <dd><Link to='getUrl'>></Link></dd>
                        </dl>
                    </li>
                    <li>
                        <p>详细地址</p>
                        <span>
                            <input type="text" defaultValue='请输入门牌/楼层/等'/>
                        </span>
                    </li>
                </ul>
                <button type='button' onClick = {()=>{
                    dispatch(addaddress({name: this.state.changeName, onlyAddress: this.state.changeAddress}))
                }}><Link to='/address'>保存</Link></button>
            </div>
        )
    }
}
function slect (state) {
    return {
        text: state.addaddress
    }
}
export default {
    key: 'addnew',
    path: '/addNewAddress',
    component: connect(slect)(AddNew)
}