function createSheet_bc(data, opts) {
  var header = [];
  var ws = {};
  var R = 0;
  var C = 0;
  var payout = 0;
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
  var wchwidth = 0;
  var totalPayment = 0;

  if (range.s.r > R) range.s.r = R;
  if (range.s.c > C) range.s.c = C;
  if (range.e.r < R) range.e.r = R;
  if (range.e.c < C) range.e.c = C;
  var cell = {}, cell_ref = '', styinfo = false, colsize = [];

  if (data.length === 4) {
    $.each(data, function(index, tblData) {
      header = [];
      if (index === 0) {
        ws['!merges'] = [{s: {c: 0, r: R}, e: {c: 4, r: R}}];
        cell.v = tblData.warningText;
        cell.t = 's';
        cell.s = styles.disclaimer;
        cell_ref = XLSX.utils.encode_cell({c: C, r: R});
        ws[cell_ref] = cell;
        cell = {}; cell_ref = '';
        R += 2;
      } else {
        if (tblData.data.length) {
          C = 0;
          cell.v = tblData.tblName;
          cell_ref = XLSX.utils.encode_cell({c: C, r: R});
          cell.t = 's';
          cell.s = styles.tableHeader;
          ws[cell_ref] = cell;
          cell = {}; cell_ref = '';
          R += 2;

          if (tblData.columnDefs[0].hasOwnProperty('styleinfo')) {
            styinfo = true;
          }
          $.each(tblData.columnDefs, function (hkey, hvalue) {
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
            cell = {}; cell_ref = '';
          });

          R++;

          $.each(tblData.data, function(key, value) {
            $.each(header, function(hkey, val) {
              C = hkey;
              if (range.s.r > R) range.s.r = R;
              if (range.s.c > C) range.s.c = C;
              if (range.e.r < R) range.e.r = R;
              if (range.e.c < C) range.e.c = C;
              if (val.format === 'number') {
                cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : parseInt(value[val.heading]);
                cell.z = '#,##0';
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                if (typeof cell.v === 'number') cell.t = 'n';
                else cell.t = 's';
                ws[cell_ref] = cell;
              } else if (val.format === 'currency') {
                cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : parseFloat(value[val.heading]);
                cell.z = '$#,##0.00';
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                if (typeof cell.v === 'number') cell.t = 'n';
                else cell.t = 's';
                ws[cell_ref] = cell;
              } else if (val.format === 'date') {
                cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : datenum(new Date(value[val.heading]));
                cell.z = XLSX.SSF._table[14];
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                if (typeof cell.v === 'number') cell.t = 'n';
                else cell.t = 's';
                ws[cell_ref] = cell;
              } else if (val.format === 'percentage') {
                cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : parseFloat(value[val.heading])/100;
                cell.z = '0.00%';
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                if (typeof cell.v === 'number') cell.t = 'n';
                else cell.t = 's';
                ws[cell_ref] = cell;
              } else {
                cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
                cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : value[val.heading];
                cell_ref = XLSX.utils.encode_cell({c: C, r: R});
                cell.t = 's';
                ws[cell_ref] = cell;
              }
              cell = {}; cell_ref = '';
            });
            R++;
          });

          $.each(header, function(key, val) {
            C = key;
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            if (key === 0) {
              cell.s = styles.displayHeader;
              cell.v = 'Total';
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              cell.t = 's';
              ws[cell_ref] = cell;
            } else if (val.format === 'number') {
              cell.s = styles.displayHeader;
              cell.v = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? '' : parseInt(tblData.total[val.heading]);
              cell.z = '#,##0';
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              if (typeof cell.v === 'number') cell.t = 'n';
              else cell.t = 's';
              ws[cell_ref] = cell;
            } else if (val.format === 'currency') {
              cell.s = styles.displayHeader;
              cell.v = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? '' : parseFloat(tblData.total[val.heading]);
              cell.z = '$#,##0.00';
              payout = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? 0 : parseFloat(tblData.total[val.heading]);
              totalPayment += payout;
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              if (typeof cell.v === 'number') cell.t = 'n';
              else cell.t = 's';
              ws[cell_ref] = cell;
            } else {
              cell.s = styles.displayHeader;
              cell.v = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? '' : tblData.total[val.heading];
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              cell.t = 's';
              ws[cell_ref] = cell;
            }
            cell = {}; cell_ref = '';
          });
          R += 2;
        }
      }
    });
  } else {
    $.each(data, function(index, tblData) {
      header = [];
      if (tblData.data.length) {
        C = 0;
        cell.v = tblData.tblName;
        cell_ref = XLSX.utils.encode_cell({c: C, r: R});
        cell.t = 's';
        cell.s = styles.tableHeader;
        ws[cell_ref] = cell;
        cell = {}; cell_ref = '';
        R += 2;

        if (tblData.columnDefs[0].hasOwnProperty('styleinfo')) {
          styinfo = true;
        }
        $.each(tblData.columnDefs, function (hkey, hvalue) {
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
          cell = {}; cell_ref = '';
        });

        R++;

        $.each(tblData.data, function(key, value) {
          $.each(header, function(hkey, val) {
            C = hkey;
            if (range.s.r > R) range.s.r = R;
            if (range.s.c > C) range.s.c = C;
            if (range.e.r < R) range.e.r = R;
            if (range.e.c < C) range.e.c = C;
            if (val.format === 'number') {
              cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
              cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : parseInt(value[val.heading]);
              cell.z = '#,##0';
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              if (typeof cell.v === 'number') cell.t = 'n';
              else cell.t = 's';
              ws[cell_ref] = cell;
            } else if (val.format === 'currency') {
              cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
              cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : parseFloat(value[val.heading]);
              cell.z = '$#,##0.00';
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              if (typeof cell.v === 'number') cell.t = 'n';
              else cell.t = 's';
              ws[cell_ref] = cell;
            } else if (val.format === 'date') {
              cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
              cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : datenum(new Date(value[val.heading]));
              cell.z = XLSX.SSF._table[14];
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              if (typeof cell.v === 'number') cell.t = 'n';
              else cell.t = 's';
              ws[cell_ref] = cell;
            } else if (val.format === 'percentage') {
              cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
              cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : parseFloat(value[val.heading])/100;
              cell.z = '0.00%';
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              if (typeof cell.v === 'number') cell.t = 'n';
              else cell.t = 's';
              ws[cell_ref] = cell;
            } else {
              cell.s = val.hasOwnProperty('styleinfo') === true ? styles[val.styleinfo.tdata] : styles.default;
              cell.v = value[val.heading] === null || typeof value[val.heading] === 'undefined' ? 'N/A' : value[val.heading];
              cell_ref = XLSX.utils.encode_cell({c: C, r: R});
              cell.t = 's';
              ws[cell_ref] = cell;
            }
            cell = {}; cell_ref = '';
          });
          R++;
        });

        $.each(header, function(key, val) {
          C = key;
          if (range.s.r > R) range.s.r = R;
          if (range.s.c > C) range.s.c = C;
          if (range.e.r < R) range.e.r = R;
          if (range.e.c < C) range.e.c = C;
          if (key === 0) {
            cell.s = styles.displayHeader;
            cell.v = 'Total';
            cell_ref = XLSX.utils.encode_cell({c: C, r: R});
            cell.t = 's';
            ws[cell_ref] = cell;
          } else if (val.format === 'number') {
            cell.s = styles.displayHeader;
            cell.v = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? '' : parseInt(tblData.total[val.heading]);
            cell.z = '#,##0';
            cell_ref = XLSX.utils.encode_cell({c: C, r: R});
            if (typeof cell.v === 'number') cell.t = 'n';
            else cell.t = 's';
            ws[cell_ref] = cell;
          } else if (val.format === 'currency') {
            cell.s = styles.displayHeader;
            cell.v = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? '' : parseFloat(tblData.total[val.heading]);
            cell.z = '$#,##0.00';
            payout = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? 0 : parseFloat(tblData.total[val.heading]);
            totalPayment += payout;
            cell_ref = XLSX.utils.encode_cell({c: C, r: R});
            if (typeof cell.v === 'number') cell.t = 'n';
            else cell.t = 's';
            ws[cell_ref] = cell;
          } else {
            cell.s = styles.displayHeader;
            cell.v = tblData.total[val.heading] === null || typeof tblData.total[val.heading] === 'undefined' ? '' : tblData.total[val.heading];
            cell_ref = XLSX.utils.encode_cell({c: C, r: R});
            cell.t = 's';
            ws[cell_ref] = cell;
          }
          cell = {}; cell_ref = '';
        });
        R += 2;
      }
    });
  }

  C = 0;
  cell = {}; cell_ref = '';
  if (range.s.r > R) range.s.r = R;
  if (range.s.c > C) range.s.c = C;
  if (range.e.r < R) range.e.r = R;
  if (range.e.c < C) range.e.c = C;
  cell.s = styles.PeachPuff;
  cell.v = 'Total Payment';
  cell_ref = XLSX.utils.encode_cell({c: C, r: R});
  cell.t = 's';
  ws[cell_ref] = cell;

  C++;
  cell = {}; cell_ref = '';
  if (range.s.r > R) range.s.r = R;
  if (range.s.c > C) range.s.c = C;
  if (range.e.r < R) range.e.r = R;
  if (range.e.c < C) range.e.c = C;
  cell.s = styles.PeachPuff;
  cell.v = parseFloat(totalPayment);
  cell.z = '$#,##0.00';
  cell_ref = XLSX.utils.encode_cell({c: C, r: R});
  if (typeof cell.v === 'number') cell.t = 'n';
  else cell.t = 's';
  ws[cell_ref] = cell;

  if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
  ws['!cols'] = colsize;
  return ws;
}

