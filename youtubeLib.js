var Youtube = require('youtube-node')
var youTube = new Youtube()

exports.search = function (req, res, next) {
  var keyword = req.query.keyword
  youTube.setKey('AIzaSyCv5kAeAHgj-9uBTBoUv0-92IH_fhmbPTg')

  youTube.search(keyword, 20, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(result, null, 20))
    }
  })
}
