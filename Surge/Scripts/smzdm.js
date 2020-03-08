let body = = JSON.parse($response.body)

// banner 广告
// 首页 - 推荐 | 好价
if (body['data'].hasOwnProperty('banner')) {
  let banner = body['data']['banner']
  if (banner.hasOwnProperty('big_banner')) {
    banner['big_banner'].forEach((element, index) => {
      if (element['source_from'] === 2 || element['title'] === '') {
        banner['big_banner'].splice(index, 1)
      }
    })
  }
}

// 社区 - 好文
if (body['data'].hasOwnProperty('big_banner')) {
  body['data']['big_banner'].forEach((element, index) => {
    if (element['source_from'] === 2 || element['title'] === '') {
      body['data']['big_banner'].splice(index, 1)
    }
  })
}

// 信息流广告
if (body['data'].hasOwnProperty('rows')) {
  body['data']['rows'].forEach((element, index) => {
    if (element['model_type'] === 'ads' || element['tag'] === '广告') {
      body['data']['rows'].splice(index, 1)
    }
  })
}

body = JSON.stringify(body)
$done({
  body
})