import Image from "next/image";
import Link from "next/link";

import Navbar from "./layouts/navbar/layout";

import flexibilityBackground from "./img/bg/back-flexibility.jpg";
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
			
			<section className="flex gap-2 px-2">
				<div className="card bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full shadow-xl mx-auto mt-6 flex-row">
					<div className="card-body p-2">
						<p className="card-title text-sm text-white">My Plan For Today</p>
						<p className="text-slate-200">1/7 Complete</p>
					</div>
					<figure>
							<div className="radial-progress mr-4 text-black" style={{ "--value": 70, "--size": "50px"}} role="progressbar">
								70%
							</div>
					</figure>
				</div>

				<div className="card mx-auto w-full shadow-xl bg-slate-600 mt-6">
					<div className="card-body p-2">
						<p className="card-title text-sm text-white">Last training</p>
						<p className="text-slate-200">content</p>
						<span className="badge"><Image src={playIcon} alt="Play icon" width={15} height={15}></Image></span>
					</div>
				</div>
			</section>
			
			
			<section className="my-5">
				<div className="flex justify-between px-2">
					<h2 className="text-lg font-bold">Plans for you</h2>
					<Link href="./">All plans</Link>
				</div>
				
				<div className="cards">
					<div className="card my-4 p-2 card-compact image-full shadow-xl bg-base-100">
						<figure>
							<Image alt="bg" className="object-fill" src={flexibilityBackground} width={350} height={300}></Image>
						</figure>
						<div className="card-body">
							<p className="card-title">Back flexibility</p>
						
							<div>Amount of callories</div>
							<div>Duration</div>
						</div>
					</div>
				</div>
			</section>

			<Navbar/>
		</div>
  	);
}