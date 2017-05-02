<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuctionEventImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auction_event_images', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('auction_event_id')->unsigned();
            $table->string('image');
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
        Schema::dropIfExists('auction_event_images');
    }
}
