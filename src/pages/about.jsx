import React from 'react';
import pic from '../aboutpic.png';

const About = () => {
	return (
		<div className='bg-black w-full py-3'>
			<div className='bg-black w-full border-x-2 border-[#edbd10]'>
				<div className='xl:container mx-auto'>
					<h2 className='text-center text-white text-3xl uppercase my-5 underline-offset-8 underline tracking-[4px]'>who am i</h2>
					<div className='grid grid-cols-12 items-center gap-4 px-5 md:px-20 m-5'>
						<div className='col-span-12 md:col-span-9 text-center md:px-10'>
							<h2 className='text-center font-medium text-[#edbd10] text-xl uppercase'>about</h2>
							<p className='text-center tracking-widest font-normal text-white text-md'>I am an enthusiastic individual who is passionate about learning. I
								am looking to make a significant contribution within an
								established organization while gaining a valuable experience. I
								was worked at Eventbuizz Software Pvt Ltd that is product base
								company they maintain event management application that’s run
								in Denmark. Now I am working on Front End designing. Our
								company is BPO company, also adobe partner of the region and I
								always passionate to enhance my skills about technology.</p>
						</div>
						<div className='col-span-12 md:col-span-3 px-1'>
							<img src={pic} className='border rounded-lg' />
						</div>
						<div className='col-span-12'>
							<h2 className='text-center font-medium text-[#edbd10] text-2xl uppercase md:mt-0 mt-3'>education</h2>
						</div>
						<div className='col-span-12 md:col-span-6 bg-neutral-900 p-3 md:my-5 shadow-gray-50/20 shadow-lg'>
							<h2 className='font-medium text-[#edbd10] text-lg uppercase'>Bachelor of computer sciences</h2>
							<p className='font-normal text-white text-md capitalize tracking-wider'>Superior university, lahore</p>
							<p className='font-normal text-white text-md tracking-wider'>2017 -- 2021</p>
						</div>
						<div className='col-span-12 md:col-span-6 bg-neutral-900 p-3 my-5 shadow-gray-50/20 shadow-lg'>
							<h2 className='font-medium text-[#edbd10] text-lg uppercase'>Intermediate</h2>
							<p className='font-normal text-white text-md capitalize tracking-wider'>govt shalimar college, lahore</p>
							<p className='font-normal text-white text-md tracking-wider'>2017 -- 2021</p>
						</div>
						<div className='col-span-12'>
							<h2 className='text-center font-medium text-[#edbd10] text-2xl uppercase'>Professional Experience</h2>
						</div>
						<div className='col-span-12 bg-neutral-900 p-3 my-2 shadow-gray-50/20 shadow-lg text-right'>
							<h2 className='font-medium text-[#edbd10] text-xl uppercase text-left'>RLTsquare</h2>
							<p className='font-normal text-white text-lg capitalize tracking-wider text-left'>software developer</p>
							<p className='font-normal text-white text-md capitalize tracking-wider md:pl-40'>shopify pages customizations, front end design, Responsive web designing, theme development, handle bar scripting , graphql queries, laravel</p>
						</div>
						<div className='col-span-12 bg-neutral-900 p-3 my-2 shadow-gray-50/20 shadow-lg text-right'>
							<h2 className='font-medium text-[#edbd10] text-xl uppercase text-left'>eventbuizz software pvt ltd</h2>
							<p className='font-normal text-white text-lg capitalize tracking-wider text-left'>web developer internship</p>
							<p className='font-normal text-white text-md capitalize tracking-wider md:pl-40'>Crud operations in laravel, blading, sql queries, authtentications, bootstrap templete</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
