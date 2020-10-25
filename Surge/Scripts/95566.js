let body = JSON.parse($response.body)

body.result = []

body = JSON.stringify(body)
$done({
  body
})
