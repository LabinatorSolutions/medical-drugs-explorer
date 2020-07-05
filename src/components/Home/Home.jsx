import React, { Component } from "react";
import "./Home.css";
class Home extends Component {
    state = {
        //searched: "",
        val: "",
        selectVal: "",
        emptyInput: 0,
        usaInput: 0,
        drugDetails: "",
        noResult: 0,
    };
    handleChange = (e) => {
        return this.setState({ val: e.target.value, drugDetails: "" });
    };
    handleSelectChange = (e) => {
        return this.setState({ selectVal: e.target.value, drugDetails: "", val: "" });
    };
    keyDownEvent = (e) => {
        if (e.key === "Enter") { //13 is the enter keycode
            if (this.state.val === "") {
                this.setState({ emptyInput: 1 });
                setTimeout(() => { this.setState({ emptyInput: 0 }) }, 1000);
                return;
            }
            //this.setState({ val: "", selectVal: "" });
            let searchedVal = this.state.val.toLowerCase();
            let apilink = `https://api.fda.gov/drug/ndc.json?search=${this.state.selectVal}:%22${searchedVal}%22&limit=1`;
            fetch(apilink).then(res => res.json()).then(
                (result) => {
                    if (typeof result.error !== 'undefined') {
                        this.setState({ noResult: 1 });
                        setTimeout(() => { this.setState({ noResult: 0 }) }, 1000);
                    } else {
                        this.setState({ drugDetails: result.results[0] });
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
        if (this.state.val === "") {
            this.setState({ emptyInput: 1 });
            setTimeout(() => { this.setState({ emptyInput: 0 }) }, 1000);
            return;
        }
        //this.setState({ val: "", selectVal: "" });
        let searchedVal = this.state.val.toLowerCase();
        let apilink = `https://api.fda.gov/drug/ndc.json?search=${this.state.selectVal}:%22${searchedVal}%22&limit=1`;
        fetch(apilink).then(res => res.json()).then(
            (result) => {
                if (typeof result.error !== 'undefined') {
                    this.setState({ noResult: 1 });
                    setTimeout(() => { this.setState({ noResult: 0 }) }, 1000);
                } else {
                    this.setState({ drugDetails: result.results[0] });
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
		  <p><span className="text-black text-bold">Product NDC: </span>{this.state.drugDetails.product_ndc}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Proprietary Name: </span>{this.state.drugDetails.brand_name}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Nonproprietary Name: </span>{this.state.drugDetails.generic_name}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Labeler Name: </span>{this.state.drugDetails.labeler_name}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Active Ingredients: </span><ul>{
			  this.state.drugDetails.active_ingredients.map((key, id) => (
			     <li key={id}>{key.name} ({key.strength}) </li>
				 ))}
	      </ul></p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Route: </span><ul>{
			  this.state.drugDetails.route.map((key, id) => (
			     <li key={id}>{key}</li>
				 ))}
	      </ul></p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Product Type: </span>{this.state.drugDetails.product_type}</p></div>
		  <div className="display-flex flex-row flex-wrap">
		  <p><span className="text-black text-bold">Product Id: </span>{this.state.drugDetails.product_id}</p></div>
	      </div>);
        }
    }
    onReset = (e) => {
        return this.setState({ val: "", drugDetails: "", selectVal: "" });
    };
    render() {
        return <React.Fragment>
			 <div className="display-flex flex-column flex-wrap">
	         <div className="display-flex flex-row padding-2 formDiv flex-wrap margin-right-4">

			 <div className="margin-top-0 margin-left-2 margin-bottom-2">

			   <select class="usa-select" name="options" id="options" onChange={this.handleSelectChange} value={this.state.selectVal}>
				<option value="">- Select -</option>
				<option value="brand_name">Proprietary Name</option>
				<option value="generic_name">Nonproprietary Name</option>
				<option value="active_ingredients.name">Active Ingredients Name</option>
			   <select>
			   </div>

			 <div className="margin-top-0 margin-left-3 margin-bottom-2">
			 <input
			 className={`${this.state.emptyInput === 1 && "emptyInput"} ${this.state.usaInput === 0 && "usa-input searchSymptomsInput"}`}
              onKeyDown={this.keyDownEvent}
              onChange={this.handleChange}
              placeholder="Search Symptoms"
              id="input-type-text"
              name="input-type-text"
              type="text"
			  disabled= {!this.state.selectVal}
			  value={this.state.val}
            />
			<p className="text-black">{`${this.state.noResult === 1 ? 'No Matches Found.' : ''}`}
			{`${this.state.emptyInput === 1 ? 'Please fill the textfield correctly.' : ''}`}</p>
			</div>
		    <div className="display-flex flex-row flex-justify flex-wrap margin-top-1 margin-left-2">
		      <div className="margin-top-0 margin-left-2 margin-right-1 margin-bottom-2">
			  <button onClick={this.onSubmit} className="usa-button usa-button--default" disabled= {!this.state.selectVal}>Submit</button>
			  </div>
		      <div className="margin-top-0 margin-left-2 margin-right-2 margin-bottom-2">
			  <button onClick={this.onReset} className="usa-button usa-button--outline" disabled= {!this.state.selectVal}>Reset</button>
			  </div>
		    </div>
			</div>
			{this.showContent()}
			</div>

		  </React.Fragment>;
    }
}
export default Home;