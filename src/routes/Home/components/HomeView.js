import React from 'react'
import { IndexLink, Link } from 'react-router'
import DuckImage from '../assets/Duck.jpg'
import Overlay from '../../../components/Overlay'
import './HomeView.scss'

const styles = {};

let data = require('../../../data/data.json');

class  HomeView extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            show: false,
            Index: 0,
            page: 1,
            total: 0,
            progress: 0,
            answear: '',
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
        if(this.state.page < this.state.total) {
            if(this.state.checked) {
                ind++;
                let p = this.state.page+1;
                this.setState({
                    ...this.state,
                    Index: ind,
                    page: p,
                });
                this.props.updateView([p, this.state.total, this.state.answear]);
            }
        } else {
            console.log('result');
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
            });
            this.props.backFunction([ind, this.state.total])
        }
    }

    handleRadios = (event) => {
        //console.log(event.target);
        this.setState({
            ...this.state,
            answear: event.target.value,
            checked: event.target.checked,
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

    render() {
        console.log('HomeView', this.props);
        //console.log('json data', data);
        return (
          <div className="container">
            <div className="col-md-12">
                <h3>{data.quiz[this.state.Index].question}</h3>
                <div className="text-left">
                    <a className="whystate" onClick={this.whyState}>why this question? ></a>
                </div>
                <div className="text-left">
                    {data.quiz[this.state.Index].response.map(function(res, r){
                        return(
                            <div className="radio" key={r}>
                              <label>
                                <input type="radio" name={`optionsRadios`} value={res} onChange={this.handleRadios} checked={this.state.answear === res} />
                                {res}
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
                    <li className="previous"><a href="javascript:void(0)" onClick={this.goPrev.bind(this, this.state.Index)}><span aria-hidden="true">&larr;</span> Back</a></li>
                    <li className="next"><a href="javascript:void(0)" onClick={this.goNext.bind(this, this.state.Index)}>Next <span aria-hidden="true">&rarr;</span></a></li>
                  </ul>
                </nav>
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
