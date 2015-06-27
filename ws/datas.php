<?php

require 'init.php';

$result =[];

switch ($func) {
    case "list":
        $project = Project::find($input->project_id);
        foreach ($project->datas as $data) {
            $result['datas'][]=$data->to_array();
        }
        break;
        
    case "add":
        $project = Project::find($input->project_id);
        $project->create_data((array)$input);
        $project = Project::find($input->project_id);
        
        foreach ($project->datas as $data) {
            $result['datas'][]=$data->to_array();
        }
        break;
    case "update":
        $data = Data::find($input->id);
        $data->update_attributes((array)$input);
        
        $project = Project::find($input->project_id);
        foreach ($project->datas as $data) {
            $result['datas'][]=$data->to_array();
        }
        break;
    case "delete":
        $data = Data::find($input->id)->delete();
        
        $project = Project::find($input->project_id);
        foreach ($project->datas as $data) {
            $result['datas'][]=$data->to_array();
        }
        break;

    default:
        break;
}


echo json_encode($result);

