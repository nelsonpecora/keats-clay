module.exports = function (router, composer) {
  router.get(':name', function (req, res, next) {
    console.log(req.user)
    next();
  })
  router.get('/', composer);
  router.get('/:name', composer);
  return router;
};
