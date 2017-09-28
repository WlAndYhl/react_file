import axios from'axios'
import MockAdapter from 'axios-mock-adapter'
import {MenuList} from './data/shop'
var mock = new MockAdapter(axios);

mock.onGet('/users').reply(config => {
   return new Promise(function(resolve, reject) {
        resolve([200,{
            users: MenuList
        }]);
  });
});