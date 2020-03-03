# 首页信息流去广告

```
[MitM]
hostname = app.bilibili.com

[Script]
http-response https://app.bilibili.com/x/v2/feed/index\?access_key requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/lwQin/Rules/master/Scripts/bilibili/feed.js
```

# 去除空间页面推广橱窗

```
[MitM]
hostname = app.bilibili.com

[Script]
http-response https://raw.githubusercontent.com/lwQin/Rules/master/Scripts/bilibili/space.js
```
