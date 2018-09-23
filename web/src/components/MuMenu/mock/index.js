import Mock from 'mockjs';

Mock.mock('/api/leftNavs', 'get', () => {
    return {
        data: [
            {
                name: '全站首页',
                icon: 'home'
            },
            {
                name: '站长新闻',
                icon: 'news'
            },
            {
                name: '好文分享',
                icon: 'book'
            },
            {
                name: '段子来了',
                icon: 'menu'
            },
            {
                name: '科技资讯',
                icon: 'fire'
            },
            {
                name: '博客大全',
                icon: 'blog'
            },
            {
                name: '站长交流',
                icon: 'pen'
            },
            {
                name: '投稿中心1',
                icon: 'person'
            }
        ]
    };
});
