let body = JSON.parse($response.body)

if ($request.url.startsWith('https://capi.douyucdn.cn/lapi/athena/room/mFollowed?')) {
  room(body)
}

body = JSON.stringify(body)
$done({
  body
})

/**
 * 关注页去除可能感兴趣
 * @param {*} body
 */
function room(body) {
  body.data = []
}