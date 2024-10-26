<?php

/**
 * Summary of SeccionesDao
 */
class PersonasDao
{
    private $bd;
    static $_instance;

    private function __construct()
    {
        require '../db/Db.class.php';
        $this->bd = Db::getInstance(1);
    }

    public static function getInstance()
    {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    /**
     * Summary of getSecciones
     * @return array<array>
     */
    public function getPersonas()
    {
        $que = "SELECT * FROM personas ORDER BY created";
        return $this->bd->ObtenerConsulta($que);
    }

    public function getPersonaById($id)
    {
        $que = "SELECT * FROM personas WHERE id=$id ORDER BY nombre";
        return $this->bd->ObtenerConsulta($que);
    }

    public function searchPersona($text)
    {
        $que = "SELECT * FROM personas WHERE nombre LIKE '%$text%' OR marca LIKE '%$text%' ORDER BY nombre";
        return $this->bd->ObtenerConsulta($que);
    }

    public function insertPersona($nombre, $telefono, $comentario)
    {
        $que = "INSERT INTO `personas` (`id`, `nombre`, `telefono`, `comentario`, `status`) 
        VALUES (NULL, '$nombre', '$telefono', '$comentario', 'A');";
        return $this->bd->ejecutar($que);
    }

}