import React from 'react';
var classNames = require('classnames');
class Login extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            GetYZMInner: '获取验证码',
            getYzm: false,
            sureLog: true
        })
    }
    getTel() {
        let reg = /^1[34578]\d{9}$/;
        let telInner = this.refs.telInner;
        if (reg.test(telInner.value)) {
            this.setState({
                getYzm: true
            })
        } else {
            this.setState({
                getYzm: false,
                sureLog: true
            })
        }
    }
    getYzmClick () {
        let reg = /^1[34578]\d{9}$/;
        let telInner = this.refs.telInner;
        if (reg.test(telInner.value)) {
            let time = null;
            let s = 6;
            time = setInterval (() => {
                s--;
                if (s <= 0) {
                    clearInterval(time)
                }
                this.setState({
                    GetYZMInner: s <= 0 ? '获取验证码' : s + 's后获取验证码',
                    getYzm: s <= 0 ? true : false
                })
            }, 1000)
        }
    }
    getYzmInnerClick () {
        let yzmInner = this.refs.yzm;
        if(yzmInner.value.length>=4 && this.state.getYzm){
            this.setState({
                sureLog: false
            })
        } else {
            this.setState({
                sureLog: true
            })
        }
    }
    gitlog () {
        location.href='home';
        let telInner = this.refs.telInner;
        localStorage.setItem('telNumber', telInner.value);
    }
    render () {
        var classes = classNames({
          'getYzm':this.state.getYzm,
          'checkLog': this.state.sureLog
        })
        return (
            <div className='login'>
                <header>
                    <ul>
                        <li className='loginHeaderOne'>
                            <span>〈</span>
                            <span>返回</span>
                            <span>关闭</span>
                        </li>
                        <li className='loginHeaderTwo'>
                            <p>会员注册</p>
                        </li>
                        <li className='loginHeaderThree'>
                            <span>···</span>
                        </li>
                    </ul>
                </header>
                <main>
                    <form className='telForm'>
                        <input type="text" placeholder='手机号' onKeyUp={this.getTel.bind(this)} ref='telInner'/>
                    </form>
                    <form className='yzmForm'>
                        <input type="text" placeholder='验证码' ref='yzm' onKeyUp={this.getYzmInnerClick.bind(this)} />
                        <button type='button' className={classes} disabled={!this.state.getYzm} onClick={this.getYzmClick.bind(this)}>{this.state.GetYZMInner}</button>
                    </form>
                    <p className='loginTip'>没有收到验证码？<span onClick={this.getYzmClick.bind(this)}>获取语音验证码</span></p>
                    <button type='button' className='log' disabled={this.state.sureLog} onClick={this.gitlog.bind(this)}>登录</button>
                </main>
            </div>
        )
    }
}
export default {
    key: 'Login',
    path: '/login',
    component: Login
}