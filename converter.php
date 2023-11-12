<?php
/**
 * @package AdibOnline
 * @subpackage adibonline_theme
 * @since AdibOnline Theme 1.0
 * Template Name: Template-Converter 
 */
?>
	<?php get_header(); ?>

		<?php // Header Section ?>
		<div class="[ C: c-header ] [ F: flex justify-center items-end h-[30vh] border-b border-stone-600 ]">
			<h1 class="[ C: c-header__title ] [ F: font-Cutive text-xl lg:text-3xl tracking-widest text-yellow-50 font-thin mb-[-20px] ]">CANVAS 2 JSON</h1>	
		</div>
		
		<?php // Convert Section ?>
		<div class="[ F: flex flex-row justify-center ]">
			<div class="[ c-convert ] [ F: flex flex-col lg:flex-row items-stretch mt-24 mb-5 max-w-screen-xl ]">

				<?php // LEFT SECTION: Centerlize ?>
				<?php //______________________________ ?>

				<div class="[ c-convert__left ] [ F: flex flex-row items-center justify-center content-center mb-14 ]">
					
					<?php // Input ?>
					<div  class="[ c-convert__input ] [ F: flex flex-col justify-center ]">
						
						<?php // Input Header ?>
						<div  class="[ c-convert__header ] [ F: flex flex-row justify-between mb-4 ]">
							
							<?php // Input Label ?>
							<label for="inputCanvas" class="[ c-convert__label ] [ F: font-Cutive text-md text-slate-300 ]">
								Input Canvas Code &nbsp; <?php /** <b>OR</b>&nbsp;  */ ?>
							</label>

							<?php // Input Button ?>
							<?php /*
							<button type="button" class="[ c-convert__button ][F: flex flex-row items-center w-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-0 focus:outline-none focus:ring-lime-0 dark:focus:ring-teal-700 font-Cutive rounded-lg text-base px-5 text-center mr-2 mb-2 h-10 ]">
								<span class="pr-3">
									<svg width="16px" height="16px" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
										<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
											<g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-466.000000, -931.000000)" fill="#000000">
												<path d="M490,931 L470,931 C467.791,931 466,932.791 466,935 L466,955 C466,957.209 467.791,959 470,959 L473,959 L473,957 L470,957 C468.896,957 468,956.104 468,955 L468,935 C468,933.896 468.896,933 470,933 L490,933 C491.104,933 492,933.896 492,935 L492,955 C492,956.104 491.104,957 490,957 L487,957 L487,959 L490,959 C492.209,959 494,957.209 494,955 L494,935 C494,932.791 492.209,931 490,931 L490,931 Z M487.657,944.243 L480.758,937.343 C480.549,937.135 480.272,937.046 480,937.06 C479.728,937.046 479.451,937.135 479.243,937.343 L472.343,944.243 C471.952,944.633 471.952,945.267 472.343,945.657 C472.733,946.048 473.367,946.048 473.758,945.657 L479,940.414 L479,962 C479,962.553 479.447,963 480,963 C480.552,963 481,962.553 481,962 L481,940.414 L486.243,945.657 C486.633,946.048 487.267,946.048 487.657,945.657 C488.048,945.267 488.048,944.633 487.657,944.243 L487.657,944.243 Z" id="arrow-top" sketch:type="MSShapeGroup"></path>
											</g>
										</g>
									</svg>
								</span>
								<span>Upload File</span>
							</button>
							*/
							?>
						</div> <?php // [!Input Header] ?>

						<textarea id="inputCanvas" name="inputCanvas" rows="24" cols="40" spellcheck="false" class="[ c-convert__textarea ] [ F: p-3 text-left resize-none border-0 border-slate-800 bg-neutral-900 active:border-0 active:border-slate-800 hover:border-slate-800 focus:border-slate-800 focus:outline-none text-slate-400 font-Cutive text-base rounded-lg shadow-md ]"></textarea>
					
					</div> <?php // [!Input] ?>
				</div><?php // [!LEFT] ?>

				<?php // CENTER SECTION: Centerlize ?>
				<?php //__________________________________ ?>

				<div class="[ F: flex flex-col items-center self-center content-center w-full lg:w-44 pl-5 pr-5 mb-14 ]">
					<?php
					/*
					<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700 mb-10">
						<div class="[F: bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ]" style="width: 45%"> 45%</div>
					</div>
					*/
					?>
					<button type="button" id="convertButton" class="[ F: text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-0 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ]">Convert</button>
				</div>

				<?php // RIGHT SECTION: Centerlize ?>
				<?php //_________________________________ ?>

				<div class="[ c-convert__right ] [ F: flex flex-row items-center justify-center content-center mb-14 ]">
					
					<?php // Input ?>
					<div  class="[ c-convert__input ] [ F: flex flex-col justify-center ]">
						
						<?php // Input Header ?>
						<div  class="[ c-convert__header ] [ F: flex flex-row justify-between mb-4 ]">
							
							<?php // Input Label ?>
							<label for="inputCanvas" class="[ c-convert__label ] [ F: font-Cutive text-md text-slate-300 ]">
								Output JSON Code &nbsp;<?php /** <b>OR</b>&nbsp;  */ ?>
							</label>

							<?php // Export Button ?>
							<?php
							/*
							<button type="button" class="[ c-convert__button ][F: flex flex-row items-center w-auto text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-0 focus:outline-none focus:ring-lime-0 dark:focus:ring-teal-700 font-Cutive rounded-lg text-base px-5 text-center mr-2 mb-2 h-10 ]">
								<span class="pr-3">
									<svg width="16px" height="16px" viewBox="-2 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
										<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
											<g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-519.000000, -931.000000)" fill="#000000">
												<path d="M543,935 L540,935 L540,937 L543,937 C544.104,937 545,937.896 545,939 L545,959 C545,960.104 544.104,961 543,961 L523,961 C521.896,961 521,960.104 521,959 L521,939 C521,937.896 521.896,937 523,937 L526,937 L526,935 L523,935 C520.791,935 519,936.791 519,939 L519,959 C519,961.209 520.791,963 523,963 L543,963 C545.209,963 547,961.209 547,959 L547,939 C547,936.791 545.209,935 543,935 L543,935 Z M525.343,949.758 L532.242,956.657 C532.451,956.865 532.728,956.954 533,956.939 C533.272,956.954 533.549,956.865 533.758,956.657 L540.657,949.758 C541.048,949.367 541.048,948.733 540.657,948.343 C540.267,947.953 539.633,947.953 539.242,948.343 L534,953.586 L534,932 C534,931.447 533.553,931 533,931 C532.448,931 532,931.447 532,932 L532,953.586 L526.757,948.343 C526.367,947.953 525.733,947.953 525.343,948.343 C524.952,948.733 524.952,949.367 525.343,949.758 L525.343,949.758 Z" id="arrow-bottom" sketch:type="MSShapeGroup"></path>
											</g>
										</g>						
									</svg>
								</span>
								<span>Download File</span>
							</button>
							*/
							?>
						</div> <?php // [!Input Header] ?>

						<div class="[ F: flex justify-end bg-neutral-900 rounded-t-lg h-[28px] ]">
							<svg width="28px" height="28px" viewBox="0 0 32 32" id="copyToClipboard" class="[ F: pt-2 pr-2 cursor-pointer ]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
									<g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-204.000000, -931.000000)" fill="rgba(255, 255, 255, 1)">
										<path d="M234,951 C234,952.104 233.104,953 232,953 L216,953 C214.896,953 214,952.104 214,951 L214,935 C214,933.896 214.896,933 216,933 L232,933 C233.104,933 234,933.896 234,935 L234,951 L234,951 Z M232,931 L216,931 C213.791,931 212,932.791 212,935 L212,951 C212,953.209 213.791,955 216,955 L232,955 C234.209,955 236,953.209 236,951 L236,935 C236,932.791 234.209,931 232,931 L232,931 Z M226,959 C226,960.104 225.104,961 224,961 L208,961 C206.896,961 206,960.104 206,959 L206,943 C206,941.896 206.896,941 208,941 L210,941 L210,939 L208,939 C205.791,939 204,940.791 204,943 L204,959 C204,961.209 205.791,963 208,963 L224,963 C226.209,963 228,961.209 228,959 L228,957 L226,957 L226,959 L226,959 Z" id="duplicate" sketch:type="MSShapeGroup"></path>
									</g>
								</g>
							</svg>								
						</div>

						<textarea id="outputJSON" name="outputJSON" rows="23" cols="40" spellcheck="false" class="[ c-convert__textarea ] [ F: p-3 text-left resize-none border-0 border-slate-800 bg-neutral-900 active:border-0 active:border-slate-800 hover:border-slate-800 focus:border-slate-800 focus:outline-none text-slate-400 font-Cutive text-base rounded-lg shadow-md ]"></textarea>

					</div> <?php // [!Input] ?>
				</div><?php // [!LEFT] ?>

			</div>
		</div>

	<?php get_footer(); ?>
