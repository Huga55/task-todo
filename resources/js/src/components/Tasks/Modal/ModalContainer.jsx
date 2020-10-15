import React from "react";
import Modal from "./Modal";
import {connect} from "react-redux";
import {deactiveTaskFrom} from "../../../redux/taskForm-reducer";

class ModalContainer extends React.Component {
    render() {
        return <Modal {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        isActive: state.taskForm.isActive,
    }
}

export default connect(mapStateToProps, {deactiveTaskFrom})(ModalContainer);