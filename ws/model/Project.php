<?php

class Project extends ActiveRecord\Model {

    static $has_many = array(
        array('datas')
    );
    static $belongs_to = array(
        array('client')
    );

}
