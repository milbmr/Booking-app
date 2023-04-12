import { useState, useRef } from "react";
import classNames from "classnames";
import classes from "./accordion.module.scss";
import AccordionItem from "./accordion-item/accordion-item";

const Accordion = ({ title, hotels }: { title: string; hotels: string[] }) => {
  const [showValue, setShowValue] = useState<boolean>(false);
  const refEl = useRef<HTMLDivElement | null>(null);

  const setValueHandler = () => {
    setShowValue((preValue) => !preValue);
  };

  return (
    <div className={classNames(classes.accordion)}>
      <AccordionItem
        title={title}
        showHandler={setValueHandler}
        show={showValue}
      />
      <div
        ref={refEl}
        className={`${classes.accordion__info}`}
        style={
          showValue
            ? { height: refEl.current?.scrollHeight, marginTop: "2rem" }
            : {}
        }
      >
        {hotels.map((hotel) => (
          <p key={hotel} className={classes.accordion__disc}>{hotel}</p>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
