import React from "react";
import FileUploader from "../form/fileUploader/FileUploader";
import readExcel from "../../core/fileReaders/excelReader";
import TextInput from "../form/textInput/TextInput";
import { Redirect } from "react-router-dom";

export default function ProductUpload({
  handleFileInput,
  handleTextInput,
  file: { data, error },
  jobSheetName
}) {
    console.dir(1)
  return (
    <>
      {data && data.length != 0 && <Redirect to="/product" />}
      <div className="productUpload">
        {error && <div>{error}</div>}
        <form>
          <TextInput
            label="Enter JobSheet"
            name="jobSheetName"
            action={handleTextInput}
          />
          <FileUploader
            label="Select File"
            onFileLoaded={event =>
              handleFileInput(
                readExcel.bind(null, event, jobSheetName, [
                  "code",
                  "description",
                  "quantity"
                ])
              )
            }
          />
        </form>
      </div>
    </>
  );
}
