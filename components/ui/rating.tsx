import { AiFillStar } from "react-icons/ai"

const Rating = ({num}: {num: number}) => {

    const rateArr = [...Array.from(Array(num).keys())];

    return(
        <div>
            {rateArr.map(i => <AiFillStar size="1.5rem" key={i} color="#1971c2" />)}
        </div>
    )
};

export default Rating;