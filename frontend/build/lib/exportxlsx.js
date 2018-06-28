function createSheet(data, opts) {
  var header = [];
  var ws = {};
  var R = 0;
  var C = 0;
  var styles = {
    tableHeader: {
      font: {bold: true},
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin', color: {auto: 1}},
        bottom: {style: 'thin', color: {auto: 1}},
        right: {style: 'thin', color: {auto: 1}},
        left: {style: 'thin', color: {auto: 1}}
      }
    },
    displayHeader: {
      font: {bold: true},
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin', color: {auto: 1}},
        bottom: {style: 'thin', color: {auto: 1}},
        right: {style: 'thin', color: {auto: 1}},
        left: {style: 'thin', color: {auto: 1}}
      },
      fill: {fgColor: {rgb: 'FF9CC3E6'}}
    },
    default: {
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin', color: {auto: 1}},
        bottom: {style: 'thin', color: {auto: 1}},
        right: {style: 'thin', color: {auto: 1}},
        left: {style: 'thin', color: {auto: 1}}
      }
    },
    AliceBlue: {
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin'},
        bottom: {style: 'thin'},
        right: {style: 'thin'},
        left: {style: 'thin'}
      },
      fill: {fgColor: {rgb: 'FFE6E6FA'}}
    },
    LightCyan: {
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin'},
        bottom: {style: 'thin'},
        right: {style: 'thin'},
        left: {style: 'thin'}
      },
      fill: {fgColor: {rgb: 'FFE0FFFF'}}
    },
    PeachPuff: {
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin'},
        bottom: {style: 'thin'},
        right: {style: 'thin'},
        left: {style: 'thin'}
      },
      fill: {fgColor: {rgb: 'FFFFDAB9'}}
    },
    white: {
      alignment: {vertical: 'center', horizontal: 'center'},
      border: {
        top: {style: 'thin'},
        bottom: {style: 'thin'},
        right: {style: 'thin'},
        left: {style: 'thin'}
      },
    },
    disclaimer: {
      alignment: {vertical: 'center', horizontal: 'left'},
      font: {color: {rgb: 'FFFF0000'}}
    }
  };

  var range = {s: {c: 10000000, r: 10000000}, e: {c: 0, r: 0}};
  var pattern = /^\d+$/;
  var wchwidth = 0,
    defaultValue,
    currentValue = 0,
    parse = true;

  if (range.s.r > R) range.s.r = R;
  if (range.s.c > C) range.s.c = C;
  if (range.e.r < R) range.e.r = R;
  if (range.e.c < C) range.e.c = C;
  var cell = {}, cell_ref = '', styinfo = false, colsize = [];

  if (data.length) {
    $.each(data, function (tblNo, tabledata) {
      if (tabledata.data.length) {
        if (tabledata.columnDefs[0].hasOwnProperty('styleinfo')) {
          styinfo = true;
        }
        $.each(tabledata.columnDefs, function (hkey, hvalue) {
          if (styinfo) {
            header.push({heading: hvalue.field, format: hvalue.format, styleinfo: hvalue.styleinfo});
          } else {
            header.push({heading: hvalue.field, format: hvalue.format});
          }
          if (typeof hvalue.width !== 'undefined') {
            wchwidth = pattern.test(hvalue.width) ? parseInt(hvalue.width, 10) / 4 : parseInt(hvalue.width, 10) * 2;
            colsize.push({wch: wchwidth});
          } else {
            colsize.push({wch: 20});
          }
          C = hkey;
          if (range.s.r > R) range.s.r = R;
          if (range.s.c > C) range.s.c = C;
          if (range.e.r < R) range.e.r = R;
          if (range.e.c < C) range.e.c = C;
          cell.s = styles.displayHeader;
          cell.v = hvalue.displayName;
          cell_ref = XLSX.utils.encode_cell({c: C, r: R});
          if (typeof cell.v === 'number') cell.t = 'n';
          else cell.t = 's';
          ws[cell_ref] = cell;
          cell = {};
          cell_ref = '';
        });
        R++;
        $.each(tabledata.data, function(key, value) {
            $.each(header, function(hkey, val) {
              C = hkey;
              if (range.s.r > R) range.s.r = R;
              if (range.s.c > C) range.s.c = C;
              if (range.e.r < R) range.e.r = R;
              if (range.e.c < C) range.e.c = C;
              defaultValue = 'N/A';
              currentValue = value[val.heading];
              if (val.hasOwnProperty('defaultValue') == true) {
                val.defaultValue.conditions.forEach(function (condition) {
                  if (condition === currentValue) {
                    defaultValue = val.defaultValue.value;
                    parse = false;
                  }
                });
              } else if (currentValue === null || typeof currentValue === 'undefined') {
                parse = false;
              } else {
                parse = true;
              }
              if(val.format == "number") {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                if (parse === false) {
                  cell.v = defaultValue
                } else if (!isNaN(currentValue)) {
                  cell.v = parseInt(currentValue, 10)
                } else {
                  cell.v = currentValue;
                }
                if (typeof cell.v === 'number') {
                  cell.t = 'n';
                  cell.z = '#,##0';
                } else {
                  cell.t = 's';
                }
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                ws[cell_ref] = cell;
              } else if(val.format == 'currency') {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                if (parse === false) {
                  cell.v = defaultValue
                } else if (!isNaN(currentValue)) {
                  cell.v = parseFloat(currentValue);
                } else {
                  cell.v = currentValue;
                }
                if (typeof cell.v === 'number') {
                  cell.t = 'n';
                  cell.z = '$#,##0.00';
                } else {
                  cell.t = 's';
                }
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                ws[cell_ref] = cell;
              } else if(val.format == 'currency_inr') {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                if (parse === false) {
                  cell.v = defaultValue
                } else if (!isNaN(currentValue)) {
                  cell.v = parseFloat(currentValue);
                } else {
                  cell.v = currentValue;
                }
                if (typeof cell.v === 'number') {
                  cell.t = 'n';
                  cell.z = '₹#,##0.00';
                } else {
                  cell.t = 's';
                }
                cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
                ws[cell_ref] = cell;
              } else if (val.format == 'decimal') {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                if (parse === false) {
                  cell.v = defaultValue
                } else if (!isNaN(currentValue)) {
                  cell.v = parseFloat(currentValue);
                } else {
                  cell.v = currentValue;
                }
                if (typeof cell.v === 'number') {
                  cell.t = 'n';
                  cell.z = '#,##0.00';
                } else {
                  cell.t = 's';
                }
                cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
                ws[cell_ref] = cell;
              } else if(val.format == 'date') {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = parse === false ? defaultValue : new Date(currentValue) ? datenum(new Date(currentValue)): currentValue;
                cell.z = XLSX.SSF._table[14];
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                if (typeof cell.v === 'number') cell.t = 'n';
                else cell.t = 's';
                ws[cell_ref] = cell;
              } else if(val.format == "percentage") {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                if (parse === false) {
                  cell.v = defaultValue
                } else if (!isNaN(currentValue)) {
                  cell.v = parseFloat(currentValue) / 100;
                } else {
                  cell.v = currentValue;
                }
                if (typeof cell.v === 'number') {
                  cell.t = 'n';
                  cell.z = "0.00%";
                } else {
                  cell.t = 's';
                }
                cell_ref = XLSX.utils.encode_cell({ c: C, r: R });
                ws[cell_ref] = cell;
              } else {
                cell.s = val.hasOwnProperty('styleinfo') == true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = parse === false ? defaultValue : currentValue;
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                cell.t = 's';
                ws[cell_ref] = cell;
              }
              cell = {};
              cell_ref = '';
            });
          R++;
        });
      }
    });
  }

  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  ws['!cols'] = colsize;
  return ws;
}

