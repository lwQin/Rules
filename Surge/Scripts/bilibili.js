/**
 * 去顶部游戏中心, 自定义顶部 tab
 * @param {*} body
 */
function tab(body) {
  const topTabNameWhiteList = ['直播', '推荐', '热门', '追番']
  let topTab = body.data.tab.filter(tab => topTabNameWhiteList.includes(tab.name))
  body.data.tab = topTab

  let top = body.data.top.filter(top => top.name === '消息')
  body.data.top = top

  const bottomNameWhiteList = ['首页', '频道', '动态', '我的']
  let bottom = body.data.bottom.filter(bottom => bottomNameWhiteList.includes(bottom.name))
  body.data.bottom = bottom
}

/**
 * 首页 banner 与信息流去广告
 * @param {*} body
 */
function feed(body) {
  let newItems = body.data.items.filter((item) => {
    if (item.banner_item) {
      // banner
      let newBanners = item.banner_item.filter(banner => !(banner.is_ad || banner.ad_cb))
      item.banner_item = newBanners
    }
    // 信息流
    return !item.ad_info
  })
  body.data.items = newItems
}

/**
 * 去除“我的” tab 中去除多余项
 * @param {*} body
 */
function mine(body) {
  let sections = body.data.sections_v2.filter((section) => {
    if (section.title) {
      const titleWhiteList = ['创作首页', '稿件管理', '个性装扮', '我的钱包', '会员购中心', '联系客服', '设置']
      let items = section.items.filter(item => titleWhiteList.includes(item.title))
      section.items = items
    }
    return true
  })
  body.data.sections_v2 = sections
}

/**
 * 动态去除热门话题
 * @param {*} body
 */
function hotEntry(body) {
  body.data = {}
}

/**
 * 视频页相关视频去广告
 * @param {*} body
 */
function view(body) {
  delete body.data.cms
  let relates = body.data.relates.filter(relate => !relate.is_ad && relate.aid)
  body.data.relates = relates
}

/**
 * 动态信息流去广告
 * @param {*} body
 */
function dynamic(body) {
  let cards = []
  let oldCards = body.data.cards
  oldCards.forEach(elememt => {
    let cardDetail = JSON.parse(elememt.card)
    if (!cardDetail.hasOwnProperty('ad_ctx')) {
      cards.push(elememt)
    }
  });
  body.data.cards = cards
}

/**
 * 去除空间页面推广橱窗
 * @param {*} body
 */
function space(body) {
  delete body.data.ad_source_content_v2
  delete body.data.ad_shop_type
}

/**
 * 去除动态页非直播 up
 * @param {*} body
 */
function uplist(body) {
  let list = body.data.list.filter(e => {
    e.type === 1
  })
  body.data.list = list
}

if ($request.url.indexOf('/resource/show/tab') !== -1) {
  let body = JSON.parse($response.body)
  tab(body)
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('/feed/index') !== -1) {
  let body = JSON.parse($response.body)
  feed(body)
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('/account/mine') !== -1) {
  let body = JSON.parse($response.body)
  mine(body)
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('/topic_svr/hot_entry') !== -1) {
  let body = JSON.parse($response.body)
  hotEntry(body)
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('/view') !== -1) {
  let body = JSON.parse($response.body)
  view(body)
  body = JSON.stringify(body)
  $done({
    body
  })
} else if ($request.url.indexOf('/dynamic_svr/v1/dynamic_svr/mix_uplist') !== -1) {
  let body = JSON.parse($response.body)
  uplist(body)
  body = JSON.stringify(body)
  $done({
    body
  })
}
// else if ($request.url.indexOf('/dynamic_svr/dynamic_new') !== -1) {
//   let body = JSON.parse($response.body)
//   dynamic(body)
//   body = JSON.stringify(body)
//   $done({
//     body
//   })
// }