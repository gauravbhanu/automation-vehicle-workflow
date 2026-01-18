// User and Authentication Types
export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  role: 'ADMIN' | 'USER';
  branch: string;
  mobile: string;
  createdAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  currentUser: User | null;
}

// Vehicle Document Types
export interface VehicleRecord {
  id: string;
  regnNo: string;
  ownerName: string;
  fatherName: string;
  address: string;
  mfgMonthYear: string;
  dateOfRegn: string;
  vehicleClass: string;
  fuelType: string;
  makerModel: string;
  chassisNo: string;
  engineNo: string;
  fitnessUpto: string;
  taxUpto: string;
  insuranceUpto: string;
  pucUpto: string;
  permitUpto: string;
  ownerMobile: string;
  
  // Workflow fields
  registerName: string;
  fileStatus: string;
  workDate: string;
  dueDate: string;
  dueTime: string;
  assignedUser: string;
  remark: string;
  uploadedBy: string;
  uploadedAt: string;
  
  // Transfer details
  transferName: string;
  transferFatherName: string;
  transferAddress: string;
  transferAadhaarNo: string;
  
  // Document type
  documentType: 'RC' | 'DL' | 'MANUAL';
  
  // Sync status
  syncedToSheets: boolean;
  lastSyncedAt: string;
}

// AI Extraction Types
export interface ExtractedData {
  documentType: 'RC' | 'DL';
  regnNo: string;
  ownerName: string;
  fatherName: string;
  address: string;
  mfgMonthYear: string;
  dateOfRegn: string;
  vehicleClass: string;
  fuelType: string;
  makerModel: string;
  chassisNo: string;
  engineNo: string;
  fitnessUpto: string;
  taxUpto: string;
  insuranceUpto: string;
  pucUpto: string;
  permitUpto: string;
}

export interface AadhaarData {
  name: string;
  fatherName: string;
  address: string;
  aadhaarNo: string;
}

// Configuration Types
export interface AppConfig {
  registerNames: string[];
  fileStatuses: string[];
  googleScriptUrl: string;
}

// Modal States
export interface ModalState {
  upload: boolean;
  status: boolean;
  userManagement: boolean;
  settings: boolean;
  aadhaarScan: boolean;
  syncSetup: boolean;
  staffReminder: boolean;
}
