import React from 'react'
import { IndexLink, Link } from 'react-router'
import './HomeView.scss'

const styles = {};

let data = require('../assets/data.json');

class Results2 extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            heroImage: require(`../../../img/${data.results[1].hero}`),
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
                    <h2>You should Buy a <b>{data.results[1].title}</b></h2>
                    <Link className="whystate">email my results></Link>
                    <p className="resultLegend">{data.results[1].text}, <a href="http://www.libertymutual.com/carbuying" >click here</a>&nbsp;to find a great deal.</p>
                </div>
                <div className="clearfix"></div>
                <div className="row">
                    <div className="col-sm-6">
                        <p className="text-center lm-blue">
                            <em>Which Is Right for you:<br />
                            Gasoline, Electric or Hybrid?</em>
                        </p>
                        <nav aria-label="...">
                          <ul className="pager">
                            <li><a href="#"><em>Take this quiz <span className="yellow">&gt;</span></em></a></li>
                          </ul>
                        </nav>
                    </div>
                    <div className="col-sm-6">
                        <p className="text-center lm-blue">
                            <em>Which Is Right for You:<br />
                            Buy or Lease?</em>
                        </p>
                        <nav aria-label="...">
                          <ul className="pager">
                            <li><a href="#"><em>Take this quiz <span className="yellow">&gt;</span></em></a></li>
                          </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

Results2.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Results2
