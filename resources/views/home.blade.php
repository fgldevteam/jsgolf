@extends('layouts.app')


@section('content')
    <div id="fullpage">
        <div class="section" id="section1" data-anchor="home">
            <div class="fp-bg"></div>
            home
        </div>
        <div class="section" id="section2" data-anchor="tournaments">
            <div class="slide" id="slide2-1">
                <div class="fp-bg"></div>
                tournament 1
            </div>
            <div class="slide" id="slide2-2">
                <div class="fp-bg"></div>
                tournament 2
                <button class="button-lg">Click to join</button>
            </div>
        </div>
        <div class="section" id="section3" data-anchor="about">
            <div class="fp-bg"></div>
            about
        </div>
    </div>
{{-- <div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>

                <div class="panel-body">
                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div> --}}
@endsection
