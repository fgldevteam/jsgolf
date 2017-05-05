@extends('admin.layouts.app')

@section('title', 'Create Golf Event')

@section('sidebar')
    @parent

    
@endsection

@section('content')
    
    <!-- <h2>Create New Golf Tournament</h2> -->
     <div class="row">
        <div class="col-lg-12">
            <div class="box box-default">
                <div class="box-header with-border">
                    <div class="box-title">
                        Add New Golf Tournament
                    </div>
                </div>

                <div class="box-body">

                    {!! Form::open(['action' => 'Golf\GolfEventAdminController@store']) !!}
                        

                    <div class="form-group">
                        <label >Event Name</label>
                        
                        <input type="text" id="name" name="name" class="form-control" value="" />
                        
                    </div>

                    <div class="form-group">
                        <label >Event Description</label>
                        
                            <textarea id="description" name="description" class="form-control" value="" ></textarea>
                        
                    </div>

                    <!-- <div class="form-group">
                        <label >Event Date and time</label>
                        
                            <input type="text" id="date" name="date" class="form-control datetimepicker" value="" />
                        
                    </div> -->
                    <div class="form-group">
                        <label>Date:</label>

                        <div class="input-group date">
                            <div class="input-group-addon">
                                <i class="fa fa-calendar"></i>
                            </div>
                            <input type="text" name="date" class="form-control pull-right" id="datetimepicker">
                        </div>
                    <!-- /.input group -->
                    </div>

                    <div class="form-group">
                        <label>Event Location</label>
                        
                            <input type="text" id="location" name="location" class="form-control" value="" />
                        
                    </div>

                    <div class="form-group">
                        <label>Event Location Postal Code</label>
                        
                            <input type="text" id="location_postal_code" name="location_postal_code" class="form-control" value="" />
                        
                    </div>


                    <div class="form-group">
                        <label>Agenda</label>
                        
                            <textarea id="agenda" name="agenda" class="form-control" value="" ></textarea>
                        
                    </div>

                    <div class="form-group">
                        <label>Rules</label>
                        
                            <textarea id="rules" name="rules" class="form-control" value="" ></textarea>
                        
                    </div>

                    <div class="form-group">
                        <label>Price per player</label>
                        
                            <input type="number" id="player_price" name="player_price" class="form-control" value="" min=0/>
                        
                    </div>

                    <div class="form-group">
                        <label>Price per team</label>
                        
                            <input type="number" id="team_price" name="team_price" class="form-control" value="" min="0"/>
                        
                    </div>

                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <a class="btn btn-primary" href="/admin/golf-event"><i class="fa fa-close"></i> Cancel</a>
                            <button class="create-golf-event btn btn-primary" type="submit"><i class="fa fa-check"></i> Create New Golf Tournament</button>

                        </div>
                    </div>

                    {!! Form::close() !!}
                </div> <!-- ibox content closes -->
    
            </div><!-- ibox closes -->
        </div>
    </div>

@endsection