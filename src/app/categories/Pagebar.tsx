import { useState } from "react";
import Pagination from "./Pagination";

export default function PagesBar() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex justify-center mt-8">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}