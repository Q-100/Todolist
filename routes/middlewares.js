exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(403).send('로그인 필요');
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    next();
  } else {
    const message = encodeURIComponent('로그인한상태로 뒤로가기 누를 시 재접속이 불가능합니다.');
    // res.redirect(`/?error=${message}`);
    req.logout();
    req.session.destroy();
    res.redirect('/');
  }
};
