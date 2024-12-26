import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../store/taskSlice";

const Filter = () => {
    const filter = useSelector((state) => state.tasks.filter);
    const dispatch = useDispatch();

    return (
        <div className="filter-buttons">
            {["All", "Completed", "Pending"].map((f) => (
                <button
                    key={f}
                    onClick={() => dispatch(setFilter(f))}
                    className={filter === f ? "active" : ""}
                >
                    {f}
                </button>
            ))}
        </div>
    );
};

export default Filter;
