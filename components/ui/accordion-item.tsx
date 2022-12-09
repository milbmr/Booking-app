import { useState, useEffect } from "react";

import classes from "./accordion-item.module.scss";
import { BiChevronDown } from "react-icons/bi";

const AccordionItem = ({
  showHandler,
  show,
}: {
  showHandler: () => void;
  show: boolean;
}) => {
  return (
    <div className={classes.accordionItem}>
      <h3 className={classes.accordionItem__heading}>title goes here</h3>
      <BiChevronDown
        onClick={showHandler}
        size="2.4rem"
        className={`${classes.accordionItem__icon} ${show ? classes.show : ""}`}
      />
    </div>
  );
};

export default AccordionItem;
