import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
    state = {
        //searched: "",
        val: "",
        pleaseWait: 0,
        emptyInput: 0,
        usaInput: 0,
        drugDetails: "",
        noResult: 0,
    };
    handleChange = (e) => {
        return this.setState({ val: e.target.value, drugDetails: "" });
    };
    handleSelectChange = (e) => {
        return this.setState({ drugDetails: "", val: "" });
    };
    keyDownEvent = (e) => {
        if (e.key === "Enter") { //13 is the enter keycode
        this.setState({ pleaseWait: 1 });
        let searchedVal = this.state.val.toLowerCase();
        let apilinkone = `https://api.fda.gov/drug/label.json?search=active_ingredient:%22${searchedVal}%22&limit=1`;
		let apilinktwo = `https://api.fda.gov/drug/label.json?search=description:%22${searchedVal}%22&limit=1`;

        fetch(apilinkone).then(res => res.json()).then(
            (result) => {
                if (typeof result.error !== 'undefined') {

                fetch(apilinktwo).then(res => res.json()).then(
					(result) => {
                if (typeof result.error !== 'undefined') {
                    this.setState({ pleaseWait: 0, noResult: 1 });
                    setTimeout(() => { this.setState({ noResult: 0 }) }, 1000);
                } else {
                    this.setState({ pleaseWait: 0, drugDetails: result.results[0] });
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
                } else {
                    this.setState({ pleaseWait: 0, drugDetails: result.results[0] });
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
        }
    }
    onSubmit = (e) => {

        this.setState({ pleaseWait: 1 });
        let searchedVal = this.state.val.toLowerCase();
        let apilinkone = `https://api.fda.gov/drug/label.json?search=active_ingredient:%22${searchedVal}%22&limit=1`;
		let apilinktwo = `https://api.fda.gov/drug/label.json?search=description:%22${searchedVal}%22&limit=1`;

        fetch(apilinkone).then(res => res.json()).then(
            (result) => {
                if (typeof result.error !== 'undefined') {

                fetch(apilinktwo).then(res => res.json()).then(
					(result) => {
                if (typeof result.error !== 'undefined') {
                    this.setState({ pleaseWait: 0, noResult: 1 });
                    setTimeout(() => { this.setState({ noResult: 0 }) }, 1000);
                } else {
                    this.setState({ pleaseWait: 0, drugDetails: result.results[0] });
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
                } else {
                    this.setState({ pleaseWait: 0, drugDetails: result.results[0] });
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
    };
    showContent = (e) => {
        if (this.state.drugDetails === "") {
            return (<p></p>);
        } else {
            return (<div className="display-flex flex-column flex-wrap margin-2 margin-top-1 drugInfo">
	      <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Proprietary Name: </span>{this.state.drugDetails.openfda.brand_name ? this.state.drugDetails.openfda.brand_name : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Nonproprietary Name: </span>{this.state.drugDetails.openfda.generic_name ? this.state.drugDetails.openfda.generic_name : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Labeler Name: </span>{this.state.drugDetails.openfda.manufacturer_name ? this.state.drugDetails.openfda.manufacturer_name : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Substance Name: </span>{this.state.drugDetails.openfda.substance_name ? this.state.drugDetails.openfda.substance_name : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Product Type: </span>{this.state.drugDetails.openfda.product_type ? this.state.drugDetails.openfda.product_type : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  {this.state.drugDetails.active_ingredient ?
		  <p><span className="text-black text-bold">Active Ingredients: </span><ul>{
			  this.state.drugDetails.active_ingredient.map((key, id) => (
			     <li key={id}>{key}</li>
				 ))}
	      </ul></p>
		  : <p><span className="text-black text-bold">Active Ingredients: </span> Not Available</p>
		  }
		  </div>
		  <div className="display-flex flex-row flex-wrap">
		  {this.state.drugDetails.inactive_ingredient ?
		  <p><span className="text-black text-bold">Inactive Ingredients: </span><ul>{
			  this.state.drugDetails.inactive_ingredient.map((key, id) => (
			     <li key={id}>{key}</li>
				 ))}
	      </ul></p>
		  : <p><span className="text-black text-bold">Inactive Ingredients: </span> Not Available</p>
		  }
		  </div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Route: </span>{this.state.drugDetails.openfda.route ? this.state.drugDetails.openfda.route : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Purpose: </span>{this.state.drugDetails.purpose ? this.state.drugDetails.purpose : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Children Advisory: </span>{this.state.drugDetails.keep_out_of_reach_of_children ? this.state.drugDetails.keep_out_of_reach_of_children : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Warnings: </span>{this.state.drugDetails.warnings ? this.state.drugDetails.warnings : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Spl Product Data Elements: </span>{this.state.drugDetails.spl_product_data_elements ? this.state.drugDetails.spl_product_data_elements : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Ask Doctor: </span>{this.state.drugDetails.ask_doctor ? this.state.drugDetails.ask_doctor : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Ask Doctor or Pharmacist: </span>{this.state.drugDetails.ask_doctor_or_pharmacist ? this.state.drugDetails.ask_doctor_or_pharmacist : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Dosage and Administration: </span>{this.state.drugDetails.dosage_and_administration ? this.state.drugDetails.dosage_and_administration : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Pregnancy or Breast Feeding: </span>{this.state.drugDetails.pregnancy_or_breast_feeding ? this.state.drugDetails.pregnancy_or_breast_feeding : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Stop Use: </span>{this.state.drugDetails.stop_use ? this.state.drugDetails.stop_use : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Do Not Use: </span>{this.state.drugDetails.do_not_use ? this.state.drugDetails.do_not_use : "Not Available"}</p></div>
          <div className="display-flex flex-row flex-wrap">
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Indications and Usage: </span>{this.state.drugDetails.indications_and_usage ? this.state.drugDetails.indications_and_usage : "Not Available"}</p></div>
		  <p><span className="text-black text-bold">Storage and Handling: </span>{this.state.drugDetails.storage_and_handling ? this.state.drugDetails.storage_and_handling : "Not Available"}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Package Label Principal Display Panel: </span>{this.state.drugDetails.package_label_principal_display_panel ? this.state.drugDetails.package_label_principal_display_panel : "Not Available"}</p></div>
	      </div>
		  );
        }
    }
    onReset = (e) => {
        return this.setState({ val: "", drugDetails: "", });
    };
    render() {
        return <React.Fragment>
			 <div className="display-flex flex-column flex-wrap">
	         <div className="display-flex flex-row padding-2 formDiv flex-wrap margin-right-4">

			 <div className="margin-top-0 margin-left-3 margin-bottom-2">
			 <input
			 className={`${this.state.emptyInput === 1 && "emptyInput"} ${this.state.usaInput === 0 && "usa-input searchSymptomsInput"}`}
              onKeyDown={this.keyDownEvent}
              onChange={this.handleChange}
              placeholder="Search"
              id="input-type-text"
              name="input-type-text"
              type="text"
			  //disabled= {!this.state.selectVal}
			  value={this.state.val}
            />
			<p className="text-black">{`${this.state.noResult === 1 ? 'No Matches Found.' : ''}`}
			{`${this.state.emptyInput === 1 ? 'Please fill the textfield correctly.' : ''}`}
			{`${this.state.pleaseWait === 1 ? 'Please Wait...' : ''}`}
			</p>
			</div>
		    <div className="display-flex flex-row flex-justify flex-wrap margin-top-1 margin-left-2">
		      <div className="margin-top-0 margin-left-2 margin-right-1 margin-bottom-2">
			  <button onClick={this.onSubmit} className="usa-button usa-button--default" >Submit</button>
			  </div>
		      <div className="margin-top-0 margin-left-2 margin-right-2 margin-bottom-2">
			  <button onClick={this.onReset} className="usa-button usa-button--outline" >Reset</button>
			  </div>
		    </div>
			</div>
			{this.showContent()}
			</div>

		  </React.Fragment>;
    }
}
export default Home;