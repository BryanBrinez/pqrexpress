import Message from "@/components/Message";
export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center flex-col px-4 bg-white">
      <div className="flex items-center justify-center w-screen h-14 bg-slate-500">
        logo
      </div>
      <div className="flex items-center justify-center w-screen h-14 ">
        <input
          className="text-black bg-colorOne rounded-2xl  h-9 w-3/4 placeholder-white pl-4"
          type="text"
          name=""
          id=""
          placeholder="Buca un PQR"
        />
        <span
          className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-200 dark:text-neutral-700"
          id="basic-addon2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <h2
        style={{ fontWeight: "600" }}
        className="flex  items-start  w-screen h-8 p-2 justify-start text-black"
      >
        Recibidos
      </h2>
      <div className="flex-1 flex w-screen  justify-center bg-white py-4">
        <Message></Message>
      </div>
    </div>
  );
}
