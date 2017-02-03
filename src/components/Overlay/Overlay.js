import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Button, Modal } from 'react-bootstrap';


let styles = {};

class Overlay extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
          show: false,
      };
    }

    handleOpen = () => {
        this.setState({show: true});
    };

    handleClose = () => {
        this.setState({show: false});
    };

    componentDidMount() {

    };

    componentWillReceiveProps(nextProps) {
        //console.log('did update', nextProps);
        this.setState({show: nextProps.show});
    };

    render() {
        return(
            <div>
                <Modal show={this.state.show} onHide={this.props.onHide}>
                  <Modal.Header closeButton>
                  </Modal.Header>
                  <Modal.Body>
                    <p>{this.props.children}</p>
                  </Modal.Body>
                </Modal>
            </div>
        )
    }

}

export default Overlay;
