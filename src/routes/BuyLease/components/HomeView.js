import React from 'react'
import { IndexLink, Link } from 'react-router'
import Overlay from '../../../components/Overlay'
import Results from './Results'
import Results2 from './Results2'
import './HomeView.scss'

const styles = {};

let data = require('../assets/data.json');

class HomeView extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false,
            Index: 0,
            page: 1,
            total: 0,
            progress: 0,
            answear: -1,
            points: 0,
            checked: this.props.checkValue,
        }
    }

    componentDidMount() {
        this.setState({
            total: data.quiz.length,
        })
    }

    buildStyle = () => {
        return ({
            progress: {
                width: this.state.progress,
            }
        })
    }

    whyState = () => {
        this.setState({
            show: true,
        })
    }
    goNext = (ind) => {
        if(this.state.checked) {
            let points = data.quiz[this.state.Index].value * this.state.points;
            if(this.state.page < this.state.total) {
                ind++;
                let p = this.state.page+1;
                this.setState({
                    ...this.state,
                    Index: ind,
                    page: p,
                });
                this.props.updateView([p, this.state.total, points]);
            } else {
                this.props.updateView([this.state.page, this.state.total, points]);
                this.props.resultsFunction();
            }
        }
    }

    goPrev = (ind) => {
        if(ind > 0){
            --ind;
            let p = this.state.page-1;
            this.setState({
                Index: ind,
                page: p,
                answear: '',
                points: 0
            });
            this.props.backFunction([ind, this.state.total])
        }
    }

    handleRadios = (event) => {
        //console.log(event.target.alt);
        this.setState({
            ...this.state,
            answear: event.target.value,
            checked: event.target.checked,
            points: event.target.alt,
        })
    }

    handleClose = () => {
        this.setState({show: false});
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            progress: `${nextProps.progress}%`,
            checked: nextProps.checkValue,
        })
        //console.log('percentage', nextProps.progress)
    }

    renderQuizorResults = () => {
        if(this.props.pageView == 'quizz') {
            return(
                <div>
                    <div className="row subheaderbar" >
                        <em>{data.quizName}</em>
                    </div>
                    <h3>{data.quiz[this.state.Index].question}</h3>
                    <div className="text-left">
                        <a className="whystate" onClick={this.whyState}>why this question? ></a>
                    </div>
                    <div className="text-left">
                        {data.quiz[this.state.Index].response.map(function(res, r){
                            //console.log("res.val", this.state.answear)
                            return(
                                <div className="radio" key={r}>
                                  <label>
                                    <input type="radio" name={`optionsRadios`} value={res.res} onChange={this.handleRadios} alt={res.val} checked={this.state.answear == res.res} />
                                    {res.res}
                                  </label>
                                </div>
                            )
                        }, this)}
                    </div>
                    <div className="clearfix"></div>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100" style={this.buildStyle().progress}>
                        <span className="sr-only">{this.state.progress} Complete</span>
                      </div>
                    </div>
                    <div className="text-right">
                        <em>{this.state.page} of {this.state.total}</em>
                    </div>
                    <div className="clearfix"></div>
                    <nav aria-label="...">
                      <ul className="pager">
                          <li className="previous"><a href="javascript:void(0)" onClick={this.goPrev.bind(this, this.state.Index)}><span className="yellow">&lt;</span> <em>back</em></a></li>
                          <li className="next"><a href="javascript:void(0)" onClick={this.goNext.bind(this, this.state.Index)}><em>next</em> <span className="yellow">&gt;</span></a></li>
                      </ul>
                    </nav>
                </div>
                )
            } else if(this.props.pageView == 'results') {
                console.log("props range", this.props.range);
                if(this.props.range >= 1.5) {
                    return(
                        <div>
                            <Results />
                        </div>
                    )
                } else if(this.props.range < 1.5 ) {
                    return(
                        <div>
                            <Results2 />
                        </div>
                    )
                }
            }
    }

    render() {
        //console.log('HomeView', this.props);
        //console.log('json data', data);
        return (
          <div className="container">
            <div className="col-md-12">
                {this.renderQuizorResults()}
            </div>
            <Overlay show={this.state.show} onHide={()=>this.handleClose()}>
                {data.quiz[this.state.Index].why}
            </Overlay>
          </div>
        )
    }
}

HomeView.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default HomeView
