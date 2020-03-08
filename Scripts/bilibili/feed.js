let body = $response.body
body = JSON.parse(body)
body['data']['items'].forEach((element, index) => {
	if (element.hasOwnProperty('ad_info')) {
		body['data']['items'].splice(index, 1)
	}
})
body = JSON.stringify(body)
$done({
	body
})