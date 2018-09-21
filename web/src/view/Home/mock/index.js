import Mock from 'mockjs';

Mock.mock('/api/newsMessage', 'get', () => {
	return {
		msg: '【搜狗推出内容平台“搜狗号”，附注册地址】强烈推荐大家先注册一个帐号，占一个坑，免得以后越来越难申请了。毕竟在2019年，搜狗号也要推出广告分成、流量分成。'
	}
})