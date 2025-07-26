import React, { useContext } from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import { CountryContext } from "../../country-context/CountryContext";
import PageButton from "./PageButton";
import "./pagination.css";
import useResize from "./useResize"; //-->custom hook

const Pagination = () => {
  const { totalPages, setCurrentPage, currentPage } =
    useContext(CountryContext);

  //for small screen size
  const screenSize = useResize();
  const size = screenSize <= 395 ? 2 : 4;

  //PAGE RANGE
  const pageRange = (start, end) => {
    //              17 -  1= 16+1 = 17
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => i + start);
  };

  const pagesToShowAround = () => {
    //if totalPages is less then 6 or 4
    if (totalPages <= size + 2) {
      return [...pageRange(1, totalPages)];
    } else {
      // if currentPage less then is 5 or 3
      if (currentPage <= size + 1) {
        //show pagination (1 2 3 4 5 ... 17) or (1 2 3 ...17) -->small screen
        return [...pageRange(1, size + 1), "right-ellipses", totalPages];
      } else if (currentPage >= totalPages - size) {
        //show pagination (1... 13 14 15 16 17) or (1...15 16 17)-->small screen
        return [
          1,
          "left-ellipses",
          ...pageRange(totalPages - size, totalPages),
        ];
      }

      //show sibling count  for large screen   (1 ... 4 5 6 ...17) for small screen   (1...5...17)
      const siblingCount = screenSize <= 395 ? 0 : 1;

      const leftElementSibling = Math.max(currentPage - siblingCount, 1); //leftElementSibling 4
      const rightElementSibling = Math.min(
        currentPage + siblingCount,
        totalPages
      );//rightElementSibling 5

      //show right ellipses when right value is less then  example  15 < 17 - 1
      const showRightEllipses = rightElementSibling < totalPages - 1;

      //MIDDLE RANGE (1 ... 4 5 6 ...17) for small screen   (1...5...17)
      return [
        1, //-> starting page
        "left-ellipses",
        ...pageRange(leftElementSibling, rightElementSibling),
        //  if true show ellipses or []
        ...(showRightEllipses ? ["right-ellipses"] : []),
        totalPages, //--> end page
      ];
    }
  };

  const visiblePageButton = pagesToShowAround();

  return (
    <div className="pagination">
      <PrevButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        firstPage={1}
      />
      <div className="page-btn-container">
        {visiblePageButton.map((pageNo, i) => {
          //show ellipses when we find string
          if (typeof pageNo === "string") return <Ellipses key={pageNo + i} />;
          return (
            <PageButton
              currentPage={currentPage}
              pageNo={pageNo}
              setCurrentPage={setCurrentPage}
              key={pageNo + i}
            />
          );
        })}
      </div>
      <NextButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={totalPages}
      />
    </div>
  );
};

export default Pagination;

const Ellipses = () => {
  return <span className="ellipses">...</span>;
};
