let body = JSON.parse($response.body)

console.log($request.url)
if ($request.url.startsWith('https://capi.douyucdn.cn/lapi/athena/room/mFollowed?')) {
  room(body)
} else if ($request.url.startsWith('https://apiv3.douyucdn.cn/mgapi/livenc/mcenter/followRoomsOnlineV2?')) {
  console.log(1)
  removeRoomListNoLive(body)
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

/**
 * 移除关注页直播在放录像的
 * @param {*} body
 */
function removeRoomListNoLive(body) {
  body.data.room_list.filter((room) => {
    return room.videoLoop === 0
  })
  console.log(body.data)
}
