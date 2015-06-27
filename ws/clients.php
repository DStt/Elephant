<?php

require 'init.php';

$result = [];

switch ($func) {
    case "list":

        $clients = Client::all();

        foreach ($clients as $client) {
            $result['clients'][] = $client->to_array();
        }

        break;
    case "add":

        $client = new Client;
        $client->name = $input->name;
        $client->save();

        $clients = Client::all();

        foreach ($clients as $client) {
            $result['clients'][] = $client->to_array();
        }
        break;

    case "update":
        $client = Client::find($input->id);
        $client->update_attributes(array('name' => $input->name));

        $clients = Client::all();
        foreach ($clients as $client) {
            $result['clients'][] = $client->to_array();
        }
        break;
    case "delete":
        $client = Client::find($input->id);
        foreach ($client->projects as $project) {
            foreach ($project->datas as $data) {
                $data->delete();
            }
            $project->delete();
        }
        $client->delete();


        $clients = Client::all();
        foreach ($clients as $client) {
            $result['clients'][] = $client->to_array();
        }
        break;

    default:
        break;
}


echo json_encode($result);

