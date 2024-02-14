import '../Css/Main.css';
import '../Css/Grid.css';

function Main(props) {
	return (
		// <div className="MainWrap" id="0">
		// 	<section class="MainImg">
		// 		<div class="TextBoxWrap">
		// 			<div class="TextLWrap">
		// 				<div>
		// 					<p class="TextL">designerdd </p>
		// 					<dd>UI UX design and design systems</dd>
		// 				</div>
		// 			</div>

		// 			<div class="TextRWrap">
		// 				<div>
		// 					<p class="TextR">
		// 						{' '}
		// 						<span class="font-light">&lt;</span> coder{' '}
		// 						<span class="font-light">&gt;</span>{' '}
		// 					</p>
		// 					<dd>
		// 						Front end developer writs clean code, <br />
		// 						efficient code
		// 					</dd>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section>
		// </div>
		<div className=" h-screen overflow-hidden " id="0">
	{/* Button */}
	<input
					class="pricing border border-blue-900 absolute -z-10"
					type="checkbox"
					id="pricing"
					name="pricing"
				/>
				<label for="pricing">
					<span class="block-diff border border-blue-900 -z-10">
						kayaking<span class="float-right">camping</span>
					</span>
				</label>
				{/* Button */}

				{/* Flip Card Wrap */}
				<div class="card-3d-wrap mx-auto ">


					<div class="card-3d-wrapper">
						{/* Kayaking */}
						<div class="card-front">
							<div class="pricing-wrap">
								<h4 class="mb-5">Kayaking</h4>
								<h2 class="mb-2">
									<sup>$</sup>39 / 4<sup>hrs</sup>
								</h2>
								<p class="mb-4">per person</p>
								<p class="mb-1">
									<i class="uil uil-location-pin-alt size-22"></i>
								</p>
								<p class="mb-4">Drina, Serbia</p>
								<a href="#0" class="link">
									Choose Date
								</a>
								<div class="img-wrap img-2">
									<img src="https://assets.codepen.io/1462889/sea.png" alt="" />
								</div>
								<div class="img-wrap img-1">
									<img
										src="https://assets.codepen.io/1462889/kayak.png"
										alt=""
									/>
								</div>
								<div class="img-wrap img-3">
									<img
										src="https://assets.codepen.io/1462889/water.png"
										alt=""
									/>
								</div>
								<div class="img-wrap img-6">
									<img
										src="https://assets.codepen.io/1462889/Stone.png"
										alt=""
									/>
								</div>
							</div>
						</div>
						{/* Camping */}
						<div class="card-back">
							<div class="pricing-wrap">
								<h4 class="mb-5">Camping</h4>
								<h2 class="mb-2">
									<sup>$</sup>29 / 8<sup>hrs</sup>
								</h2>
								<p class="mb-4">per person</p>
								<p class="mb-1">
									<i class="uil uil-location-pin-alt size-22"></i>
								</p>
								<p class="mb-4">Tara, Serbia</p>
								<a href="#0" class="link">
									Choose Date
								</a>
								<div class="img-wrap img-2">
									<img
										src="https://assets.codepen.io/1462889/grass.png"
										alt=""
									/>
								</div>
								<div class="img-wrap img-4">
									<img
										src="https://assets.codepen.io/1462889/camp.png"
										alt=""
									/>
								</div>
								<div class="img-wrap img-5">
									<img src="https://assets.codepen.io/1462889/Ivy.png" alt="" />
								</div>
								<div class="img-wrap img-7">
									<img
										src="https://assets.codepen.io/1462889/IvyRock.png"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*  */}

		</div>
	);
}

export default Main;
