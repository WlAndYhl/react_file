import React from 'react';
import { Link } from 'react-router-dom';
class GetUrl extends React.Component{
    componentDidMount () {
        var BMap = window.BMap
        var map = new BMap.Map('allmap'); // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity('北京'); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    }
    render () {
        return(
            <div className='geturl'>
                <header>
                    <ul>
                        <li className='geturlOne'><Link to='/address'>&times;</Link></li>
                        <li className='geturlTwo'>选择位置</li>
                        <li  className='geturlThree'>···</li>
                    </ul>
                </header>
                <div className="search">
                    <p>北京<span>∨</span></p>
                    <input type="text" placeholder='请输入收货位置'/>
                </div>
                <div className='map' id='allmap' style={{width: '100%',height: '20rem', marginTop:'10px'}}>
                </div>
            </div>
        )
    }
}
export default {
    key: 'getUrl',
    path: '/getUrl',
    component: GetUrl
}