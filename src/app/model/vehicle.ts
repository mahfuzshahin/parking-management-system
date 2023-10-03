export class Vehicle{
  id: number;
  vehicleLicenseNumber: string | undefined;
  vehicleType: string | undefined;
  vehicleOwnerName: string | undefined;
  vehicleOwnerPhone: string | undefined;
  status: string | undefined;
  carOwnerAddress: string | undefined;
  carEntryDate: string | undefined;
  carEntryTime: string | undefined;
  carExitDate: string | undefined;
  carExitTime: string | undefined;
  parkingCharge: string | undefined;

  constructor() {
    this.id = 0;
  }
}
