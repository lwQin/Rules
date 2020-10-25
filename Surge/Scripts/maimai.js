/**
 * 实名区信息流去广告
 * @param {*} body 
 */
function focuesFeed(body) {
  body.feeds = body.feeds.filter((item) => {
      if(item.style1) {
          if (item.style1.ad_card) {
              return false
          }
      }
      return true
  })
}


let body = JSON.parse($response.body)

if ($request.url.includes('/focus_feed')) {
  focuesFeed(body)
}

body = JSON.stringify(body)
$done({
  body
})