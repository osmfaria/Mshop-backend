import * as Yup from 'yup';

export const PublicationScalarFieldEnumSchema = Yup.mixed().oneOf(["id","type","title","year","milieage","price","description","vehicle_type","createdAt","updatedAt","userId"])