const whiteList = ['/user/login'];

export function login(req, res, next) {
    const username = req.session.username;
    if (username) {
        next();
    } else {
        if (whiteList.indexOf(req.path) >= 0) {
            next()
        } else {
            res.location('/login');
            next()
        }
    }
};