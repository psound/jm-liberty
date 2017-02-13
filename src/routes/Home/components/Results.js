import React from 'react'
import { IndexLink, Link } from 'react-router'
import './HomeView.scss'

const styles = {};

let data = require('../assets/data.json');

class Results extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            heroImage: require(`../../../img/${data.results[0].hero}`),
        }
    }

    componentDidMount() {}

    componentWillReceiveProps(nextProps) {}

    render() {
        return(
            <div className={'results'}>
                <div className="r1">
                    <img src={this.state.heroImage} className="img-responsive img-circle results" />
                </div>
                <div className="row2">
                    <h2>{data.results[0].title}</h2>
                    <Link className="whystate">email my results></Link>
                    <p className="resultLegend">{data.results[0].text}, , <a href="http://www.libertymutual.com/carbuying" >click here</a></p>
                </div>
                <div className="clearfix"></div>
                <div className="col-sm-6">
                    <p className="text-center yellow">
                        <em>Which Is Right for you:<br />
                        Gasoline, Electric or Hybrid?</em>
                    </p>
                    <nav aria-label="...">
                      <ul className="pager">
                        <li><a href="#"><em>Take this quiz ></em></a>&nbsp;to find a great deal.</li>
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