function datenum(v, date1904) {
  if (date1904) v+=1462;
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

function exportReport_bc(data, filename, format) {
  var wb = new Workbook();
  wb.Sheets.data = createSheet_bc(data);
  wb.SheetNames.push('data');
  exportIt_bc(format, wb, filename, data);
}

function exportIt_bc(format, wb, filename, data) {
  if (format === 'EXCEL') {
    var mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      extension = '.xlsx',
      name = filename,
      excelData;
    var wopts = {bookType: 'xlsx', bookSST: false, type: 'binary'},
      wbout = XLSX.write(wb, wopts);
    excelData = string2ArrayBuffer(wbout);
    saveAs(new Blob([excelData], {type: mime + ';' + 'charset=utf-8'}), name + extension);
  } else if (format === 'CSV') {
    var mime = 'text/csv',
      extension = '.csv',
      name = filename;
    var result = [];
    var rObjArr = XLSX.utils.sheet_to_csv(wb.Sheets['data']);
    console.log(rObjArr);
    if (rObjArr.length > 0) {
      result.push('');
      result.push(rObjArr);
    }
    var csvData = result.join('\n');
    saveAs(new Blob([csvData], {type: mime + ';' + 'charset=utf-8'}), name + extension);
  } else {
    var mime = 'application/json',
      extension = '.json',
      name = filename;
      data.forEach(function(item) {
        delete item.columnDefs;
      });
    saveAs(new Blob([JSON.stringify(data)], {type: mime + ';' + 'charset=utf-8'}), name + extension);
  }
}
