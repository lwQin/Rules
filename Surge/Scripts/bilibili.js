console.log('bilibili request url:' + $request.url)
let body = JSON.parse($response.body)

// 首页 banner 与信息流
let newItems = body['data']['items'].filter((item) => {
  if (item.hasOwnProperty('banner_item')) {
    // banner
    let newBanners = item['banner_item'].filter(banner => !(banner.hasOwnProperty('is_ad') || banner.hasOwnProperty('ad_cb')))
    item['banner_item'] = newBanners
  }
  // 信息流
  return !item.hasOwnProperty('ad_info')
})
body['data']['items'] = newItems

// 空间页面推广橱窗
if (body['data'].hasOwnProperty('ad_source_content_v2')) {
  delete body['data']['ad_source_content_v2']
}
if (body['data'].hasOwnProperty('ad_shop_type')) {
  delete body['data']['ad_shop_type']
}

body = JSON.stringify(body)
$done({
  body
})