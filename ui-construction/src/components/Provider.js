import React, { Component } from 'react'

export default class Provider extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="info-card col-lg-5">
	                <img alt="Company Logo" class="img-fluid" src="https://www.fortum.fi/sites/g/files/rkxjap156/files/styles/grid_large/public/image-entity/fortum_logo_cmyk.jpg?h=9ece3dd6">
	                </img>
	                <div class="row grouped">
	                	Name
	                </div>
	                <div class="row grouped">
	                	Contract
	                </div>
	                
	                <div class="row grouped">
	                	Selling price
	                </div>
	                <button type="submit" class="btn btn-primary">Download Contract</button>
                </div>
                
                <div class="col-lg-1"></div>

                <div class="info-card col-lg-5">
                 	<img alt="Company Logo" class="img-fluid" src="https://www4.helen.fi/hf/uusinta/images/Helen_logo.png">
	                </img>
	                <div class="row grouped">
	                	Name
	                </div>
	                <div class="row grouped">
	                	Contract
	                </div>
	                
	                <div class="row grouped">
	                	Selling price
	                </div>
	                <button type="submit" class="btn btn-primary">Download Contract</button>
                </div>

                </div>
            </div>
        )
    }
}
