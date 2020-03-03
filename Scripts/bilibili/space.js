let body = $response.body
body = JSON.parse(body)
if (body['data'].hasOwnProperty('ad_source_content_v2')) {
	delete body['data']['ad_source_content_v2']
}
if (body['data'].hasOwnProperty('ad_shop_type')) {
	delete body['data']['ad_shop_type']
}

body = JSON.stringify(body)
$done({body})
