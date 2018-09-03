import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class Survey extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: "",
      postStatus: "",
      Rate: "",
      Framework: "",
      Aware: "",
      List: "",
      Workshop: "",
      Important: ""
    }
  }


  handlePost = () => {
    var items=document.getElementsByName('react');
				var selectedItems="";
				for(var i=0; i<items.length; i++){
					if(items[i].type==='checkbox' && items[i].checked===true)
						selectedItems+=items[i].value+"\n";
				}
        alert(selectedItems);
        

    axios.post('http://localhost:1111/api/add', {
      Rate: this.state.Rate,
      Framework: this.state.Framework,
      Aware: this.state.Aware,
      List: this.state.List,
      Workshop: this.state.Workshop,
      Important: this.state.Important
    })
      .then((response) => {
        console.log(response.data);
        this.setState({
          postStatus: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    this.handleReset()

  }

  handleReset = () => {
    this.setState({
      Rate: "",
      Framework: "",
      Aware: "",
      List: "",
      Workshop: "",
      Important: "",
      postStatus: ""
    })
  }


  handleChange = (e) => {

    e.preventDefault();
    this.setState({
      postStatus: "",
      [e.target.name]: e.target.value

    })
  }

  handleRateChange = (e) => {
    this.setState({
      Rate: e.target.value,
    });
  };

  handleFrameworkChange = (e) => {
    this.setState({
      Framework: e.target.value
    });
  };

  handleAwareChange = (e) => {
    this.setState({
      Aware: e.target.value
    });
  };

  handleListChange = (e) => {
    this.setState({
      List: e.target.value
    });
  };

  handleWorkshopChange = (e) => {
    this.setState({
      Workshop: e.target.value
    });
  };

  handleImportantChange = (e) => {
    this.setState({
      Important: e.target.value
    });
  };

  render() {
    const { Rate, Framework, Aware, List, Workshop, Important } = this.state;
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Frontend Survey</h1>
        </header>


        <form>
          <div class="container">
            <div class="row">
              <div class="col">
                How much do you rate yourself in Javascript
              </div>
              <div class="col">
                <input type="radio" name="rate" id="rate" value="1-4" checked={Rate === '1-4'} onChange={this.handleRateChange} /> 1-4 
                <input type="radio" name="rate" id="rate" value="4-8" checked={Rate === '4-8'} onChange={this.handleRateChange} /> 4-8 
                <input type="radio" name="rate" id="rate" value="8-10" checked={Rate === '8-10'} onChange={this.handleRateChange} /> 8-10
               </div>

            </div>
            <hr />
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                How often do you use Javascript and its frameworks?
    </div>
              <div class="col">
                <input type="radio" name="daily" value="daily" checked={Framework === 'daily'} onChange={this.handleFrameworkChange} /> Daily 
                <input type="radio" name="weekly" value="weekly" checked={Framework === 'weekly'} onChange={this.handleFrameworkChange} /> Weekly 
                <input type="radio" name="monthly" value="monthly" checked={Framework === 'monthly'} onChange={this.handleFrameworkChange} /> Monthly
    </div>

            </div>
            <hr />
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                Are you aware of ReactJS?
    </div>
              <div class="col">
                <input type="radio" name="yes" id="yes" value="yes" checked={Aware === 'yes'} onChange={this.handleAwareChange} /> Yes 
                <input type="radio" name="no" id="no" value="no" checked={Aware === 'no'} onChange={this.handleAwareChange} /> No
    </div>
            </div>
            <hr />
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                Which among these frameworks have you worked on?
    </div>
              <div class="col">
                <input type="checkbox" name="react" value="react" onChange={this.handleListChange} /> ReactJS 
                <input type="checkbox" name="react" value="angular" onChange={this.handleListChange} /> AngularJS 
                <input type="checkbox" name="react" value="bootstrap" onChange={this.handleListChange} /> Bootstrap
    </div>
            </div>
            <hr />
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                Have you attended any workshops on frontend development earlier?
    </div>
              <div class="col">
                <input type="radio" name="have" id="have" value="have" checked={Workshop === 'have'} onChange={this.handleWorkshopChange} /> Yes 
                <input type="radio" name="not" id="not" value="not" checked={Workshop === 'not'} onChange={this.handleWorkshopChange} /> No
    </div>
            </div>
            <hr />
          </div>

          <div class="container">
            <div class="row">
              <div class="col">
                How important do you think learning frontend development is?
              </div>
              <div class="col">
                <input type="radio" name="one" id="one" value="Important" checked={Important === 'Important'} onChange={this.handleImportantChange} /> Important 
                <input type="radio" name="one" id="one" value="very important" checked={Important === 'very important'} onChange={this.handleImportantChange} /> Very Important 
                <input type="radio" name="one" id="one" value="not important" checked={Important === 'not important'} onChange={this.handleImportantChange} /> Not Important 
                <input type="radio" name="one" id="one" value="cant say" checked={Important === 'cant say'} onChange={this.handleImportantChange} /> Can't say
               </div>
            </div>
            <hr />
          </div>

          <div class="container">
            <div class="row">
              <div class="col" align="right">
                <button type="button" class="btn btn-primary" onClick={this.handleReset}>Cancel</button>
              </div>
              <div class="col">
                <button className="two" type="button" class="btn btn-primary mb-2" onClick={this.handlePost}>Submit</button>
              </div>
            </div>
           
          </div>




        </form>
      </div>
    );
  }
}

export default Survey;
