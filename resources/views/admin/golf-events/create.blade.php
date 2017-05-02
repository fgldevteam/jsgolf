@extends('admin.layouts.app')

@section('title', 'Create Golf Event')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    

    {!! Form::open(['action' => 'Golf\GolfEventAdminController@store']) !!}
        

    <div class="form-group">
        <label class="col-sm-2 control-label">Event Name</label>
        <div class="col-sm-10">
            <input type="text" id="name" name="name" class="form-control" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Event Description</label>
        <div class="col-sm-10">
            <input type="text" id="description" name="description" class="form-control" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Event Date and time</label>
        <div class="col-sm-10">
            <input type="text" id="date" name="date" class="form-control datetimepicker" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Event Location</label>
        <div class="col-sm-10">
            <input type="text" id="location" name="location" class="form-control" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Agenda</label>
        <div class="col-sm-10">
            <input type="textarea" id="agenda" name="agenda" class="form-control" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Rules</label>
        <div class="col-sm-10">
            <input type="textarea" id="rules" name="rules" class="form-control" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Price per player</label>
        <div class="col-sm-10">
            <input type="text" id="player_price" name="player_price" class="form-control" value="" />
        </div>
    </div>

    <div class="form-group">
        <label class="col-sm-2 control-label">Price per team</label>
        <div class="col-sm-10">
            <input type="text" id="team_price" name="team_price" class="form-control" value="" />
        </div>
    </div>

    {!! Form::close() !!}

@endsection