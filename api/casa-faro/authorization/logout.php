<?php
header("Access-Control-Allow-Origin: *");   
header("Content-Type: application/json; charset=UTF-8");    
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");    
header("Access-Control-Max-Age: 3600");    
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"); 

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {    
    return 0;    
}  

require '../dao/UsuariosDao.class.php';
$datos = UsuariosDao::getInstance();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $correcto = true;
    $datosIncorrectos = " hacen falta campos";
    if (empty($_GET['id'])) {
        $correcto = false;
    }

    if($correcto){
        $respuesta = $datos->deleteToken($_GET['id']);
        if($respuesta){
            $response["code"] = 200;
            $response["mensaje"] = "Ok";
            http_response_code(200);
            echo json_encode($response);
        } else {
            $response["code"] = 500;
            $response["mensaje"] = "Error al eliminar el token";
            http_response_code(500);
            echo json_encode($response);
        }
    }else {
        $response["mensaje"] = "Bad request";
        $response["resultado"] = $datosIncorrectos;
        $response["code"] = 400;
        http_response_code(400);
        echo json_encode($response);
    }

} else {
    $response["mensaje"] = "Method Not Allowed";
    $response["code"] = 405;
    http_response_code(405);
    echo json_encode($response);
}