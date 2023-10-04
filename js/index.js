const body = document.body;
const hamburgerBtn = document.querySelector(".hamburger-btn")
const closeBtn = document.querySelector(".close-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const accorditionLower = document.querySelectorAll(".accordition-lower")
const accorditionChoice = document.querySelectorAll(".accordition-choice")
const accorditionArrow = document.querySelectorAll(".accordition-arrow")
const rotateArrow = document.querySelectorAll(".rotate-arrow")
const coloredUnderline = document.querySelectorAll(".colored-underline")
const fillerSpan = document.querySelectorAll(".filler-span")
const selectedLi = document.querySelectorAll(".custom-plan-list > li")
const orderBtn = document.querySelector(".order-button")
const blackBg = document.querySelector(".black-bg")
const orderSummary = document.querySelector(".order-summary-final")
const checkoutBtn = document.querySelector(".mobile-checkout-btn")
const ammountSpan = document.querySelector(".ammount")
const accorditionOption = document.querySelectorAll(".accordition-option")
const wrapper = document.querySelectorAll(".wrapper")

hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.remove("hidden");
    body.classList.add("no-scroll")
})
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add("hidden");
    body.classList.remove("no-scroll")
})

const clickHandler = (ev) => {
    if(ev.target.matches('.accordition-choice')) {
        const accorditionLowerChoice = ev.target.parentNode;
        const lowerChoices = accorditionLowerChoice.querySelectorAll(".accordition-choice");
        for (const btn of lowerChoices) {
            if (btn === ev.target && !btn.classList.contains("selected")) {
                    btn.classList.add("selected");
            } else if (btn === ev.target && btn.classList.contains("selected")) {
                    btn.classList.add("selected");
            } else {
                    btn.classList.remove("selected");
            }
        }
    }
    if(ev.target.matches('.choice-title')) {
        const accorditionLowerChoiceOne = ev.target.parentNode.parentNode;
        const lowerChoicesOne = accorditionLowerChoiceOne.querySelectorAll(".accordition-choice");
        for (const btn of lowerChoicesOne) {
            if (btn === ev.target.parentNode && !btn.classList.contains("selected")) {
                    btn.classList.add("selected");
            } else if (btn === ev.target.parentNode && btn.classList.contains("selected")) {
                    btn.classList.add("selected");
            } else {
                    btn.classList.remove("selected");
            }
        }
    }
    if(ev.target.matches('.choice-p')) {
        const accorditionLowerChoiceTwo = ev.target.parentNode.parentNode;
        const lowerChoicesTwo = accorditionLowerChoiceTwo.querySelectorAll(".accordition-choice");
        for (const btn of lowerChoicesTwo) {
            if (btn === ev.target.parentNode && !btn.classList.contains("selected")) {
                    btn.classList.add("selected");
            } else if (btn === ev.target.parentNode && btn.classList.contains("selected")) {
                    btn.classList.add("selected");
            } else {
                    btn.classList.remove("selected");
            }
        }
    }
    if(accorditionChoice[0].classList.contains("selected")) {
        fillerSpan[0].innerHTML = "using";
        coloredUnderline[0].innerHTML = "Capsules";
        fillerSpan[1].innerHTML = "using";
        coloredUnderline[5].innerHTML = "Capsules";
    }
    if(accorditionChoice[1].classList.contains("selected")) {
        fillerSpan[0].innerHTML = "as";
        coloredUnderline[0].innerHTML = "Filter";
        fillerSpan[1].innerHTML = "as";
        coloredUnderline[5].innerHTML = "Filter";
    }
    if(accorditionChoice[2].classList.contains("selected")) {
        fillerSpan[0].innerHTML = "as";
        coloredUnderline[0].innerHTML = "Espresso";
        fillerSpan[1].innerHTML = "as";
        coloredUnderline[5].innerHTML = "Espresso";
    }
    if(accorditionChoice[3].classList.contains("selected")) {
        coloredUnderline[1].innerHTML = "Single Origin";
        coloredUnderline[6].innerHTML = "Single Origin";
    }
    if(accorditionChoice[4].classList.contains("selected")) {
        coloredUnderline[1].innerHTML = "Decaf";
        coloredUnderline[6].innerHTML = "Decaf";
    }
    if(accorditionChoice[5].classList.contains("selected")) {
        coloredUnderline[1].innerHTML = "Blended";
        coloredUnderline[6].innerHTML = "Blended";
    }
    if(accorditionChoice[6].classList.contains("selected")) {
        coloredUnderline[2].innerHTML = "250g";
        coloredUnderline[7].innerHTML = "250g";
    }
    if(accorditionChoice[7].classList.contains("selected")) {
        coloredUnderline[2].innerHTML = "500g";
        coloredUnderline[7].innerHTML = "500g";
    }
    if(accorditionChoice[8].classList.contains("selected")) {
        coloredUnderline[2].innerHTML = "1000g";
        coloredUnderline[7].innerHTML = "1000g";
    }
    if(accorditionChoice[9].classList.contains("selected")) {
        coloredUnderline[3].innerHTML = "Wholebean";
        coloredUnderline[8].innerHTML = "Wholebean";
    }
    if(accorditionChoice[10].classList.contains("selected")) {
        coloredUnderline[3].innerHTML = "Filter";
        coloredUnderline[8].innerHTML = "Filter";
    }
    if(accorditionChoice[11].classList.contains("selected")) {
        coloredUnderline[3].innerHTML = "Cafetiére";
        coloredUnderline[8].innerHTML = "Cafetiére";
    }
    if(accorditionChoice[12].classList.contains("selected")) {
        coloredUnderline[4].innerHTML = "Every week";
        coloredUnderline[9].innerHTML = "Every week";
        ammountSpan.innerHTML = "14.00";
    }
    if(accorditionChoice[13].classList.contains("selected")) {
        coloredUnderline[4].innerHTML = "Every 2 weeks";
        coloredUnderline[9].innerHTML = "Every 2 weeks";
        ammountSpan.innerHTML = "17.25";
    }
    if(accorditionChoice[14].classList.contains("selected")) {
        coloredUnderline[4].innerHTML = "Every month";
        coloredUnderline[9].innerHTML = "Every month";
        ammountSpan.innerHTML = "22.50";
    }
    for(let i=0;i<accorditionLower.length;i++) {
        let childrenNodes = accorditionLower[i].children;
        for(let j=0;j<childrenNodes.length;j++) {
            if(childrenNodes[j].classList.contains("selected")) {
                accorditionLower[i].classList.add("lole");
                let buttons = Array.from(accorditionLower); 
                if(buttons.every((btn) => btn.classList.contains("lole"))) {
                    orderBtn.disabled = false;
                    orderBtn.classList.remove("disabled");
                };
            }
        }
    }
}
for(let i=0; i<accorditionLower.length;i++) {
    accorditionLower[i].addEventListener('click', clickHandler);
}

