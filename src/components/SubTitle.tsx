interface subTitleI {
  subTitle: string;
}

function SubTitle({ subTitle }: subTitleI) {
  return (
    <h2 className="font-bold text-2xl text-primaryLightOn dark:text-primaryDark shadow-2xl">
      {subTitle}
    </h2>
  );
}
export default SubTitle;
