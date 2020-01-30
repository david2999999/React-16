import {savePeople} from "../../action/fetchRequest";
import {connect} from "react-redux/src";
import Form from "../Form";

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        fields: state.person,
        people: state.people,
        saveStatus: state.saveStatus
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (people) => {
            dispatch(savePeople(people));
        }
    };
}

const ReduxForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default ReduxForm;