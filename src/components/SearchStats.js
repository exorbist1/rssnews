import React  from "react";

export default function SearchStats(props) {
    return(
        <div className="search--stats">
            <span>Status: {[props.status]} </span>
            <span>Number of Results: {props.number}</span>
        </div>
    )
}