<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Adib Digital Source Code</h3>

  <p align="center">
    If you want to see how adib.digital works, This is right place for you.
    <br />
    <a href="https://adib.digital">View Demo</a>
    <!--
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
    -->
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
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Adib Digital Screenshot][product-screenshot]](https://adib.digital)

This is my personal website code, based on JavaScript canvas in WordPress CMS. I share it on porpose.
* How to define modules in VanillaJS and how this modules can interact with each other
* How to panning canvas 
* How to define animation in canvas, without CSS
* How to integrate JavaScript canvas with ajax in WordPress
* How to use Webpack to bundle assets in WordPress, joined with PostCSS, TailwindCSS and even browserSync 

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
    1. Canvas Module: This is base layer module. In this module all canvas DOMs have been created (only DOM). If you want to see what happens with this module, use _inspect_ in Firefox and Chrome browsers.

  ```
  class Canvas {

  };
  ```     
    2. Section Module: The right and left menu and items inside (About, Contact, Source, Projects) define in this moudule.

  ```
  class Sections {

  };
  ``` 
    3. Screen Module: For determine custom screen size in TailwindCSS (Temporary Disabled)

  ```
  class Screens {

  };
  ``` 
In canvas.js one module has been imported: "Ajax Module". When user encourage to click on each menu items like "About" or "Contact", Ajax Module must be active to open modal page.

## Pan Module:
* pan.js:
    This is main module and almost every other module imported in it. Night sky, constellations, cursor and ajax. 
The main goal of this module is to create **infinite pan** and put every objects like constellations and stars in it. This module using multi event listener, like _mousedown_ and _mousemove_.

 ```
  class Pan {

  };
  ``` 

## Cursor Module:
* cursor.js:
    when cursor move on every constellations (in canvas layer) or menu items (section & div layer), cursor shows animation using _GSAP_ library, shows name of constellation. This module is independent and dosen't need import any other modules.

 ```
  class Cursor {

  };
  ``` 

## Ajax Module
* ajax.js:
    When click on constellations occured, Ajax Module has been acivated and return content for each constellation. 
This module is integated with WordPress; send _ID_ and _NAME_ of constellation to WordPress. Therefore ID and name of constellation define in constellation folder (shapes.js collects data of each constellation). 
Also this module create new _div_ tag for cover night sky and show contents. This cover animated with SCSS (scss/main).

 ```
  class Ajax {

  };
  ``` 

## Lines Module
* lines.js: 
    In Lines Module, every canvas API in JavaScript convert to JSON-like format. (It's not exactly JSON). Look at this <a href="https://adib.digital/converter">URL</a>. Send your canvas file and see the export. Every constellations (see wordpress.js as example in constellations folder), send this JSON-Like format to lines.js to create constellation lines, and twinkling of stars.

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
Mohammad Bagher Adib Behrooz - info@adib.digital

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/adibbehrooz
[product-screenshot]: https://adib.digital/media/adib.online/2023/11/screenshot.gif
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