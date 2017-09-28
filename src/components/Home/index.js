import React from 'react';
import { Link } from 'react-router-dom';
class Home extends React.Component{
    constructor (...args) {
        super(...args);
        let num = localStorage.getItem('telNumber');
        let newNum = '';
        for (var i = 0;i < num.length; i ++) {
            if(i>=3 && i<=6){
                newNum+='*'
            } else {
                newNum+=num[i];
            }
            
        }
        this.state = ({
            number: newNum,
            imgSrc: localStorage.getItem('ImgSrc'),
            userName: localStorage.getItem('userName')
        })
    }
    render () {         
        return (
            <div className='myCenter'>
                <header>
                    <p>会员中心</p>
                </header>
                <main>
                    <div className="userInfo">
                        <ul>
                            <li className='userInfoOne'>
                                <p>
                                    <img src={this.state.imgSrc} alt="" className='showImg'/>
                                </p>
                            </li>
                            <li className='userInfoTwo'>
                                <p>{this.state.userName}</p>
                                <dl>
                                    <dt>{this.state.number}</dt>
                                </dl>
                            </li>
                            <li className='userInfoThree'>
                                <p>
                                    <img src="../../images/u4526.png" alt=""/>
                                </p>
                            </li>
                            <li className='userInfoFour'>
                                <Link to='/info'>〉</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="centerList">
                        <ul>
                            <li>
                                <p>开始点餐</p>
                                <span><Link to='/buyFoot'>〉</Link></span>
                            </li>
                            <li>
                                <p>我的收货地址</p>
                                <span><Link to='/address'>〉</Link></span>
                            </li>
                        </ul>
                    </div>
                    
                </main>
            </div>
        )
    }
}
export default {
    key: 'Home',
    path: '/home',
    component: Home
}