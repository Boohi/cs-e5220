import React, { Component } from 'react'

export default class AccountSettings extends Component {
    render() {
        return (
            <div class="info-card container col-sm-12 col-md-10 col-lg-8">
            <form>
            	<div class="table-container form-group grouped">
            	<table class="info-table table table-borderless">
	                 <tbody>
					    <tr>
					      <td><label for="name">Name</label></td>
					      <td><input id="name" defaultValue="Robert Warren"></input></td>
					    </tr>
					    <tr>
					      <td><label for="address">Address</label></td>
					      <td><input id="address" defaultValue="Vanha Maantie 6, A12"></input></td>
					    </tr>
					    <tr>
					      <td><label for="postal">Postal Code</label></td>
					      <td><input id="postal" defaultValue="00230 Espoo"></input></td>
					    </tr>
					    <tr>
					      <td><label for="phone" >Phone</label></td>
					      <td><input id="phone" type="phone" defaultValue="+358 40 1234 567"></input></td>
					    </tr>
					    <tr>
					      <td><label for="email">Email</label></td>
					      <td><input id="email" type="email" defaultValue="robert.warren@mail.com"></input></td>
					    </tr>
					    <tr>
					      <td><label>Billing</label></td>
					      <td><input defaultValue="**** **** **** 1234"></input></td>
					    </tr>
					  </tbody>
	              </table>
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
