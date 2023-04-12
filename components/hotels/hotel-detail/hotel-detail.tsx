import Carousel from "components/ui/carousel";
import CarouselHeader from "components/ui/carousel/carousel-header";
import HotelHeading from "components/ui/hotel-heading";
import ImageGrid from "components/ui/image-grid";
import Locations from "components/ui/locations";
import dynamic from "next/dynamic";
import useMediaQuery from "hook/use-media-query";
import classes from "./hotel-detail.module.scss";
import Amenities from "components/ui/amenties";
import { useRouter } from "next/router";
import { useGetFacilityQuery, useGetHotelQuery } from "store/slices/api-slice";
import { BiChevronDown } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
import { randomPrice } from "lib/helpers";
import { filter } from "utils";
import { amenityData } from "lib/icons";
import { useAppSelector } from "store/hooks";
import { useState, useMemo } from "react";
import { HotelDataType } from "types";
import AmenitiesList from "components/ui/amenties/amenities-list";
import OverviewIcons from "components/ui/overview-icons";

const MapNoSSR = dynamic(() => import("components/ui/map"), {
  ssr: false,
});

const HotelDetail = () => {
  const [showAmenities, setShowAmenities] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const isMobile = useMediaQuery('768');

  const router = useRouter();
  const { hotelid } = router.query;
  const { data: allFacilites } = useGetFacilityQuery();
  const { data: hotels } = useGetHotelQuery();

  const style = showAmenities ? { transform: "rotate(180deg)" } : {};
  const carouselCols = isMobile ? 2 : 4;

  const [hotel] = hotels ? hotels.filter((hotel) => hotel._id === hotelid) : [];

  const facilitiesArray = useMemo(() => {
    return filter.filterFacilities(hotel, allFacilites);
  }, [allFacilites, hotel]);

  const facilityGroupe = useMemo(() => {
    return filter.filterFacilitiesByGroupe(facilitiesArray, allFacilites);
  }, [allFacilites, facilitiesArray]);

  const countryData = useMemo(() => {
    return filter.filterCountries(hotel, allFacilites);
  }, [allFacilites]);

  const amentiesData = useMemo(() => {
    return filter.filterAmenitiesIcons(
      facilitiesArray,
      amenityData,
      BsCheckCircleFill
    );
  }, [facilitiesArray]);

  if (!hotel) return null;

  const {
    facilities,
    description,
    countryCode,
    stateCode,
    city,
    name,
    address,
    categoryGroupCode,
    coordinates,
    images,
  } = hotel;

  if (!allFacilites) return null;

  return (
    <div className={classes.hotel}>
      <Locations
        country={countryData}
        city={city.content.toLowerCase()}
        hotel={name.content}
      />
      <div className={classes.hotel__header}>
        <HotelHeading
          name={name.content}
          address={address.content}
          group={categoryGroupCode}
          price={randomPrice(coordinates.longitude)}
          rating={coordinates.longitude}
        />
        <ImageGrid images={images} />
      </div>

      <div className={`detail-section ${classes.hotel__info}`}>
        <h2 className={`secondary-heading ${classes.hotel__info_overview}`}>
          Overview
        </h2>
        <p className={classes.hotel__info_description}>
          {showMore
            ? description.content
            : `${description.content.substring(0, 250)}...`}
          <button
            onClick={() => setShowMore(!showMore)}
            className={classes.hotel__readbtn}
          >
            {showMore ? "Read less" : "Read more"}
          </button>
        </p>
        <div className={classes.hotel__info_amenities}>
          <OverviewIcons
            iconData={amentiesData}
            ratingNum={coordinates.longitude}
          />
        </div>
      </div>

      <div className={`detail-section ${classes.hotel__other}`}>
        <CarouselHeader title="You might also like" />
        <Carousel data={hotels} column={carouselCols} itemNumber={10} />
      </div>

      <div className={`detail-section ${classes.hotel__location}`}>
        <h2 className={`secondary-heading`}>Location</h2>
        <div className={classes.hotel__location_map}>
          <MapNoSSR />
        </div>
      </div>

      <div className={`detail-section ${classes.hotel__amenities}`}>
        <h2 className={`secondary-heading`}>Amenities</h2>
        <div className={classes.hotel__amenties_facility}>
          <Amenities amentiesData={amentiesData} />
        </div>
        <button
          onClick={() => setShowAmenities(!showAmenities)}
          className={classes.hotel__amenities_button}
        >
          {showAmenities
            ? "Show fewer amenities"
            : `Show All ${facilities && facilities.length} amenities`}
          <BiChevronDown
            style={style}
            className={classes.hotel__amenities_button_icon}
          />
        </button>
        {showAmenities && (
          <div className={classes.hotel__amenities_list}>
            <AmenitiesList facilityList={facilityGroupe} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelDetail;
