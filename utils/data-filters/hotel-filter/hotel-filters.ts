import {
  FacilityType,
  HotelFacilityType,
  FetchedDataType,
  HotelDataType,
} from "types";

export const filterHotelFacilities = (
  hotelFacilities: FacilityType,
  allFacilities: HotelFacilityType[]
) => {
  const [filteredFacility] = allFacilities.filter(
    (facility) =>
      facility.code === hotelFacilities.facilityCode &&
      facility.facilityGroupCode === hotelFacilities.facilityGroupCode &&
      facility.description.content.length !== 1
  );

  return filteredFacility;
};

export const filterFacilities = (
  hotel: HotelDataType,
  data: FetchedDataType | undefined
) => {
  if (hotel && data) {
    const { allFacilities } = data;
    const { facilities } = hotel;
    const facilitiesArray = facilities
      .map((hotelFacility) => {
        const amenity = filterHotelFacilities(hotelFacility, allFacilities);

        return amenity;
      })
      .filter((ament) => ament !== undefined);

    return facilitiesArray;
  }
};
