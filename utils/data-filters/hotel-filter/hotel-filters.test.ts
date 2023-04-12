import { render, screen } from "@testing-library/react";
import { filterFacilities, filterHotelFacilities } from "./hotel-filters";
import { HotelDataType } from "types";

const hotel = {
  facilities: [
    {
      facilityCode: 8,
      facilityGroupCode: 5,
    },
    {
      facilityCode: 2,
      facilityGroupCode: 4,
    },
  ],
};

const data = {
  allFacilities: [
    {
      code: 8,
      facilityGroupCode: 5,
      description: { content: "free wifi" },
    },
    {
      code: 2,
      facilityGroupCode: 4,
      description: { content: "pool" },
    },
    {
      code: 7,
      facilityGroupCode: 9,
      description: { content: "tv" },
    },
  ],

  facilityGroupe: [],
  countriesCode: [],
};

describe("test facility filter function", () => {
  it("filter facilities", () => {
    const facilities = filterFacilities(hotel as HotelDataType, data);

    expect(facilities).toHaveLength(2);
    expect(facilities).toEqual([
      {
        code: 8,
        facilityGroupCode: 5,
        description: { content: "free wifi" },
      },
      {
        code: 2,
        facilityGroupCode: 4,
        description: { content: "pool" },
      },
    ]);
  });

  it("filter each hotel facility", () => {
    const eachFacility = filterHotelFacilities(
      hotel.facilities[0],
      data.allFacilities
    );

    expect(eachFacility).toEqual({
      code: 8,
      facilityGroupCode: 5,
      description: { content: "free wifi" },
    });
  });
});
