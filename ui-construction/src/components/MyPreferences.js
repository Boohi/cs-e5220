import React, { Component } from 'react'

export default class MyPreferences extends Component {
    render() {
        return (
            <div class="container">
            <span class="glyphicon glyphicon-pencil"></span>
	            <div class="row">
	                <div class="info-card col-lg-8 col-md-12">
	                	<img class="img-fluid" src="/production_chart.png" alt="Production chart"></img>
	                </div>
	                <div class="col-lg-1 col-sm-1 col-md-1"></div>
	                <div class=" col-lg-2 row">
	                	<div class="info-card">
	                		<h6>Selling Price (Own Supply)</h6>
	                		<span><h5><strong>14,50 €/kW</strong></h5> <button class="edit-button"><i class="blue fas fa-edit"></i></button></span>
	                	</div>
	                	<div class="col-sm-1"></div>
	                	<div class="info-card">
	                		<h6>Buying Price (Community Supply)</h6>
	                		<span><h5><strong>12,87 €/kW</strong></h5><button class="edit-button"><i class="blue fas fa-edit"></i></button></span>
	                	</div>
	                </div>
	            </div>
            </div>
        )
    }
}
