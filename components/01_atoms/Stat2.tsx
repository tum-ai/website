import React from "react";

export default function Stat2({ description, value }) {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm rounded-xl p-4 h-40 w-60">
		<dd className="text-5xl text-white font-semibold">
			{ value }
		</dd>
		<dt className="text-md text-white">
			{ description }
		</dt>
	</div>
  );
}
