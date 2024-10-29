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

require '../dao/PersonasDao.class.php';
$datos = PersonasDao::getInstance();

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $id = $_GET['id'];
    if (empty($id)) {
        $i = 0;
        $personas = $datos->getPersonas();
        foreach($personas as $persona){
            $personas[$i++] = getData($datos,$persona);
        }
        $response['personas'] = $personas;
        $response["mensaje"] = "Ok";
        $response["code"] = 200;
        http_response_code(200);
        echo json_encode($response);
    } else {
        $persona = $datos->getPersonaById($id);
        $response['persona'] = getData($datos,$persona[0]);
        $response["mensaje"] = "Ok";
        $response["code"] = 200;
        http_response_code(200);
        echo json_encode($response);
    }
} 
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE);

    $correcto = true;
    $datosIncorrectos = " Hace falta uno o varios campos";
    if (empty($input['nombre'])) {
        $correcto = false;
    }

    if ($correcto) {
        $nombre = !empty($input['nombre']) ? $input['nombre'] : null;
        $telefono = !empty($input['telefono']) ? $input['telefono'] : null;
        $comentario = !empty($input['comentario']) ? $input['comentario'] : null;

        if ($datos->insertPersona($nombre, $telefono, $comentario)) {
            $response["mensaje"] = "Guardado correctamente";
            $response["code"] = 201;
            http_response_code(201);
            echo json_encode($response);
        } else {
            $response["mensaje"] = "Ocurrió algún error al guardar";
            $response["code"] = 200;
            http_response_code(200);
            echo json_encode($response);
        }
    } else {
        $response["mensaje"] = "Bad request";
        $response["resultado"] = $datosIncorrectos;
        $response["code"] = 400;
        http_response_code(400);
        echo json_encode($response);
    }

}

function getData($datos,$persona){
    $persona['asistencias'] = $datos->getAsistenciasByIdPersona($persona['id']);
    $persona['notas'] = $datos->getNotasByIdPersona($persona['id']);
    return $persona;
}
?>