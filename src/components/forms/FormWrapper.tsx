const FormWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="shadow-2xl flex flex-col m-8 p-3 justify-between rounded-md">
      {children}
    </div>
  );
};

export default FormWrap;
