function BackGround({ children }: any) {
  return (
    <div
      className="bg-fixed bg-center bg-cover bg-no-repeat w-full flex flex-col 
      items-center justify-start gap-2 text-center 
    bg-bgLight dark:bg-bgDark md:gap-12 h-full"
    >
      {children}
    </div>
  );
}
export default BackGround;
