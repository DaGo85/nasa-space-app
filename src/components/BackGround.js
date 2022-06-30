function BackGround({ children }) {
  return (
    <main
      className="bg-fixed bg-center bg-cover w-full flex flex-col items-center justify-start gap-2 text-center 
    bg-bgLight dark:bg-bgDark bg-no-repeat py-40 md:py-48 lg:py-48 md:gap-12 absolute inset-0"
    >
      {children}
    </main>
  );
}
export default BackGround;
