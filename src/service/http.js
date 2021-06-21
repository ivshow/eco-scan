/*
 * @Author : jaydon
 * @Date   : 2020-10-29 11:16
 * @WeChat : i-vshow
 * @Email  : vshow@huxiaodo.com
 * @Blog   : http://g.huxiaodo.com
 */

import axios from 'axios';
import ls from 'local-storage';
import { $vuex } from '@/plugins';
import { Toast } from 'vant';

const baseURL = '/api/WS/sys.aspx';

const defaultOptions = {
  loading: true
};

const setLoading = value => $vuex('vuex_loading', value);

const http = async (method, params, options) => {
  const { loading } = Object.assign({}, defaultOptions, options);

  loading &&
    Toast.loading({
      message: '加载中...',
      duration: 0,
      forbidClick: true,
      loadingType: 'spinner'
    });

  setLoading(true);

  try {
    const res = await axios({
      ...params,
      method,
      url: baseURL,
      headers: {
        token: ls('token')
      }
    });

    const { success, msgtext, data } = res.data;

    if (!success) {
      throw new Error(msgtext);
    }

    Toast.clear();
    return data;
  } catch ({ message }) {
    Toast.fail(message);
    return Promise.reject(message);
  } finally {
    setLoading(false);
  }
};

const get = (params, options) => http('get', { params }, options);
const post = (data, options) => http('post', { data }, options);

export default {
  get,
  post
};
