import { HotelFacilityType, FetchedDataType, FacilityGroupeType } from "types";

const filterGroupe = (
  hotelFacilities: HotelFacilityType[],
  facilityGroupe: FacilityGroupeType
) => {
  const facilityGroupName = hotelFacilities
    .filter(
      (hotelFacility) => hotelFacility.facilityGroupCode === facilityGroupe.code
    )
    .map((facility) => facility.description.content);

  return facilityGroupName;
};

export const filterFacilitiesByGroupe = (
  hotelFacilities: HotelFacilityType[] | undefined,
  data: FetchedDataType | undefined
) => {
  if (hotelFacilities && data) {
    const { facilityGroupe } = data;
    const facilitiesByGroupe = facilityGroupe
      .map((facilityGroupe) => {
        const facilityGroupName = filterGroupe(hotelFacilities, facilityGroupe);

        let amenities;
        if (facilityGroupName.length !== 0) {
          amenities = {
            groupeName: facilityGroupe.description.content,
            facilities: facilityGroupName,
          };
        }
        return amenities;
      })
      .filter((data: any) => data !== undefined);

    return facilitiesByGroupe;
  }
};
