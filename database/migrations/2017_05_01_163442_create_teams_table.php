<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTeamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->increments('id');
            $table->string('team_name');
            $table->integer('team_captain')->unsigned();
            $table->integer('event_id')->unsigned();
            $table->timestamps();
            $table->foreign('team_captain', 'teams_ibfk_1')
                    ->references('id')
                    ->on('users')
                    ->onDelete('CASCADE')
                    ->onUpdate('RESTRICT');
            $table->foreign('event_id', 'teams_ibfk_2')
                    ->references('id')
                    ->on('events')
                    ->onDelete('CASCADE')
                    ->onUpdate('RESTRICT');
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
        Schema::dropIfExists('teams');
    }
}
