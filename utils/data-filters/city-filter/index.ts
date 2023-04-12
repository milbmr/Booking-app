import { HotelDataType } from "types";

export function cityFilter(data: HotelDataType[]) {
  const filteredData = data.map((hotel) => {
    const city = hotel.city.content;
    const filteredHotels = data
      .filter((hotel) => {
        return city === hotel.city.content;
      })
      .map((hotel) => hotel.name.content);

    return {
      city: hotel.city.content,
      hotels: filteredHotels,
    };
  });

  return filteredData;
}
