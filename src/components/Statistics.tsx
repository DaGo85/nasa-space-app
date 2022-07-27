function Statistics({ cardOne, cardTwo, cardThree, cardFour, title }: any) {
  return (
    <section className="text-primaryLightOn dark:text-primaryDarkOn body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-8">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-primaryLightOn dark:text-primaryDarkOn">
              Statistics
            </h1>
            <div className="h-1 w-20 bg-primaryLight dark:bg-primaryDark rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-primaryLight dark:bg-primaryDark rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primaryLightOn dark:text-primaryDarkOn">
                {cardOne}
              </h2>
              <p className="leading-relaxed text-secondaryLightContainerOn dark:text-primaryDarkOn font-bold">
                {title.one}
              </p>
            </div>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-primaryLight dark:bg-primaryDark rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primaryLightOn dark:text-primaryDarkOn">
                {cardTwo}
              </h2>
              <p className="leading-relaxed text-secondaryLightContainerOn dark:text-primaryDarkOn font-bold">
                {title.two}
              </p>
            </div>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-primaryLight dark:bg-primaryDark rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primaryLightOn dark:text-primaryDarkOn">
                {cardThree}
              </h2>
              <p className="leading-relaxed text-secondaryLightContainerOn dark:text-primaryDarkOn font-bold">
                {title.three}
              </p>
            </div>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <div className="bg-primaryLight dark:bg-primaryDark rounded-lg p-2 xl:p-6">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-primaryLightOn dark:text-primaryDarkOn">
                {cardFour}
              </h2>
              <p className="leading-relaxed text-secondaryLightContainerOn dark:text-primaryDarkOn font-bold">
                {title.four}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Statistics;
