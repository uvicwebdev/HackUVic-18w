import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navbar from 'parts/Navbar';
import { Link } from 'react-router';

export default class Competition extends Component {

  static propTypes = {
    location: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    if (window.opener) {
      window.opener.location = window.location;
      window.close();
    }
  }

  render() {
    return (
      <main className="done">
        <div className="container">
          <Navbar />
        </div>
        <div className="col-12 flex flex-center">
          <div className="columns col-6 col-sm-10">
            <section className="col-12 text-center">
              <h2>You're signed up for HackUVic!</h2>
            </section>

            <section className="columns col-12 flex flex-center">
              <h3 className="text-center">Here's what you need to know.</h3>
            </section>

            <section className="columns col-12 flex flex-center">
              <ul className="col-sm-12 col-6">
                <li>Registration opens at 9am on Saturday, March 10th, on the 1st floor of ECS.</li>
                <li>Opening ceremonies are being held at 10am in ECS 125 - Make sure you're there!</li>
                <li>We'll take care of lunch and dinner on Saturday, and we'll serve breakfast on Sunday.</li>
                <li>Coffee and other refreshments will be provided throughout the event.</li>
              </ul>
            </section>

            <section className="col-12">
              <Link className="btn btn-primary btn-block btn-fat" to="/">Back to HackUVic Homepage</Link>
            </section>
          </div>
        </div>
      </main>
    );
  }
}
