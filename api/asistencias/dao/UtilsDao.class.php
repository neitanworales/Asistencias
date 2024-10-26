<?php

/**
 * Summary of SeccionesDao
 */
class UtilsDao
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

}