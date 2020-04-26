let body = JSON.parse($response.body)

if ($request.url.indexOf('accountListData.htm') === -1) {
  body = {}
} else {
  if (body.hasOwnProperty('adv')) {
    delete body.adv
  }
}

body = JSON.stringify(body)
$done({
  body
})