import XLSX from 'xlsx';
export default function readExcel(event,jobsheetName,headers){
    var rABS = true;
    var data = event.target.result;
    if (!rABS) data = new Uint8Array(data);
    var workbook = XLSX.read(data, { type: rABS ? "binary" : "array" });
    if(!workbook.Sheets[jobsheetName])
        throw new Error("Enter correct JobSheet Name");
    var fileData = XLSX.utils.sheet_to_json(
        workbook.Sheets[jobsheetName],
        { header: headers }
    );
    if(fileData.length<3)
        throw new Error("Correct good file");
    return fileData.slice(3,fileData.length);
};