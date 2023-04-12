import { IconType } from "react-icons";
import { HotelFacilityType, amenityDataType } from "types";

export const filterAmenitiesIcons = (
  facilities: HotelFacilityType[] | undefined,
  amenityData: amenityDataType[],
  genericIcon: IconType
) => {
  if (facilities) {
    const icons = amenityData.map((amenity, idx) => {
      const [facility] = facilities.filter(
        (facility) => facility.description.content === amenity.name
      );

      let data;
      if (facility) {
        data = { name: facility.description.content, icon: amenity.icon };
      } else {
        data = {
          name: facilities[idx].description.content,
          icon: genericIcon,
        };
      }

      return data;
    });

    return icons;
  }
};
