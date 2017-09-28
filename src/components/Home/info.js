import React from 'react';
import { Link } from 'react-router-dom';
class Info extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            telNumber: localStorage.getItem('telNumber'),
            imgSrc: '../../images/yeoman.png',
            userName: localStorage.getItem('userName')
        })
    }
    addImg () {
        let add = this.refs.addImg;
        // let imgUrl = this.refs.imgSrc;
        var windowURL = window.URL || window.webkitURL;
        var dataURL = windowURL.createObjectURL(add.files[0]);
        localStorage.setItem('ImgSrc', dataURL);
        this.setState({
            imgSrc: dataURL
        })
        // imgUrl.src=dataURL;
    }
    changeName () {
        let user = this.refs.userNames;
        this.setState({
            userName: user.value
        })
        localStorage.setItem('userName', user.value);
    }
    render () {
        return (
            <div className='Info'>
                <div className="userInfo">
                    <ul>
                        <li className='userInfoOne'>
                            <p>头像</p>
                            <span>
                                <b className='titHead'>
                                    <input type="file" onChange={this.addImg.bind(this)} ref='addImg' />
                                    <img ref='imgSrc' src={this.state.imgSrc}/>
                                </b>
                            </span>
                        </li>
                        <li className='userInfoTwo'>
                            <p>昵称</p>
                            <span><input type="text" defaultValue={this.state.userName} onBlur={this.changeName.bind(this)} ref='userNames'/></span>
                        </li>
                        <li className='userInfoThree'>
                            <p>性别</p>
                            <span>
                                <select name="" id="">
                                    <option value="">男</option>
                                    <option value="">女</option>
                                </select>
                            </span>
                            
                        </li>
                        <li className='userInfoFour'>
                            <p>联系电话</p>
                            <span>{this.state.telNumber}</span>
                        </li>
                    </ul>
                    <Link to='/home' className='save'><button type='button'>保存</button></Link>
                </div>
            </div>
        )
    }
}
export default {
    key: 'Info',
    path: '/info',
    component: Info
}