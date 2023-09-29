
const WorkExpirence = () => {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-6 w-6 flex-none"
      >
        <path
          d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
          className="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
      <span className="ml-3">Work</span>
    </h2>
    <ol className="mt-6 space-y-4">
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img
            alt=""
            loading="lazy"
            width="28"
            height="28"
            decoding="async"
            data-nimg="1"
            className="h-9 w-9 rounded-full"
            style={{ color: "transparent" }}
            src="https://asset.brandfetch.io/idGJAyUjA9/idxfpOqdYS.jpeg?updated=1695685392296"
          />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">Global Logic</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">Software Engineer</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2011 until 2014">
            <time>Sep, 2021</time> <span aria-hidden="true">—</span> <time>Current</time>
          </dd>
        </dl>
      </li>
      <li className="flex gap-4">
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          <img
            alt=""
            loading="lazy"
            width="28"
            height="28"
            decoding="async"
            data-nimg="1"
            className="h-9 w-9 rounded-full"
            style={{ color: "transparent" }}
            src="https://www.producthood.com/wp-content/uploads/vendors/01Synergy.png"
          />
        </div>
        <dl className="flex flex-auto flex-wrap gap-x-2">
          <dt className="sr-only">Company</dt>
          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">01Synergy</dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">Junior Software Engineer</dd>
          <dt className="sr-only">Date</dt>
          <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label="2008 until 2011">
            <time >Apr, 2021</time> <span aria-hidden="true">—</span> <time>Sep, 2021</time>
          </dd>
        </dl>
      </li>
    </ol>
    <a
      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
      href="https://drive.google.com/file/d/1SoQq8S-rKmivqdJhSBbEMi5w3XCSAT2q/view?usp=sharing"
      target="_blank"
    >
      Download CV
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
      >
        <path
          d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </a>
  </div>
  )
}

export default WorkExpirence
