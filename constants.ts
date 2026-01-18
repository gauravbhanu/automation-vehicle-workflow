import { User, AppConfig, VehicleRecord } from './types';

// Background Images
export const IMAGES = {
  loginBg: 'https://d64gsuwffb70l.cloudfront.net/696c8fcc9d2f17eee1f95266_1768722490423_332a380f.png',
  dashboardBg: 'https://d64gsuwffb70l.cloudfront.net/696c8fcc9d2f17eee1f95266_1768722509832_40792ee4.png',
};

// Default Users
export const DEFAULT_USERS: User[] = [
  {
    id: '1',
    name: 'Admin User',
    username: 'admin',
    password: 'admin123',
    role: 'ADMIN',
    branch: 'Main Office',
    mobile: '9876543210',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Rahul Sharma',
    username: 'rahul',
    password: 'rahul123',
    role: 'USER',
    branch: 'Branch 1',
    mobile: '9876543211',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Priya Singh',
    username: 'priya',
    password: 'priya123',
    role: 'USER',
    branch: 'Branch 2',
    mobile: '9876543212',
    createdAt: new Date().toISOString(),
  },
];

// Sample Vehicle Records
export const SAMPLE_RECORDS: VehicleRecord[] = [
  {
    id: '1',
    regnNo: 'MP09CA1234',
    ownerName: 'Rajesh Kumar',
    fatherName: 'Shyam Kumar',
    address: '123, Main Road, Indore, MP',
    mfgMonthYear: '06/2020',
    dateOfRegn: '2020-07-15',
    vehicleClass: 'LMV',
    fuelType: 'Petrol',
    makerModel: 'Maruti Swift',
    chassisNo: 'MA3FJEB1S00123456',
    engineNo: 'K12MN1234567',
    fitnessUpto: '2025-07-14',
    taxUpto: '2025-03-31',
    insuranceUpto: '2025-06-30',
    pucUpto: '2025-01-15',
    permitUpto: '',
    ownerMobile: '9876543001',
    registerName: 'RC Transfer',
    fileStatus: 'In Progress',
    workDate: '2026-01-15',
    dueDate: '2026-01-20',
    dueTime: '17:00',
    assignedUser: 'rahul',
    remark: 'Documents verified, pending approval',
    uploadedBy: 'admin',
    uploadedAt: new Date().toISOString(),
    transferName: '',
    transferFatherName: '',
    transferAddress: '',
    transferAadhaarNo: '',
    documentType: 'RC',
    syncedToSheets: false,
    lastSyncedAt: '',
  },
  {
    id: '2',
    regnNo: 'MP09CB5678',
    ownerName: 'Sunita Devi',
    fatherName: 'Ram Prasad',
    address: '456, Gandhi Nagar, Bhopal, MP',
    mfgMonthYear: '03/2019',
    dateOfRegn: '2019-04-20',
    vehicleClass: 'LMV',
    fuelType: 'Diesel',
    makerModel: 'Hyundai Creta',
    chassisNo: 'MALBB51BWKM123456',
    engineNo: 'D4FA1234567',
    fitnessUpto: '2024-04-19',
    taxUpto: '2025-03-31',
    insuranceUpto: '2025-02-28',
    pucUpto: '2025-02-20',
    permitUpto: '',
    ownerMobile: '9876543002',
    registerName: 'Fitness Certificate',
    fileStatus: 'Pending',
    workDate: '2026-01-16',
    dueDate: '2026-01-18',
    dueTime: '12:00',
    assignedUser: 'priya',
    remark: 'Fitness expired, renewal required',
    uploadedBy: 'admin',
    uploadedAt: new Date().toISOString(),
    transferName: '',
    transferFatherName: '',
    transferAddress: '',
    transferAadhaarNo: '',
    documentType: 'RC',
    syncedToSheets: false,
    lastSyncedAt: '',
  },
  {
    id: '3',
    regnNo: 'DL2020123456',
    ownerName: 'Amit Verma',
    fatherName: 'Suresh Verma',
    address: '789, Sector 15, Gurgaon, HR',
    mfgMonthYear: '1990-05-15',
    dateOfRegn: '2015-08-10',
    vehicleClass: 'MCWG, LMV',
    fuelType: '',
    makerModel: '',
    chassisNo: '',
    engineNo: '',
    fitnessUpto: '2035-08-09',
    taxUpto: '',
    insuranceUpto: '',
    pucUpto: '',
    permitUpto: '',
    ownerMobile: '9876543003',
    registerName: 'Address Change',
    fileStatus: 'Documents Required',
    workDate: '2026-01-14',
    dueDate: '2026-01-25',
    dueTime: '15:00',
    assignedUser: 'rahul',
    remark: 'Address proof pending',
    uploadedBy: 'rahul',
    uploadedAt: new Date().toISOString(),
    transferName: '',
    transferFatherName: '',
    transferAddress: '',
    transferAadhaarNo: '',
    documentType: 'DL',
    syncedToSheets: false,
    lastSyncedAt: '',
  },
  {
    id: '4',
    regnNo: 'MP09CC9012',
    ownerName: 'Vikram Singh',
    fatherName: 'Balwant Singh',
    address: '321, Civil Lines, Jabalpur, MP',
    mfgMonthYear: '11/2021',
    dateOfRegn: '2021-12-05',
    vehicleClass: 'LMV',
    fuelType: 'CNG',
    makerModel: 'Tata Tiago',
    chassisNo: 'MAT623100M1234567',
    engineNo: 'REVOTRON1234567',
    fitnessUpto: '2026-12-04',
    taxUpto: '2025-03-31',
    insuranceUpto: '2025-11-30',
    pucUpto: '2025-06-05',
    permitUpto: '',
    ownerMobile: '9876543004',
    registerName: 'Hypothecation Removal',
    fileStatus: 'Completed',
    workDate: '2026-01-10',
    dueDate: '2026-01-12',
    dueTime: '11:00',
    assignedUser: 'priya',
    remark: 'NOC received from bank, HP removed',
    uploadedBy: 'admin',
    uploadedAt: new Date().toISOString(),
    transferName: '',
    transferFatherName: '',
    transferAddress: '',
    transferAadhaarNo: '',
    documentType: 'RC',
    syncedToSheets: true,
    lastSyncedAt: new Date().toISOString(),
  },
  {
    id: '5',
    regnNo: 'MP09CD3456',
    ownerName: 'Meena Patel',
    fatherName: 'Ramesh Patel',
    address: '555, Vijay Nagar, Indore, MP',
    mfgMonthYear: '08/2018',
    dateOfRegn: '2018-09-25',
    vehicleClass: 'LMV',
    fuelType: 'Petrol',
    makerModel: 'Honda City',
    chassisNo: 'MAKGM5530J1234567',
    engineNo: 'L15Z11234567',
    fitnessUpto: '2023-09-24',
    taxUpto: '2024-03-31',
    insuranceUpto: '2024-08-31',
    pucUpto: '2024-03-25',
    permitUpto: '',
    ownerMobile: '9876543005',
    registerName: 'RC Transfer',
    fileStatus: 'Under Verification',
    workDate: '2026-01-17',
    dueDate: '2026-01-15',
    dueTime: '14:00',
    assignedUser: 'admin',
    remark: 'Transfer to new owner - verification in progress',
    uploadedBy: 'priya',
    uploadedAt: new Date().toISOString(),
    transferName: 'Anil Sharma',
    transferFatherName: 'Mohan Sharma',
    transferAddress: '777, Palasia, Indore, MP',
    transferAadhaarNo: '1234 5678 9012',
    documentType: 'RC',
    syncedToSheets: false,
    lastSyncedAt: '',
  },
];

