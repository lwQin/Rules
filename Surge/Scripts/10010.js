console.log($request.method);
console.log($request.url);
if ($request.url.indexOf("accountListData.htm") && $response.body) {
  let body = JSON.parse($response.body);
  console.log(body);
  delete body.adv;
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.indexOf("indexExpressNewsAndRecommend.htm") && $response.body) {
  let body = JSON.parse($response.body);
  console.log(body);
  body.content = [];
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.indexOf("getHomePageAd") && $response.body) {
  let body = {};
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.indexOf("getTodayCommendAd") && $response.body) {
  let body = {};
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.indexOf("getDataFromService") && $response.body) {
  if ($request.method === "POST") {
    let body = {};
    body = JSON.stringify(body);
    console.log(body)
    $done({
      body
    });
  }
}