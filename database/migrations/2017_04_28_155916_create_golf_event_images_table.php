<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGolfEventImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('golf_event_images', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('golf_event_id')->unsigned();
            $table->string('image');
            $table->timestamps();
            $table->foreign('golf_event_id')    
                    ->references('id')
                    ->on('golf_events')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('golf_event_images');
    }
}