// Default Configuration
export const DEFAULT_CONFIG: AppConfig = {
  registerNames: [
    'RC Transfer',
    'RC Renewal',
    'Fitness Certificate',
    'Tax Payment',
    'Insurance Renewal',
    'PUC Certificate',
    'Permit Renewal',
    'Hypothecation Addition',
    'Hypothecation Removal',
    'Address Change',
    'Duplicate RC',
    'NOC',
  ],
  fileStatuses: [
    'Pending',
    'In Progress',
    'Documents Required',
    'Under Verification',
    'Approved',
    'Completed',
    'Rejected',
  ],
  googleScriptUrl: '',
};

// Table Headers for Desktop View
export const TABLE_HEADERS = [
  { key: 'regnNo', label: 'Regn No' },
  { key: 'ownerName', label: 'Owner Name' },
  { key: 'ownerMobile', label: 'Mobile' },
  { key: 'vehicleClass', label: 'Vehicle Class' },
  { key: 'registerName', label: 'Register' },
  { key: 'fileStatus', label: 'Status' },
  { key: 'dueDate', label: 'Due Date' },
  { key: 'assignedUser', label: 'Assigned To' },
  { key: 'actions', label: 'Actions' },
];

// AI System Prompts
export const SYSTEM_PROMPTS = {
  rcExtraction: `You are an expert document analyzer specializing in Indian vehicle Registration Certificates (RC).
Extract the following fields from the RC document image:
- Registration Number (Regn No)
- Owner Name
- Father's/Husband's Name
- Address
- Manufacturing Month-Year
- Date of Registration
- Vehicle Class
- Fuel Type
- Maker/Model
- Chassis Number
- Engine Number
- Fitness Valid Upto
- Tax Valid Upto
- Insurance Valid Upto
- PUC Valid Upto
- Permit Valid Upto

Return the data in JSON format with these exact keys:
{
  "documentType": "RC",
  "regnNo": "",
  "ownerName": "",
  "fatherName": "",
  "address": "",
  "mfgMonthYear": "",
  "dateOfRegn": "",
  "vehicleClass": "",
  "fuelType": "",
  "makerModel": "",
  "chassisNo": "",
  "engineNo": "",
  "fitnessUpto": "",
  "taxUpto": "",
  "insuranceUpto": "",
  "pucUpto": "",
  "permitUpto": ""
}`,

  dlExtraction: `You are an expert document analyzer specializing in Indian Driving Licenses (DL).
Extract the following fields from the DL document image and MAP them to vehicle record fields:
- License Number → Map to "regnNo"
- Name → Map to "ownerName"
- Father's/Husband's Name → Map to "fatherName"
- Address → Map to "address"
- Date of Birth → Map to "mfgMonthYear"
- Issue Date → Map to "dateOfRegn"
- Vehicle Class/COV → Map to "vehicleClass"
- Valid Till → Map to "fitnessUpto"

Return the data in JSON format with these exact keys:
{
  "documentType": "DL",
  "regnNo": "",
  "ownerName": "",
  "fatherName": "",
  "address": "",
  "mfgMonthYear": "",
  "dateOfRegn": "",
  "vehicleClass": "",
  "fuelType": "",
  "makerModel": "",
  "chassisNo": "",
  "engineNo": "",
  "fitnessUpto": "",
  "taxUpto": "",
  "insuranceUpto": "",
  "pucUpto": "",
  "permitUpto": ""
}`,

  documentDetection: `Analyze this document image and determine if it is:
1. A Vehicle Registration Certificate (RC) - Contains vehicle details, registration number starting with state code
2. A Driving License (DL) - Contains license number, photo, personal details

First identify the document type, then extract all relevant information.

If it's an RC, extract vehicle registration details.
If it's a DL, extract license details and map them to vehicle record fields:
- License No → regnNo
- DOB → mfgMonthYear
- Issue Date → dateOfRegn
- Valid Till → fitnessUpto

Return JSON with documentType as first field ("RC" or "DL").`,

  aadhaarExtraction: `You are an expert document analyzer specializing in Indian Aadhaar cards.
Extract the following fields from the Aadhaar card image:
- Name
- Father's Name / Husband's Name
- Address (complete)
- Aadhaar Number (12 digits)

Return the data in JSON format:
{
  "name": "",
  "fatherName": "",
  "address": "",
  "aadhaarNo": ""
}`,
};

