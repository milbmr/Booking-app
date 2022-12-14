import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getHotelList } from "../../store/thunk";
import HotelItem from "../../components/hotels/hotel-item";

const HotelsPage = () => {
    const dispatch = useAppDispatch();
    const hotels = useAppSelector((state) => state.hotels.hotels)

    useEffect(()=>{
        dispatch(getHotelList())
    }, [])

    return(
        <HotelItem />
    )
};

export default HotelsPage;