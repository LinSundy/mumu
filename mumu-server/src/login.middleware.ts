const whiteList = ['/user/login'];

export function login(req, res, next) {
    const sessionUsername = !!req.session.username;
    if (sessionUsername) {
        next();
    } else {
        if (whiteList.indexOf(req.path) >= 0) {
            next()
        } else {
            res.send({status: 10000, statusText: '用户未登录'});
        }
    }
};