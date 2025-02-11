<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    return 0;
}

require '../dao/UtilsDao.class.php';
$datos = UtilsDao::getInstance();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $count = empty($_GET['count'])?4:$_GET['count'];

    $sundays = array();
    for($i=0;$i<$count;$i++){
        $result = date('Y-m-d',strtotime('last sunday'.($i==0?'':' -'.($i*7).' days'))); 
        $sundays[] = $result;
    }
    $response['sundays'] = $sundays;
    $response['count'] = $count;
    $response["mensaje"] = "Ok";
    $response["code"] = 200;
    http_response_code(200);
    echo json_encode($response);
}