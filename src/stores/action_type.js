// 定义action的type 类型
export const GETSUMMONEY = 'GETSUMMONEY';
export const GETADDRESS = 'GETADDRESS';
export const ADDADDRESS = 'ADDADDRESS';
export const CLEAR = 'CLEAR';
// 结算总数
export function getsum (text) {
  return {
    type: GETSUMMONEY,
    text
  }
}
// 收货地址
export function getaddress (text) {
  return {
    type: GETADDRESS,
    text
  }
}
// 新增收货地址
export function addaddress (text) {
  return {
    type: ADDADDRESS,
    text
  }
}
// 清除购物车
export function clear (text) {
  return {
    type: CLEAR,
    text
  }
}