<?php

class Data extends ActiveRecord\Model {

    static $belongs_to = array(
        array('project')
    );


}
