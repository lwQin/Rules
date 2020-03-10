let body = JSON.parse($response.body)

if ($request.url.startsWith('https://app.bilibili.com/x/v2/feed/index?access_key')) {
  feed(body)
}
if ($request.url.startsWith('https://app.bilibili.com/x/v2/space?access_key')) {
  space(body)
}
if ($request.url.startsWith('https://app.bilibili.com/x/resource/show/tab?access_key')) {
  tab(body)
}
if ($request.url.startsWith('https://app.bilibili.com/x/v2/account/mine?access_key')) {
  mine(body)
}
if ($request.url.startsWith('https://app.bilibili.com/x/v2/view?access_key')) {
  view(body)
}

body = JSON.stringify(body)
$done({
  body
})

/**
 * 首页 banner 与信息流去广告
 * @param {*} body 
 */
function feed(body) {
  let newItems = body.data.items.filter((item) => {
    if (item.hasOwnProperty('banner_item')) {
      // banner
      let newBanners = item.banner_item.filter(banner => !(banner.hasOwnProperty('is_ad') || banner.hasOwnProperty('ad_cb')))
      item.banner_item = newBanners
    }
    // 信息流
    return !item.hasOwnProperty('ad_info')
  })
  body.data.items = newItems
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
 * 去顶部游戏中心, 自定义顶部 tab
 * @param {*} body 
 */
function tab(body) {
  const topTabNameWhiteList = ['直播', '推荐', '热门', '追番', '影视', '学习区']
  let topTab = body.data.tab.filter(tab => topTabNameWhiteList.includes(tab.name))
  body.data.tab = topTab

  let top = body.data.top.filter(top => top.name === '消息')
  body.data.top = top

  const bottomNameWhiteList = ['首页', '频道', '动态', '我的']
  let bottom = body.data.bottom.filter(bottom => bottomNameWhiteList.includes(bottom.name))
  body.data.bottom = bottom
}

/**
 * 去除底部大会员 tab, 去除“我的” tab 中去除多余项
 * @param {*} body
 */
function mine(body) {
  let sections = body.data.sections.filter((section) => {
    const titleWhiteList = ['离线缓存', '历史记录', '我的收藏', '稍后再看', '我的钱包', '大会员', '我的客服']
    let items = section.items.filter(item => titleWhiteList.includes(item.title))
    section.items = items

    return section.title !== '创作中心'
  })
  body.data.sections = sections
}

/**
 * 视频页相关视频去广告
 * @param {*} body 
 */
function view(body) {
  delete body.data.cms
  let relates = body.data.relates.filter(relate => !relate.hasOwnProperty('is_ad') && relate.hasOwnProperty('aid'))
  body.data.relates = relates
}