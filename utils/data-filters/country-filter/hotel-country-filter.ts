import { FetchedDataType, HotelDataType } from "types";

export const filterCountries = (
  hotel: HotelDataType,
  data: FetchedDataType | undefined
) => {
  if (data && hotel) {
    const { countriesCode } = data;
    const { countryCode, stateCode } = hotel;

    const [country] = countriesCode
      .filter((code) => code.code === countryCode)
      .map((country) => {
        const [state] = country.states.filter(
          (state) => state.code === stateCode
        );

        const countryData = {
          countryName: country.description.content,
          state: state.name,
        };
        return countryData;
      });

    return country;
  }
};
