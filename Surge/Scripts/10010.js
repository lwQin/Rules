console.log($request.method);
console.log($request.url);
console.log($response.body);
if ($request.url.indexOf("accountListData.htm") && $response.body) {
  let body = JSON.parse($response.body);
  delete body.adv;
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body,
  });
} else if ( $request.url.indexOf("indexExpressNewsAndRecommend.htm") && $response.body ) {
  let body = JSON.parse($response.body);
  body.content = [];
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body,
  });
} else if ($request.url.indexOf("getHomePageAd") && $response.body) {
  let body = JSON.stringify({});
  console.log(body);
  $done({
    body,
  });
} else if ($request.url.indexOf("getTodayCommendAd") && $response.body) {
  let body = JSON.stringify({});
  console.log(body);
  $done({
    body,
  });
} else if ($request.url.indexOf("getDataFromService") && $response.body) {
  if ($request.method === "POST") {
    let body = JSON.stringify({});
    console.log(body)
    $done({
      body,
    });
  }
}
