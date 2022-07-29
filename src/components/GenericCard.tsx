import { GenericCardI } from "../../ts/interfaces/global_interfaces";

function GenericCard({ children, added, height, width }: GenericCardI) {
  return (
    <section
      className={`${added} ${height} ${width} flex flex-col min-w-[320px] 
        items-center px-4 md:px-12 rounded-xl
        shadow-lg bg-primaryLightContainer text-primaryLightContainerOn 
        dark:bg-secondaryDarkContainer
        dark:text-secondaryDarkContainerOn
        border-primaryLightContainerOn
         dark:border-secondaryDarkContainerOn border-2
        gap-6 pt-6 pb-40`}
    >
      {children}
    </section>
  );
}
export default GenericCard;
