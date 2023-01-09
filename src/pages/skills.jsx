import React from 'react';
import './style.css';
import logo from '../footr.png';
import Slider from "react-slick";
import book from "../bookpal.PNG";
import ana from "../anatomie.PNG";
import single from "../single.PNG";
import square from "../square.PNG";

const Skills = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 200,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				initialSlide: 1
			  }
			}
		]
	};
	return (
		<div className='bg-black w-full'>
			<div className='xl:container mx-auto'>
				<div className='grid grid-cols-12 items-start '>
					<div className='col-span-4 bg-neutral-900 h-full'>
						<div className='w-3/4 mx-auto my-3 pt-3 pb-12'>
							<h2 className='font-bold text-xl text-[#edbd10] md:tracking-wider my-2'>Languages:</h2>
							<div className='my-4 border-y-2 border-white'>
								<div class="loaded">
									<div class="progress">
										<span class="title timer" data-from="0" data-to="100" data-speed="1800">English</span>
										<div class="overlay"></div>
										<div class="left"></div>
										<div class="right"></div>
									</div>
									<div class="progress">
										<span class="title timer" data-from="0" data-to="100" data-speed="1500">Urdu</span>
										<div class="overlay"></div>
										<div class="left"></div>
										<div class="right"></div>
									</div>
								</div>
							</div>
							<h2 className='font-bold text-xl text-[#edbd10] tracking-wider my-2'>Skills:</h2>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>HTML, CSS, Bootstrap</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Javascript</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Shopify</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Bigcommerce</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Tailwind, SASS</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Handlebar, Graphql</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>ReactJs Hooks</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Laravel</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>Livewire</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
							<div className='my-1.5'>
								<h1 className='md:font-semibold text-[10px] md:text-base capitalize text-white'>jQuery</h1>
								<div className='w-full block border-2 border-white rounded-md bg-[#edbd10] py-0.5'></div>
							</div>
						</div>

					</div>
					<div className='col-span-8 bg-black'>
						<div className='grid grid-cols-12 gap-5 ml-5 justify-center'>
							<div className='col-span-12 relative mt-5'>
								<img src={logo} alt='' className='max-h-[200px] w-full rounded-lg shadow-[0_4px_53px_-25px_rgba(0,0,0,0.3)] shadow-slate-100' />
								<p className='sig3 absolute top-9 ml-5 leading-9 text:xl md:text-5xl'>GHULAM<br></br>ABBAS</p>
							</div>
							<div className='col-span-12'>
								<h2 className='font-bold text-xl text-[#edbd10] tracking-wider'>Certification:</h2>
								<h5 className='font-medium text-md text-white my-1'>AWS Solution Architect Associate Certified</h5>
							</div>
							<div className='col-span-12'>
								<h2 className='font-bold text-xl text-[#edbd10] tracking-wider'>Projects:</h2>
								<div className='grid grid-cols-12 items-center my-1'>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>anatomie.com</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>singleo.com</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>tobaccomarket.co</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>pepermayo.com</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>jewelstogo.de</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>bookpal.com</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>homeexpress.co</a>
									</div>
									<div className='col-span-12 md:col-span-6 font-medium text-md text-white my-1'>
										<a href='#' className='underline-offset-1 underline'>cmsui</a>
									</div>
								</div>
							</div>
							<h2 className='col-span-12 font-bold text-xl text-[#edbd10] tracking-wider'>Websites:</h2>
							<div className='col-span-11 px-3'>
								<Slider {...settings} >
									<div className='pl-2'>
										<img src={book} alt='' />
									</div>
									<div className='pl-2'>
										<img src={ana} alt='' />
									</div>
									<div className='pl-2'>
										<img src={single} alt='' />
									</div>
									<div className='pl-2'>
										<img src={square} alt='' />
									</div>
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
};

export default Skills;
