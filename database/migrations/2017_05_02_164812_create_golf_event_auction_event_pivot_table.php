<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGolfEventAuctionEventPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('golf_event_auction_event', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('golf_event_id')->unsigned();
            $table->integer('auction_event_id')->unsigned();
            $table->foreign('golf_event_id')
                    ->references('id')
                    ->on('golf_events')
                    ->onDelete('cascade');
            $table->foreign('auction_event_id')
                    ->references('id')
                    ->on('auction_events')
                    ->onDelete('cascade');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('golf_event_auction_event');
    }
}
