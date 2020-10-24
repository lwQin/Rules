let body = JSON.parse($response.body)

if ($request.url.includes('followRoomsOnlineV2')) {
  removeRoomListNoLive(body)
}

body = JSON.stringify(body)
$done({
  body
})

/**
 * 移除关注页直播在放录像的
 * @param {*} body
 */
function removeRoomListNoLive(body) {
  body.data.room_list = body.data.room_list.filter((room) => {
    return room.videoLoop === 0
  })
}
