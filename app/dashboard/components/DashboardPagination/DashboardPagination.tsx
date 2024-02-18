import DashboardPaginationButtons from './components/DashboardPaginationButtons';
import { RowsCountDropdown } from './components/RowsCountDropdown';

const DashboardPagination = () => {
  return (
    <div className="mt-4 flex items-center justify-between px-2">
      <div className="">
        <p className="text-sm text-muted-foreground">
          0 of 100 row(s) selected.
        </p>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center justify-center gap-2">
          <span>Rows per page</span>
          <RowsCountDropdown />
        </div>
        <div className="">
          <p>Page 1 of 10</p>
        </div>
        <DashboardPaginationButtons />
      </div>
    </div>
  );
};

export default DashboardPagination;
