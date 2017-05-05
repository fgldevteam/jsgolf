@extends('admin.layouts.app')

@section('title', 'Create Golf Event')

@section('sidebar')
    @parent

    
@endsection

@section('content')
    
    <!-- <h2>Create New Golf Tournament</h2> -->
     <div class="row">
        <div class="col-lg-12">
            <div class="box  box-default">
                <div class="box-header with-border">
                    <div class="box-title">
                        Current Golf Tournaments
                    </div>
                    <div class="box-tools">
                        <a class="" href="/admin/golf-event/create"><span><i class="fa fa-plus">Add More</i></span></a>
                    </div>

                </div>

                <div class="box-body">
                    @foreach($golfEvents as $golfEvent)
    
                        <div class="box box-success">
                            <div class="box-header">
                              <h3 class="box-title">{{$golfEvent->name}}</h3>
                            </div>
                            <div class="box-body">
                                <div class="col-md-3 col-sm-3 col-xs-4">
                                
                                    @if(count($golfEvent->images) > 0)
                                    <div id="golf-event-{{$golfEvent->id}}" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                          <li data-target="#golf-event-{{$golfEvent->id}}" data-slide-to="0" class=""></li>
                                          <li data-target="#golf-event-{{$golfEvent->id}}" data-slide-to="1" class="active"></li>
                                          <li data-target="#golf-event-{{$golfEvent->id}}" data-slide-to="2" class=""></li>
                                        </ol>
                                        <div class="carousel-inner">
                                        
                                            @foreach($golfEvent->images as $i=>$image)
                                                
                                                @if($i==0)
                                                <div class="item active">
                                                @else
                                                <div class="item">
                                                @endif
                                                    <img src="{{$image->image}}" alt="..." class="img-thumbnail" />
                                                    <div class="carousel-caption">
                                                    <!-- First Slide -->
                                                    </div>
                                                </div>
                                                
                                            @endforeach  
                                        
                                          
                                        </div>
                                        <a class="left carousel-control" href="#golf-event-{{$golfEvent->id}}" data-slide="prev">
                                          <span class="fa fa-angle-left"></span>
                                        </a>
                                        <a class="right carousel-control" href="#golf-event-{{$golfEvent->id}}" data-slide="next">
                                          <span class="fa fa-angle-right"></span>
                                        </a>
                                      </div>
                                    @endif
                                    <!-- <a href="/admin/golf-event/{{$golfEvent->id}}"><img src="http://placehold.it/200x200" alt="..." class="img-thumbnail" /></a> -->
                                </div>
                                <div class="col-md-9 col-sm-9 col-xs-8">
                                <h4 class="item-title">
                                    
                                    <div>
                                        {{$golfEvent->description}}
                                    </div>
                                    <div>
                                        {{$golfEvent->location}}
                                    </div>
                                    <div>

                                        Event Date: {{$golfEvent->date}}
                                        Event Time: {{$golfEvent->time}}
                                    </div>
                                </h4>
                                <div class="row">
                                    <div class="col-md-9">
                                        <span >Price per team: {{$golfEvent->team_price}}</span>
                                    </div>
                                    <div class="col-md-9">
                                        <span >Price per player: {{$golfEvent->player_price}}</span>
                                    </div>
                                    
                                </div>

                                
                            </div>
                              
                            </div>
                            <!-- /.box-body -->
                            
                          </div>
                    @endforeach
                </div> <!-- box body closes -->
    
            </div><!-- ibox closes -->
        </div>
    </div>

@endsection