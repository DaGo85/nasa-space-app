function BackGround({ children }: any) {
  return (
    <div
      className="bg-fixed bg-center bg-cover bg-no-repeat w-full flex flex-col 
      items-center justify-start gap-20 text-center 
    bg-bgLight dark:bg-bgDark md:gap-12 h-full pt-64"
    >
      {children}
    </div>
  );
}
export default BackGround;
