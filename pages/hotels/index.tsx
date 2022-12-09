import { useEffect } from "react";
import HotelItem from "../../components/hotels/hotel-item";

const HotelsPage = () => {


    useEffect(()=>{
        fetch("api/hotels").then(res => res.json()).then(data => console.log(data))
    }, [])

    return(
        <HotelItem />
    )
};

export default HotelsPage;