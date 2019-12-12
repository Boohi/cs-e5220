import React, { Component } from 'react'

export default class AccountSettings extends Component {
    render() {
        return (

            <div class="info-card container col-sm-12 col-md-10 col-lg-8">
            <form>
                <div class="form-group grouped">
                	<div class="form-group">
	                <label>Name<input defaultValue="Robert Warren"></input></label>
	                </div>
	                <div class="form-group">
	                <label>Address<input defaultValue="Vanha Maantie 6, A12"></input></label>
	                </div>
	                <div class="form-group">
	                <label>Postal Code<input defaultValue="00230 Espoo"></input></label>
	                 </div>
	                <div class="form-group">
	                <label>Phone<input type="phone" defaultValue="+358 40 1234 567"></input></label>
	                 </div>
	                <div class="form-group">
	                <label>Email<input type="email" defaultValue="robert.warren@mail.com"></input></label>
	                 </div>
	                <div class="form-group">
	                <label>Billing<input defaultValue="**** **** **** 1234"></input></label>
	                 </div>
                </div>

                <div class="form-group grouped">
                	<div class="custom-control custom-switch">
                	<input type="checkbox" class="custom-control-input" id="customSwitch1"></input>
						<label class="custom-control-label" for="customSwitch1">Receive billing information to email</label>
  						
					</div>
                	<div class="custom-control custom-switch">
                	  	<input type="checkbox" class="custom-control-input" id="customSwitch2"></input>
						<label class="custom-control-label" for="customSwitch2">Receive billing information to SMS</label>
					</div>
				</div>

                	<div class="form-group password-change">
                		<a href="#">Change Password</a>
                	</div>

                 <button type="submit" class="btn btn-primary">Save Changes</button>
            </form>
            </div>
        )
    }
}