for(let i=0;i<accorditionArrow.length;i++) {
    accorditionArrow[i].addEventListener('click', () => {
        accorditionLower[i].classList.toggle("faq-hidden");
        rotateArrow[i].classList.toggle("rotate-arrow-lul");
        if(!accorditionLower[i].classList.contains("faq-hidden")) {
            selectedLi[i].classList.add("selected-li")
            for (const btn of selectedLi) {
                let targetLul = btn;
                let list_items = Array.from(selectedLi);
                let indexOfDiv = list_items.indexOf(targetLul);
                if(indexOfDiv !== i) {
                    targetLul.classList.remove("selected-li");
                }
            }
            wrapper[i].classList.add("is-open")
        } 
        else if(accorditionLower[i].classList.contains("faq-hidden")) {
            selectedLi[i].classList.remove("selected-li")
            wrapper[i].classList.remove("is-open")
        }
    })
}
orderBtn.addEventListener('click', () => {
    blackBg.classList.remove("hidden");
    orderSummary.classList.remove("hidden");
    body.classList.add("no-scroll");
})
checkoutBtn.addEventListener('click', () => {
    blackBg.classList.add("hidden");
    orderSummary.classList.add("hidden");
    body.classList.remove("no-scroll");
})
document.body.addEventListener('click', function( event ){
for(let i=0;i<accorditionOption.length;i++) {
	if(accorditionOption[i].contains(event.target) ){
		selectedLi[i].classList.add("selected-li")
            for (const btn of selectedLi) {
                let targetLul = btn;
                let list_items = Array.from(selectedLi);
                let indexOfDiv = list_items.indexOf(targetLul);
                if(indexOfDiv !== i) {
                    targetLul.classList.remove("selected-li");
                }
            }
	}
}
});