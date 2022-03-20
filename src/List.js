import CardRow from "./CardRow";

import React, { useState, useEffect } from "react";
import data1 from "./data1";
import data2 from "./data2";

const List = () => {
  const [listItems, setListItems] = useState(data1);
  const [isFetching, setIsFetching] = useState(false);
  const [threholdReached, setThresholdReached] = useState(false);

  const contentRef = React.useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    if (listItems.length > 50 / 3) {
      setThresholdReached(true);
      return;
    }
    fetchMoreListItems();
  }, [isFetching]);

  function isBottom(ref) {
    if (!ref.current) {
      return false;
    }
    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
  }
  function handleScroll(e) {
    // if (!isBottom(contentRef)) return;

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      setIsFetching(true);
      console.log("Fetch more list items!");
    }
  }

  function fetchMoreListItems() {
    console.log("fetching");
    setTimeout(() => {
      setListItems((prevState) => [...prevState, ...data2]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <>
      <div ref={contentRef} style={{ height: "400px" }}>
        {listItems.map((item) => (
          <CardRow data={item} />
        ))}
        {isFetching && "Loading................"}
        {threholdReached && "Threshold Reached!!!"}
      </div>
    </>
  );
};

export default List;
