<?php

class Xmlrpc_client extends CI_Controller {

    function index($id, $point) {
        $this->load->helper('date');
        $this->load->helper('url');
        $this->load->library('xmlrpc');

        $this->xmlrpc->set_debug(TRUE);
        //$datestring = "%H %i %s";
        //$time = time(); 
        //$timestamp = mdate($datestring, $time);
        //$format = 'DATE_RFC822';
        $timestamp = time();

       //$timestamp = standard_date($format, $time);
        echo $timestamp;
        echo unix_to_human($timestamp, TRUE);

        $server_url = 'http://localhost/projects/TestProject/xmlrpc_server';
        echo $server_url;


        $this->xmlrpc->server($server_url, 80);
        
        $this->xmlrpc->method('check');
        


        $request = array(
            array($id, 'int'),
            array($point, 'int'),
            array($timestamp, 'string')
        );
        var_dump($request);
        $this->xmlrpc->request($request);

        if (!$this->xmlrpc->send_request()) {
            echo $this->xmlrpc->display_error();
        } else {
            echo '<pre>';
            print_r($this->xmlrpc->display_response());
            echo '</pre>';
        }
    }

}

?>