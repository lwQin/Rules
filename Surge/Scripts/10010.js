let body

if ($request.url.indexOf('accountListData.htm')) {
  body = JSON.parse($response.body)
  if (body.hasOwnProperty('adv')) {
    delete body.adv
    body = JSON.stringify(body)
  }
} else {
  body = JSON.stringify({})
}

$done({
  body
})