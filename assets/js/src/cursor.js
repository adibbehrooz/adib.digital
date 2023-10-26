
/*
	Theme Name: AdibOnline Theme
	Theme URI: http://www.adibbehrooz.com/
	Description: The Theme Designed By Mohammad Bagher Adib Behrooz.
	Author: Mohammad Bagher Adib Behrooz
	Version: 1.0
*/

/******************************** Cursor ********************************
/************************************************************************/
	
class Cursor {

    //____________________________
    //
    // Constructor
    //____________________________

    constructor() {
        this.radius = 50;
        this.circleLength = 2 * Math.PI * this.radius;
        this.angle = 2 * this.angleRad * 180 / Math.PI / 7;		
    };


    //____________________________
    //
    // RUN
    //____________________________

    init() {
        this.cursorModules();
        this.curveText();
        this.animateMoveCursor();
        this._eventListenersIndependent();
        // this.fadeLetters(0.002);
    };

    //____________________________
    //
    // Modules
    //____________________________

    cursorModules() {
    
        const circleCursor = () => {
            const cLandscapeFrame = document.getElementById('middle');
            const circleDiv = document.createElement("div");
            circleDiv.setAttribute ('class', 'o-centerCircle');
            circleDiv.setAttribute ('id', 'centerCircle');
            cLandscapeFrame.parentNode.insertBefore(circleDiv, cLandscapeFrame);			
        };
        
        const followDiv = () => {
            const cLandscapeFrame = document.getElementById('middle');
            const followDiv = document.createElement("div");
            followDiv.setAttribute ('class', 'o-followCircle');
            followDiv.setAttribute ('id', 'followCircle');
            
            const textDiv = document.createElement("div");
            textDiv.setAttribute ('class', 'o-followText');
            textDiv.setAttribute ('id', 'followText');
            followDiv.appendChild(textDiv);
            // textDiv.innerHTML += 'DRAG ME'; 
                            
            cLandscapeFrame.parentNode.insertBefore(followDiv, cLandscapeFrame);			
        };
                    
        const totalModules = () => {
            circleCursor();
            followDiv();
        };
        totalModules();
        
    };

    //____________________________
    //
    // Curve Text
    //____________________________

    curveText() {
        this.curvedText = document.getElementById('followText');			
        let text = this.curvedText.innerText;
        let html = "";
        for (let i = 0; i < text.length; i++) {
            html += `<span>${text[i]}</span>`;
        }
        this.curvedText.innerHTML = html;

        this.curvedText.style.minWidth = "initial";
        this.curvedText.style.minHeight = "initial";	
                    
        let curveWidth = this.curvedText.offsetWidth;
        let curveHeight = this.curvedText.offsetHeight;

        let spanLetters = this.curvedText.innerHTML;
        
        let letters = this.curvedText.querySelectorAll("span");
        
        let lettersStyle = {
            'position': 'absolute',
            'transform-origin': 'bottom center',
            'height': this.radius+'px',
        };
        let cssResult = "";
        Object.keys(lettersStyle).forEach(function (prop, index) {
            cssResult += prop + ": " + lettersStyle[prop] + "; ";
            
        });
        
        const curveSpanLetters = () => {
            letters.forEach((spanLetters, index) => {
                spanLetters.style = cssResult;
                // 1. Default
                // spanLetters.style.transform = "translate("+(curveWidth / 2)+"px, 0px) rotate("+index * curveWidth+"deg)";
                
                // 2. Optimize
                switch(index) {
                    // D
                    case 0: 
                        spanLetters.style.top = "-20px"; 
                        spanLetters.style.left = "4px"; 
                        spanLetters.style.transform = "translate(11px, 0px) rotate(325deg)";
                    break;
                    
                    // R
                    case 1: 
                        spanLetters.style.top = "-18px";
                         spanLetters.style.left = "0px"; 
                         spanLetters.style.transform = "translate(10px, 0px) rotate(3deg)";
                    break;
                    
                    // A
                    case 2:
                        spanLetters.style.height = "47px";
                         spanLetters.style.top = "-24px"; spanLetters.style.left = "-8px"; 
                         spanLetters.style.transform = "translate(10px, 0px) rotate(47deg)";
                    break;
                    
                    // G
                    case 3: 
                        spanLetters.style.top = "-22px"; 
                        spanLetters.style.left = "-10px"; 
                        spanLetters.style.transform = "translate(10px, 0px) rotate(71deg)";
                    break;
                    
                    // Space
                    case 4: 
                        spanLetters.style.top = "-24px"; 
                        spanLetters.style.left = "-8px"; 
                        spanLetters.style.transform = "translate(10px, 0px) rotate(100deg)";
                    break;
                    
                    // M
                    case 5: 
                        spanLetters.style.bottom = "29px"; 
                        spanLetters.style.left = "3px"; 
                        spanLetters.style.transform = "translate(10px, 0px) rotate(186deg)";
                    break;
                    
                    // E
                    case 6: 
                        spanLetters.style.bottom = "25px"; 
                        spanLetters.style.left = "11px"; 
                        spanLetters.style.transform = "translate(10px, 0px) rotate(220deg)";
                    break;
                };
            });
        };
        curveSpanLetters();
    };
    
    //____________________________
    //
    // Fade Letters
    //____________________________
            
    fadeLetters(speedFade) {
        const fade = () => {
            const followTextSelector = document.querySelector("#followText");
            let opacity = followTextSelector.style.opacity; 
            if(!opacity) opacity = 1;
            if( opacity > 0 ) {
                opacity -= speedFade;
                followTextSelector.style.opacity = opacity;
            }
            requestAnimationFrame( fade );
        };
        fade();		
    }
    
    //____________________________
    //
    // Animate Cursor With GSAP
    //____________________________
                
    animateMoveCursor() {
            
        gsap.set(".o-followCircle", {xPercent: -50, yPercent: -50});

        const ball = document.querySelector(".o-followCircle");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.2;

        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");

        window.addEventListener("mousemove", mouseEvent => {    
            mouse.x = mouseEvent.x;
            mouse.y = mouseEvent.y;  
        });

        gsap.ticker.add(() => {
            
            // adjust speed for higher refresh monitors
            const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
              
            pos.x += (mouse.x - pos.x) * dt;
            pos.y += (mouse.y - pos.y) * dt;
            xSet(pos.x);
            ySet(pos.y);
        });	
    };

    onPointerMove(eventName) {
        const followCircle = document.getElementById('followCircle');
        
        if( eventName == 'mouseover') {
            // GSAP
            gsap.to(followCircle, 0.1, {
                opacity: 0.7,
                scale: 3
            });
        } else if(eventName == 'mouseout') {
            // GSAP
            gsap.to(followCircle, 0.1, {
                opacity: 1,
                scale: 1
            });					
        }
    };

	//____________________________
	//
	// Event Listeners
	//____________________________	
		
	_eventListenersIndependent() {
		
		const links = document.querySelectorAll(".o-modal__multimedia.--independent a.zoom");
		const gsapCursor = {
		    'links' : links,
		};

		// Mouse Movement
		//_____________________________________
	
		Object.keys(gsapCursor).forEach(key => {
            gsapCursor[key].forEach((value, index) => {

                // Mouse Over
                value.addEventListener('mouseover', () => {
                    let eventName = 'mouseover'
                    this.onPointerMove(eventName); 
                });	

                // Mouse Out
                value.addEventListener('mouseout', () => {
                    let eventName = 'mouseout'
                    this.onPointerMove(eventName); 
                });	
            });	
		});	
	};
};

export { Cursor };