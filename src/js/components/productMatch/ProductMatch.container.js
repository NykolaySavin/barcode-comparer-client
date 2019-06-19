import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import ProductMatch from "./ProductMatch";
import {handleFileInput, setDefaultState} from "../../redux/modules/productUpload.module.input";

export const mapStateToProps = state => {
    return {
        data: state.file.data,
        jobSheetName: state.jobSheetName
    };
};
export const mapDispatchToProps = {
    pickingClick:setDefaultState
};
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductMatch));
