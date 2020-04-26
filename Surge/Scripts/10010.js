let body = JSON.parse($response.body)

if ($request.url.indexOf('accountListData.htm')) {
  if (body.hasOwnProperty('adv')) {
    delete body.adv
  }
} else {
  body = {}
}

body = JSON.stringify(body)
$done({
  body
})