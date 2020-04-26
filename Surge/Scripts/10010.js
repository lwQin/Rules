let body = JSON.parse($response.body)

// accountListData.htm
if ($request.url.includes('accountListData')) {
  if (body.hasOwnProperty('adv')) {
    delete body.adv
  }
} else if ($request.url.includes('indexExpressNewsAndRecommend')) {
  // indexExpressNewsAndRecommend.htm
  delete body.content
  delete body.newsRsp
  delete body.fiveGRsp
} else if ($request.url.includes('messagepush')) {
  // messagepush.html
  body.data = {}
} else {
  // getHomePageAd | getTodayCommendAd
  body = {}
}

body = JSON.stringify(body)
$done({
  body
})