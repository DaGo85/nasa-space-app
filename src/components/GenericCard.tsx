import { GenericCardI } from "../../ts/interfaces/global_interfaces";

function GenericCard({ children, added }: GenericCardI) {
  return (
    <section
      className={`${added} flex flex-col min-w-[320px] 
        items-center px-4 md:px-12 rounded-xl
        shadow-lg bg-primaryLightContainer 
        dark:bg-secondaryDarkContainer
        gap-6 pt-6 pb-40 h-[3000px]`}
    >
      {children}
    </section>
  );
}
export default GenericCard;
