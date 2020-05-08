console.log($request.method);
console.log($request.url);
if ($request.url.includes("accountListData.htm") && $response.body) {
  let body = JSON.parse($response.body);
  console.log(body);
  delete body.adv;
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.includes("indexExpressNewsAndRecommend.htm") && $response.body) {
  let body = JSON.parse($response.body);
  console.log(body);
  body.content = [];
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.includes("getHomePageAd") && $response.body) {
  let body = {};
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.includes("getTodayCommendAd") && $response.body) {
  let body = {};
  body = JSON.stringify(body);
  console.log(body);
  $done({
    body
  });
} else if ($request.url.includes("getDataFromService") && $response.body) {
  if ($request.method === "POST") {
    let body = {};
    body = JSON.stringify(body);
    console.log(body)
    $done({
      body
    });
  }
}