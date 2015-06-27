<?php

require 'init.php';

$result =[];

switch ($func) {
    case "list":
        $client = Client::find($input->client_id);
        foreach ($client->projects as $project) {
            $result['projects'][]=$project->to_array();
        }
        break;
        
    case "add":
        $client = Client::find($input->client_id);
        $client->create_project((array)$input);
        $client = Client::find($input->client_id);
        
        foreach ($client->projects as $project) {
            $result['projects'][]=$project->to_array();
        }
        break;
        
    case "update":
        $project = Project::find($input->id);
        $project->update_attributes(array('name' => $input->name));
        
        $client = Client::find($input->client_id);
        foreach ($client->projects as $project) {
            $result['projects'][]=$project->to_array();
        }
        break;
    case "delete":
        $project = Project::find($input->id);
        foreach ($project->datas as $data) {
            $data->delete();
        }
        $project->delete();
        
        $client = Client::find($input->client_id);
        foreach ($client->projects as $project) {
            $result['projects'][]=$project->to_array();
        }
        break;

    default:
        break;
}


echo json_encode($result);

