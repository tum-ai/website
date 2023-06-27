import React from "react";

export default function Stat({ description, value }) {
  return (
    <div className="flex flex-col items-center justify-center max-w-sm rounded-xl p-4 shadow-xl shadow-blue-400/10 h-40">
		<dd className="text-5xl text-blue-500 font-semibold">
			{ value }
		</dd>
		<dt className="text-md text-blue-500">
			{ description }
		</dt>
	</div>
  );
}
