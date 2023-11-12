[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Adib Digital Source Code</h3>

  <p align="center">
    If you want to see how adib.digital works, This is right place for you.
    <br />
    <a href="https://adib.digital">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


https://github.com/adibbehrooz/adib.online/assets/830696/13312a61-efff-46fc-9e3c-75ec31799001




This is my personal website code, based on JavaScript canvas in WordPress CMS. I share it on purpose.
* How to define modules in VanillaJS and how these modules can interact with each other
* How to pan JavaScript canvas 
* How to define animation in JS canvas, without CSS
* How to integrate JavaScript canvas with Ajax in WordPress
* How to use Webpack to bundle assets in WordPress, joined with PostCSS, TailwindCSS, and even browserSync 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

List of major frameworks and libraries used to bootstrap my project.

* [![SCSS][SCSS]][SCSS-url]
* [![TailwindCSS][TailwindCSS]][TailwindCSS-url]
* [![VanillaJS][VanillaJS]][VanillaJS-url]
* [![GSAP][GSAP]][GSAP-url]
* [![webpack][Webpack]][Webpack-url]
* [![WordPress][WordPress]][WordPress-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# JavaScript Modules:
**All this modules located in _assets/js/src/_**

## Canvas Module:
* canvas.js includes: 
    1. Canvas Module: This is a base layer module. In this module, all canvas DOMs have been created (only DOMs). If you want to see what happens with this module, use _inspect_ in Firefox and Chrome browsers.

  ```
  class Canvas {

  };
  ```     
    2. Section Module: The right and left menu and items inside (About, Contact, Source, Projects) define in this module.

  ```
  class Sections {

  };
  ``` 
    3. Screen Module: To determine custom screen size in TailwindCSS (Temporary Disabled)

  ```
  class Screens {

  };
  ``` 
In canvas.js one module has been imported: "Ajax Module". When users are encouraged to click on each menu item like "About" or "Contact", the Ajax Module must be active to open the modal page.

## Pan Module:
* pan.js:
    This is the main module and almost every other module is imported into it. The night sky, constellations, cursor, and Ajax. 
The main goal of this module is to create **infinite pan** and put every object like constellations and stars in it. This module uses multi-event listeners, like _mousedown_ and _mousemove_.

 ```
  class Pan {

  };
  ``` 

## Cursor Module:
* cursor.js:
    when the cursor moves on every constellation (in canvas layer) or menu item (section & div layer), the cursor shows animation using _GSAP_ library, and shows the name of a constellation. This module is independent and doesn't need to import any other modules.

 ```
  class Cursor {

  };
  ``` 

## Ajax Module
* ajax.js:
    When clicking on constellations occurs, the Ajax Module has been activated and returns content for each constellation. 
This module is integrated with WordPress; send _ID_ and _NAME_ of a constellation to WordPress. Therefore ID and name of the constellation are defined in _constellation folder_ (shapes.js collects data of each constellation). 
Also, this module creates a new _div_ tag to cover the night sky and show contents. This cover is animated with SCSS (scss/main).

 ```
  class Ajax {

  };
  ``` 

## Lines Module
* lines.js: 
    In the Lines Module, every canvas API in JavaScript is converted to JSON-like format. (It's not exactly JSON). Look at this <a target="_blank" href="https://adib.digital/converter">URL</a>. Send your canvas file and see the export. For every constellation (see wordpress.js as an example in the constellations folder), send this JSON-Like format to lines.js to create constellation lines and twinkling of stars.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
Demo Link: [https://adib.digital](https://adib.digital)
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/suggestAFeature`)
3. Commit your Changes (`git commit -m 'Add some Suggest a Feature'`)
4. Push to the Branch (`git push origin feature/suggestAFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See <a href="https://opensource.org/license/mit/">this address</a> for more information.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact
Mohammad Bagher Adib Behrooz - adib.behrooz@adib.digital

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adibbehrooz
[product-screenshot]: screenshot.mp4
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-blue?style=flat&logo=tailwindcss
[TailwindCSS-url]: https://tailwindcss.com/
[VanillaJS]: https://img.shields.io/badge/VanillaJS-CECE08?style=flat&logo=javascript
[VanillaJS-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[GSAP]: https://img.shields.io/badge/GSAP-0AD068?style=flat&logo=greensock
[GSAP-url]: https://gsap.com
[SCSS]: https://img.shields.io/badge/SCSS-C76494?style=flat&logo=cssmodules
[SCSS-url]: https://sass-lang.com/
[Webpack]: https://img.shields.io/badge/Webpack-8ACEF2?style=flat&logo=webpack
[Webpack-url]: https://webpack.js.org/
[WordPress]: https://img.shields.io/badge/WordPress-gray?style=flat&logo=wordpress
[WordPress-url]: https://WordPress.org/