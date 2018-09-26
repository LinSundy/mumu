import Mock from 'mockjs'

Mock.mock('/api/newsMessage', 'get', () => {
  return {
    msg:
      '【搜狗推出内容平台“搜狗号”，附注册地址】强烈推荐大家先注册一个帐号，占一个坑，免得以后越来越难申请了。毕竟在2019年，搜狗号也要推出广告分成、流量分成。'
  }
})

Mock.mock('/api/homeNews', 'get', () => {
  let data = Mock.mock({
    'data|10': [
      {
        title: '@ctitle(8, 14)',
        desc: '@cparagraph',
        date: '@date',
        author: '@cname',
        'scan|10-100': 30,
        'comment|1-50': 1
      }
    ]
  })
  return data
})

Mock.mock('/api/hot', 'get', () => {
  return Mock.mock({
    'data|7': [{
      'title': '@csentence'
    }]
  })
})

Mock.mock('/api/hotComment', 'get', () => {
  return Mock.mock({
    'data|7': [{
      'title': '@csentence'
    }]
  })
})

Mock.mock('/api/links', 'get', () => {
  return Mock.mock({
    'data|7': [{
      'title': '@ctitle(3, 5)'
    }]
  })
})
