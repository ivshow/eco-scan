/*
 * @Author : jaydon
 * @Date   : 2021-06-19 18:46
 * @WeChat : i-vshow
 * @Email  : vshow@huxiaodo.com
 * @Blog   : http://g.huxiaodo.com
 */

import http from '../http';

export const login = user => http.get({ cmd: 'login', ...user });
export const getProductsByBox = id => http.get({ cmd: 'GetProductsByBox', BoxNo: id });
export const getProductsInfo = id => http.get({ cmd: 'GetProductsInfo', qrc: id });