function datenum(v, date1904) {
    if(date1904) v+=1462;
    var epoch = Date.parse(v);
    return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function Workbook() {
    if (!(this instanceof Workbook)) return new Workbook();
    this.SheetNames = [];
    this.Sheets = {};
}

function string2ArrayBuffer(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function exportReport(data, filename, format) {
  var wb = new Workbook();

  data.forEach(function(worksheet, index) {
    wb.Sheets[worksheet.sheetname] = createSheet(worksheet.data);
    wb.SheetNames.push(worksheet.sheetname);
  });

  exportIt(format, wb, filename);
}

function exportIt(format, wb, filename) {
    if (format == 'Excel') {
        var mime = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            extension = ".xlsx",
            name = filename,
            excelData;
        var wopts = {bookType: 'xlsx', bookSST: false, type: 'binary'},
            wbout = XLSX.write(wb, wopts);
        excelData = string2ArrayBuffer(wbout);
        saveAs(new Blob([excelData], {type: mime + ";" + "charset=utf-8"}), name + extension);
    } else if (format == 'CSV') {
        var mime = 'text/csv'
            extension = ".csv",
            name = filename;
        var result = [];
        wb.SheetNames.forEach(function(sheetName) {
            var rObjArr = XLSX.utils.sheet_to_csv(wb.Sheets[sheetName]);
            if(rObjArr.length > 0){
                result.push("Table " + sheetName);
                result.push("");
                result.push(rObjArr);
            }
        });
        var csvData = result.join("\n");
        saveAs(new Blob([csvData], {type: mime + ";" + "charset=utf-8"}), name + extension);
    } else {
        var mime = 'application/json'
            extension = ".json",
            name = filename;
        var result = {};
        wb.SheetNames.forEach(function(sheetName) {
            var rObjArr = XLSX.utils.sheet_to_row_object_array(wb.Sheets[sheetName]);
            if(rObjArr.length > 0){
                result[sheetName] = rObjArr;
            }
        });
        saveAs(new Blob([JSON.stringify(result)], {type: `${mime  };` + 'charset=utf-8'}), name + extension);
    }
}
