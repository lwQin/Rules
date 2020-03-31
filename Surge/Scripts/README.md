# bilibili 去广告

基于 [onewayticket255](https://github.com/onewayticket255/Surge-Script) 规则修改

```
[MitM]
hostname = app.bilibili.com, api.vc.bilibili.com

[Script]
http-response ^https?:\/\/app\.bilibili\.com\/x\/(v2\/(feed\/index|space|account\/mine|view)|resource\/show\/tab)\?access_key requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/lwQin/Rules/master/Surge/Scripts/bilibili.js
http-response ^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_history\?access_key requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/lwQin/Rules/master/Surge/Scripts/bilibili.js,script-update-interval=360
```

# 什么值得买去广告

```
[MitM]
hostname = homepage-api.smzdm.com, haojia-api.smzdm.com, article-api.smzdm.com

[Script]
http-response ^https?:\/\/(h(aojia|omepage)|article)-api\.smzdm\.com\/home requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/lwQin/Rules/master/Surge/Scripts/smzdm.js
```

#斗鱼去广告

```
[MitM]
hostname = capi.douyucdn.cn

[Script]
http-response ^https?:\/\/capi\.douyucdn\.cn\/lapi\/athena\/room\/mFollowed\?client_sys requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/lwQin/Rules/master/Surge/Scripts/douyu.js
```
