import Image from "next/image";
import asanasIco from "./icons/asanas.svg";

export default function Home() {
  	return (
		<div className="bg-base-100">
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<a className="btn btn-ghost text-xl">Yoga</a>
				</div>
				<div className="flex-none gap-2">
					<div className="form-control">
					<input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
					</div>
					<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
						<img
							alt="Tailwind CSS Navbar component"
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
						<li><a>Logout</a></li>
					</ul>
					</div>
				</div>
			</div>

			{/* <div className="artboard phone-1">414×736</div> */}
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">Hi.</div>
                </div>
            </div>

			<div className="btm-nav">
				<button className="bg-pink-200 text-pink-600">
					<Image src={asanasIco} alt="asanasIcon" width={20} height={20}/>

					<span className="btm-nav-label">Asanas</span>
				</button>
				<button className="active border-blue-600 bg-blue-200 text-blue-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					<span className="btm-nav-label">Home</span>
				</button>
				<button className="bg-teal-200 text-teal-600">
					<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span className="btm-nav-label">Settings</span>
				</button>
			</div>
		</div>
  	);
}