@extends('layouts.app')

@section('content')

    <!-- auction header -->
    <div class="container auction">
        <h1>Name of the Auction Event</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <div class="container auction auction-items">

        <div class="row grey item">
            <div class="col-md-3 col-sm-3 col-xs-4">
                <a href="/auction/item"><img src="http://placehold.it/200x200" alt="..." class="img-thumbnail" /></a>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-8">
                <h4 class="item-title"><a href="/auction/item">Marvel Universe Fantastic Four THE THING & HERBIE Loose 3.75" Figure 2011</a></h4>
                <div class="row">
                    <div class="col-md-3">
                        <span class="current-bid-price">$170.00</span>
                        <p>7 bids</p>
                    </div>
                    <div class="col-md-9">
                        <p>Bidding Ends at: <strong>Friday, May 5 5:00pm</strong><br />
                        Time Remaining: <strong>4 days 18 hours</strong></p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
        <div class="row item">
            <div class="col-md-3 col-sm-3 col-xs-4">
                <a href="/auction/item"><img src="http://placehold.it/200x200" alt="..." class="img-thumbnail" /></a>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-8">
                <h4 class="item-title"><a href="/auction/item">Volkswagen 1983 Heritage Pics Poster Wolfsburg Type 1 Type 2 The Thing 38 x 26</a></h4>
                <div class="row">
                    <div class="col-md-3">
                        <span class="current-bid-price">$32.00</span>
                        <p>1 bids</p>
                    </div>
                    <div class="col-md-9">
                        <p>Bidding Ends at: <strong>Friday, May 5 5:00pm</strong><br />
                        Time Remaining: <strong>4 days 18 hours</strong></p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

        <div class="row grey item">
            <div class="col-md-3 col-sm-3 col-xs-4">
                <a href="/auction/item"><img src="http://placehold.it/200x200" alt="..." class="img-thumbnail" /></a>
            </div>
            <div class="col-md-9 col-sm-9 col-xs-8">
                <h4 class="item-title"><a href="/auction/item">That Thing You Do Blu-ray</a></h4>
                <div class="row">
                    <div class="col-md-3">
                        <span class="current-bid-price">$28.00</span>
                        <p>0 bids</p>
                    </div>
                    <div class="col-md-9">
                        <p>Bidding Ends at: <strong>Friday, May 5 5:00pm</strong><br />
                        Time Remaining: <strong>4 days 18 hours</strong></p>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>

    </div>

@endsection
