import Image from "next/image";
import Link from "next/link";

import Navbar from "./layouts/navbar/layout";

import playIcon from "./icons/play.svg";

export default function Home() {
  	return (
		<div className="bg-base-100">
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">Yoga</a>
				</div>
				<div className="flex-none gap-2">
					<label className="input input-bordered flex items-center gap-2">
						<input type="text" className="grow" placeholder="Find plans, asanas.." />
						
						<button type="submit">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="h-4 w-4 opacity-70">
								<path
								fillRule="evenodd"
								d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
								clipRule="evenodd" />
							</svg>
						</button>
					</label>
					<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
						<img
							alt="Avatar"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
						</div>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						<li>
						<a className="justify-between">
							Profile
							<span className="badge">New</span>
						</a>
						</li>
						<li><a>Settings</a></li>
						<li className="text-red-700"><a>Logout</a></li>
					</ul>
					</div>
				</div>
			</div>
			
			<section className="quick_training flex gap-2 mx-2">
				<label className="mx-auto form-control w-full max-w-xs">
					<div className="font-semibold">Choose quick training: </div>
					<div className="label">
						<span className="label-text">Level</span>
					</div>
					<select className="select select-bordered">
						<option disabled>Intermidiate</option>
						<option>Hard</option>
					</select>
				</label>

				<label className="mx-auto mt-6 form-control w-full max-w-xs">
					<div className="label">
						<span className="label-text">Type</span>
					</div>
					<select className="select select-bordered">
						<option disabled>Type 1</option>
						<option>Type 2</option>
					</select>
				</label>
			</section>
			
			<section>
				<div className="card bg-purple-500 w-96 shadow-xl mx-auto mt-6 flex-row">
					<div className="card-body">
						<div className="card-title text-white">My Plan For Today</div>
						<div className="description text-slate-200">1/7 Complete</div>
					</div>
					<figure>
						<div className="radial-progress mr-4 text-purple-300" style={{ "--value": 70}} role="progressbar">
							70%
						</div>
					</figure>
				</div>

				<div className="card mx-auto w-96 shadow-xl bg-slate-600 mt-6">
					<div className="card-body">
						<div className="card-title text-white">Last training</div>
						<p className="text-slate-200">content</p>
					</div>
					<span className="badge ml-80"><Image src={playIcon} alt="Play icon" width={15} height={15}></Image></span>
				</div>
			</section>
			
			
			<section>
				<div className="head">
					<div className="title">Plans for you</div>
					<Link href="./"></Link>
				</div>
				
			</section>

			<Navbar/>
		</div>
  	);
}