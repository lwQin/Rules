# 什么值得买去广告

```
[MitM]
hostname = homepage-api.smzdm.com, haojia-api.smzdm.com, article-api.smzdm.com

[Script]
http-response ^https?:\/\/(h(aojia|omepage)|article)-api\.smzdm\.com\/home requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/lwQin/Rules/master/Surge/Scripts/smzdm.js
```