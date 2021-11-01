import React from "react";
import { useSelector, useDispatch } from "react-redux";

import style from "./Filter.module.css";
import contactsActions from "redux/contacts/contacts-actions";
import { getFilter } from "redux/contacts/contacts-selectors";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={style.filterContainer}>
      <label className={style.labelFilter}>
        <input
          className={style.inputFilter}
          type="text"
          value={filter}
          onChange={(e) =>
            dispatch(contactsActions.changeFilter(e.target.value))
          }
        />
        Find contacts by name
      </label>
    </div>
  );
}
