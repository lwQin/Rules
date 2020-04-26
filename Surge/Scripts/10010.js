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
  // messagepush.htm
  body.data = {}
} else if ($request.url.includes('getDataFromService')) {
  // getDataFromService.htm
  if ($request.method === 'POST' && body.hasOwnProperty('data')) {
    delete body.data
  } else if ($request.method === 'GET') {
    body = {}
  }
} else {
  // getHomePageAd | getTodayCommendAd
  body = {}
}

body = (body === undefined || body === null || body === '') ? {} : JSON.stringify(body)
$done({
  body
})