// Google Apps Script Code Template
export const GOOGLE_APPS_SCRIPT_CODE = `// Google Apps Script Code for Yatayat AI Tool Sync
// Deploy this as a Web App with "Anyone" access

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Headers for the sheet
    const headers = [
      'Regn No', 'Owner Name', 'Father Name', 'Address', 'Mobile',
      'Mfg Month-Year', 'Date of Regn', 'Vehicle Class', 'Fuel Type',
      'Maker Model', 'Chassis No', 'Engine No', 'Fitness Upto',
      'Tax Upto', 'Insurance Upto', 'PUC Upto', 'Permit Upto',
      'Register Name', 'File Status', 'Work Date', 'Due Date',
      'Due Time', 'Assigned User', 'Remark', 'Last Updated'
    ];
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }
    
    // Find existing row by Regn No
    const regnNoCol = 1;
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    let rowIndex = -1;
    
    for (let i = 1; i < values.length; i++) {
      if (values[i][0] === data.regnNo) {
        rowIndex = i + 1;
        break;
      }
    }
    
    const rowData = [
      data.regnNo, data.ownerName, data.fatherName, data.address, data.ownerMobile,
      data.mfgMonthYear, data.dateOfRegn, data.vehicleClass, data.fuelType,
      data.makerModel, data.chassisNo, data.engineNo, data.fitnessUpto,
      data.taxUpto, data.insuranceUpto, data.pucUpto, data.permitUpto,
      data.registerName, data.fileStatus, data.workDate, data.dueDate,
      data.dueTime, data.assignedUser, data.remark, new Date().toISOString()
    ];
    
    if (rowIndex > 0) {
      // Update existing row
      sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
    } else {
      // Add new row
      sheet.appendRow(rowData);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: rowIndex > 0 ? 'Updated' : 'Created'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'Yatayat AI Tool Sync API is running'
  })).setMimeType(ContentService.MimeType.JSON);
}`;

// WhatsApp Message Templates
export const WHATSAPP_TEMPLATES = {
  clientReminder: (record: any) => `🚗 *यातायात अनुस्मारक*

नमस्ते ${record.ownerName} जी,

आपके वाहन *${record.regnNo}* का ${record.registerName} कार्य ${record.dueDate} को देय है।

📋 *विवरण:*
• वाहन नंबर: ${record.regnNo}
• कार्य: ${record.registerName}
• स्थिति: ${record.fileStatus}
• नियत तिथि: ${record.dueDate}

कृपया समय पर अपने दस्तावेज़ जमा करें।

धन्यवाद,
*भानु जैन गौरव जैन यातायात*
📞 संपर्क: Main Office`,

  staffReminder: (staffName: string, pendingTasks: any[]) => `👤 *कर्मचारी कार्य सूची*

नमस्ते ${staffName} जी,

आपके पास ${pendingTasks.length} लंबित कार्य हैं:

${pendingTasks.map((task, i) => `${i + 1}. ${task.regnNo} - ${task.registerName} (${task.dueDate})`).join('\n')}

कृपया प्राथमिकता के अनुसार कार्य पूर्ण करें।

*भानु जैन गौरव जैन यातायात*`,
};

// Branch Options
export const BRANCHES = [
  'Main Office',
  'Branch 1',
  'Branch 2',
  'Branch 3',
  'Branch 4',
];
