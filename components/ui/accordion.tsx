import { useState, useRef } from "react";

import classes from "./accordion.module.scss";
import AccordionItem from "./accordion-item";

const Accordion = () => {
  const [showValue, setShowValue] = useState<boolean>(false);
  const refEl = useRef<HTMLDivElement | null>(null);

  const setValueHandler = () => {
    setShowValue((preValue) => !preValue);
  };

  return (
    <div className={classes.accordion}>
      <AccordionItem showHandler={setValueHandler} show={showValue} />
      <div
        ref={refEl}
        className={`${classes.accordion__info}`}
        style={
          showValue
            ? { height: refEl.current?.scrollHeight, marginTop: "2rem" }
            : {}
        }
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          sapiente nesciunt corrupti animi dolorum qui iste vero voluptatum
          quis! Fugit corrupti magni consectetur. Hic sint, ratione aliquid
          saepe eaque voluptas!
        </p>
      </div>
    </div>
  );
};

export default Accordion;
