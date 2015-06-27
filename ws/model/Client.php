<?php

class Client extends ActiveRecord\Model {

    static $has_many = array(
        array('projects')
    );

}
