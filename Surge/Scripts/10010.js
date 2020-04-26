let body

if ($request.url.indexOf('accountListData.htm')) {
  body = JSON.parse($response.body)
  if (body.hasOwnProperty('adv')) {
    delete body.adv
  }
} else {
  body = JSON.stringify({})
}

$done({
  body
})