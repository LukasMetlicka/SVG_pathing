#SVG Step Implementation Instructions:

1. Copy repositories contained in folder (don't forget to fix any links if files have been moved from their original structure.  there are 3 types of  links, js/responsive.js, css/pathing.css and several img/image.png files.  all of these files are linked to in pathing.html and image links are commented)
2. Change from a CDN to a dedicated jQuery file (if you like)
3. remove .scss file for maximum efficiency
4. add/remove .step classes until you have the amount of steps needed.  note that there is a big difference between the .step and the .step-first class.  Also, I haven't tested this with the .path-first class alone, so behavior may be weird in that case.
5. change the image links to your liking.  images are linked to in the 'xlink:href' attribute in .map > svg > defs > pattern.  it's important at this step to make sure that the pattern id is unique.  ununique pattern ids cause repeat images in firefox and when changing browser withs in chrome and safari.
	1. images should be square.  images that are rectangular leave whitespace within the circle
	2. tested image file types for xlink:href:
		1. JPEG ✓	
		2. PNG  ✓
		3. WebP ✓
		4. GIF  ✓
6. check for class/id/dom overrides.  these ids/classes/svg elements are used by responsive.js
	1. .step
	2. .step1
	3. .path
	4. .path-first


##File Architecture:
* SVG_Path/
	* AI/
		* SVG elements.ai the illustrator file where the SVG elements were made.  doesn't need to be included in prod
	* css/
		* pathing.css - processed version of pathing.scss.  include this file or pathing.scss tied into a global stylesheet
		* pathing.scss - edit-ready stylesheet.  useful for any changes that need to be made. elements are properly nested within .map to make sure they won't interfere with any other elements
		* pathing.css.map - apparently used for debugging scss.  don't think its nececssary to include.
	* img/
		* test images - these have been highly compressed for testing.
	* js/
		* responsive.js - includes neccesary jQuery to scale SVG elements
	* pathing.html - contains the necessary html and SVG elements

#####Lukas Metlicka
#####Aug. 2015



