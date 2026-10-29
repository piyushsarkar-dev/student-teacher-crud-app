const EditButton = () => {
  return (
    <button
      className="group relative box-border flex h-9 min-w-0 flex-1 cursor-pointer items-center overflow-hidden rounded-md border border-[#2563eb] bg-transparent p-0 transition-all duration-300 hover:border-[#2563eb]"
      type="button">
      <span className="absolute inset-0 z-10 flex items-center justify-center font-semibold text-[#2563eb] transition-all duration-300 group-hover:text-white group-hover:opacity-0">
        Edit
      </span>

      <span className="absolute top-0 right-0 flex h-full w-9 items-center justify-center bg-[#2563eb] transition-all duration-300 group-hover:w-full">
        <svg
          className="size-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.862 3.487a1.5 1.5 0 0 1 2.121 0l1.53 1.53a1.5 1.5 0 0 1 0 2.121L8.03 19.62a2 2 0 0 1-.878.513l-3.5.875a.5.5 0 0 1-.606-.606l.875-3.5a2 2 0 0 1 .513-.878l12.428-12.538Z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default EditButton;
