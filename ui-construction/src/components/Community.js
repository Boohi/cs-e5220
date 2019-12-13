import React, { Component } from 'react'

export default class Community extends Component {
    render() {
        return (
            <div class="container">

            <div class="row">

            	<div class="info-card margin-card card col-lg-4">
            		<img class="img-fluid" src="./consumption_graph.png"></img>
            	</div>
            	<div class="info-card margin-card col-lg-4">
            		<img class="img-fluid" src="./community_production_graph.png"></img>
            	</div>
            	<div class="margin-card">
            		<div class="info-card blue-infobox">
            			<i class="fas white fa-home"></i>
            			<h4 class="white">35/50</h4>
            			<p class="white">Active Households</p>
            		</div>
            		<div class="info-card blue-infobox">
            			<i class="fas white fa-tags"></i>
            			<h4 class="white">12,5 €/kW</h4>
            			<p class="white">Average Price</p>
            		</div>
            	</div>
            </div>

            <div class="row">
            	<div class="info-card margin-card card col-lg-4">
            		<span><h4 class="inline">210,0 €</h4><p class="inline small-text"> +15% </p><i class="inline fas green-text fa-arrow-circle-up"></i></span>
            		<p>Monthly profit (By selling electricity)</p>
            	</div>
            	<div class="info-card margin-card card col-lg-4">
            		<span><h4 class="inline">4,5 MTCO2</h4><p class="inline small-text"> -4,5% </p><i class="inline fas red-text fa-arrow-circle-down"></i></span>
            		<p>Monthly carbon footprint reduction</p>
            	</div>
            </div>

            <div class="row">
            	<div class="info-card margin-card card col-lg-4">
            		<span><h4 class="inline">92,0 €</h4><p class="inline small-text"> +2% </p><i class="inline fas green-text fa-arrow-circle-up"></i></span>
            		<p>Monthly savings (By buying from community)</p>
            	</div>
            </div>
     
            </div>
  

        )
    }
}
