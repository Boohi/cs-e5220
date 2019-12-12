import React, { Component } from 'react'

export default class Provider extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                <div class="info-card col-lg-5">
	                <img alt="Company Logo" max-height="150px" class="img-fluid" src="https://www.fortum.fi/sites/g/files/rkxjap156/files/styles/grid_large/public/image-entity/fortum_logo_cmyk.jpg?h=9ece3dd6">
	                </img>
	                <div class="table-container">
	                <table class="table info-table table-borderless">
	                 <tbody>
					    <tr>
					      <td>Name</td>
					      <td>Robert Warren</td>
					    </tr>
					    <tr>
					      <td>Contract</td>
					      <td>1.1.2016 - 31.12.2017</td>
					    </tr>
					    <tr>
					      <td>Selling Price</td>
					      <td>14,49€ / kW</td>
					    </tr>
					    <tr>
					    	<td colspan="2"><button type="submit" class="btn btn-primary">Download Contract</button></td>
					    </tr>
					  </tbody>
	                </table>
	                </div>
	                
                </div>

                <div class="col-lg-1"></div>

                <div class="info-card col-lg-5">
                 	<img alt="Company Logo" max-height="150px" class="img-fluid" src="https://www4.helen.fi/hf/uusinta/images/Helen_logo.png">
	                </img>
	                <div class="table-container">
	                <table class="table info-table table-borderless">
	                 <tbody>
					    <tr>
					      <td>Name</td>
					      <td>Robert Warren</td>
					    </tr>
					    <tr>
					      <td>Contract</td>
					      <td>1.1.2018 - 31.12.2019</td>
					    </tr>
					    <tr>
					      <td>Selling Price</td>
					      <td>12,29€ / kW</td>
					    </tr>
					    <tr>
					    	<td colspan="2"><button type="submit" class="btn btn-primary">Download Contract</button></td>
					    </tr>
					  </tbody>
	                </table>
	                </div>
                </div>

                </div>
            </div>
        )
    }
}
