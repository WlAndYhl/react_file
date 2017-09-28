import React from 'react';
import { Link } from 'react-router-dom';
class Single extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            sex: 'girl',
            show:'none'
        })
    }
    changeSex () {
        this.setState({
            sex: this.state.sex==='girl'?'boy':'girl'
        })
    }
    changeName (ev) {
        localStorage.setItem('userName', ev.target.value)
    }
    changeTel (ev) {
        let reg = /^1[34578]\d{9}$/;
        if(reg.test(ev.target.value)){
           this.setState({
               show:'none'
           })
            localStorage.setItem('telNumber', ev.target.value)
        } else {
            this.setState({
                show:'block'
            })
        }
        
    }
    render () {
        return (
            <div className='single'>
                <header>
                    <ul>
                        <li className='singleOne'><Link to='/since'>〈返回</Link></li>
                        <li className='singleTwo'>个人资料</li>
                        <li  className='singleThree'>···</li>
                    </ul>
                </header>
                <ul className='singInfo'>
                    <li>
                        <p>姓名</p>
                        <span><input type="text" placeholder='请输入姓名' onChange={this.changeName.bind(this)}/></span>
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
                        <span><input type="text" placeholder='请输入手机号码'  onChange={this.changeTel.bind(this)}/></span>
                        
                        <b className='tip' style={{display:this.state.show}}>输入错误</b>
                    </li>
                </ul>
                <button type='button'><Link to='/since'>保存</Link></button>
            </div>
        )
    }
}
export default {
    key: 'single',
    path: '/single',
    component: Single
}