let body = JSON.parse($response.body)

if ($request.url.includes('accountListData')) {
  if (body.hasOwnProperty('adv')) {
    delete body.adv
  }
} else if ($request.url.includes('messagepush')) {
  body.data = {}
} else {
  body = {}
}

body = JSON.stringify(body)
$done({
  body
})