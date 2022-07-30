interface titleI {
  title: string;
}

function MainTitle({ title }: titleI) {
  return (
    <h1 className="font-extrabold text-3xl text-primaryLightOn dark:text-primaryDark shadow-2xl">
      {title}
    </h1>
  );
}
export default MainTitle;
