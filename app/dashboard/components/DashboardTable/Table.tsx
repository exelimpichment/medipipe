const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className="mt-4 flex w-full flex-col rounded-md ">{children}</table>
  );
};

export default Table;
