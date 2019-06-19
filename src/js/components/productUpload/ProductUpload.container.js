import { connect } from "react-redux";
import ProductUpload from "./ProductUpload";
import {
  handleFileInput,
  handleTextInput
} from "../../redux/modules/productUpload.module.input";

export const mapDispatchToProps = {
  handleFileInput: handleFileInput,
  handleTextInput: handleTextInput
};
export const mapStateToProps = state => {
  return {
    file: state.file,
    jobSheetName: state.jobSheetName
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductUpload);
