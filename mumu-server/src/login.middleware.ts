export function login(req, res, next) {
    if(req.sessionId) {
        next();
    } else {
        if (req.path === '/login') {
            next()
        } else {
            res.location('http://localhost:9528/#/login');
            next()
        }



        // 跳转到登录页面 或者 跳转到当前登录页
        // req.setAttribute('url','http://localhost:9528/#/login')
    }
};