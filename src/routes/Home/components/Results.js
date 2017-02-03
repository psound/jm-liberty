import React from 'react'
import { IndexLink, Link } from 'react-router'
import BuyNew from '../../../img/buynew.jpg'
import BuyUsed from '../../../img/buyused.jpg'
import './HomeView.scss'

const styles = {};

let data = require('../../../data/data.json');

class Results extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            heroImage: require('../../../img/buynew.jpg'),
        }
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    render() {
        return(
            <div>
                <div className="col-sm-7">
                    <img src={this.state.heroImage} className="img-responsive img-circle results" />
                </div>
                <div className="col-sm-5">
                    <h2>You Should Buy a New Car</h2>
                    <Link className="whystate">email my results></Link>
                </div>
                <div className="col-sm-12">
                    <p>You've done your research, taken a few test drives and narrowed the field of possible new cars down to the exact one you want. Now you need to make an even bigger decision: should you buy or lease? Finding the right answer — an answer that's custom-tailored to your specific wants and needs — depends on an assortment of factors, including your daily driving habits, your level of financial commitment and even your personal tastes.</p>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-6">
                    <p className="text-center yellow">
                        <em>Which Is Right for you:<br />
                        Gasoline, Electric or Hybrid?</em>
                    </p>
                    <nav aria-label="...">
                      <ul className="pager">
                        <li><a href="#"><em>Take this quiz ></em></a></li>
                      </ul>
                    </nav>
                </div>
                <div className="col-sm-6">
                    <p className="text-center yellow">
                        <em>Which Is Right for You:<br />
                        Buy or Lease?</em>
                    </p>
                    <nav aria-label="...">
                      <ul className="pager">
                        <li><a href="#"><em>Take this quiz ></em></a></li>
                      </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

Results.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Results
