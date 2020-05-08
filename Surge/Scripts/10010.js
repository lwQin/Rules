if ($request.url.indexOf('accountListData.htm') !== -1) {
  let body = JSON.parse($response.body)
  delete body.adv
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('getHomePageAd') !== -1) {
  let body = JSON.stringify({})
  $done({
    body
  })
} else if ($request.url.indexOf('getDataFromService') !== -1) {
  if ($request.method === 'POST') {
    let body = JSON.stringify({})
    $done({
      body
    })
  }
} else if ($request.url.indexOf('indexExpressNewsAndRecommend.htm') !== -1) {
  let body = JSON.parse($response.body)
  body.content = []
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('getTodayCommendAd') !== -1) {
  let body = JSON.stringify({})
  $done({
    body
  })
}