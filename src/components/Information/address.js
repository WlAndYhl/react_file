import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class Address extends React.Component{
    constructor (...args) {
        super(...args)
        this.state = ({
            telNum: localStorage.getItem('telNumber')
        })
    }
    addtel (ev) {
        localStorage.setItem('telInfo', ev.target.innerText)
    }
    addaddress (ev) {
        localStorage.setItem('addressInfo', ev.target.innerText)
    }
    render () {
        const { text } = this.props
        return (
            <div className='address'>
                <header>
                    <ul>
                        <li className='addressOne'><Link to='/home'>&times;</Link></li>
                        <li className='addressTwo'>新增地址</li>
                        <li  className='addressThree'>···</li>
                    </ul>
                </header>
                <main>
                    <ul>
                        {text.address.map((val,ind)=>{
                            return <li key={ind}>
                                <dl>
                                    <dt onClick={this.addtel.bind(this)}>{val.name}  {this.state.telNum}</dt>
                                    <dd onClick={this.addaddress.bind(this)}>{val.onlyAddress}</dd>
                                </dl>
                                <p>
                                    <Link to={'changeInformation?'+ind}><img src="../../images/u2555.png" alt=""/></Link>
                                </p>
                            </li>
                        })}
                        
                    </ul>
                </main>
                <footer>
                    <button type='button'><Link to='addNewAddress'>新增收货地址</Link></button>
                </footer>
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
    key: 'address',
    path: '/address',
    component: connect(slect)(Address)
}