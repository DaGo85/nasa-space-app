function InfoModal({ showModal, setShowModal }: any) {
  return (
    <div
      className={`${
        showModal ? "block" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed bottom-50 right-50 left-50 top-50 z-50 md:inset-50 h-modal md:h-full`}
    >
      <button
        onClick={() => {
          setShowModal(false);
        }}
        type="button"
        className="text-black bg-transparent hover:bg-green-200 hover:text-slate-100 rounded-2xl p-1.5 ml-auto inline-flex items-center"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
        </svg>
      </button>
      <div>Test DIV delete</div>
    </div>
  );
}
export default InfoModal;
