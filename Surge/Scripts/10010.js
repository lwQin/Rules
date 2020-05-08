console.log($request.method)
console.log($request.url)
console.log($response.body)
if ($request.url.indexOf('accountListData.htm')) {
  let body = JSON.parse($response.body)
  delete body.adv
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('indexExpressNewsAndRecommend.htm')) {
  let body = JSON.parse($response.body)
  body.content = []
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('getHomePageAd')) {
  let body = JSON.stringify({})
  $done({
    body
  })
} else if ($request.url.indexOf('getTodayCommendAd')) {
  let body = JSON.stringify({})
  $done({
    body
  })
} else if ($request.url.indexOf('getDataFromService')) {
  console.log($request.method)
  if ($request.method === 'POST') {
    let body = JSON.stringify({})
    $done({
      body
    })
  }
}