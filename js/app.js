// ***********************************
//          State Variables
// ***********************************
var app = document.querySelector("#app"),
    bg_dark = document.querySelector(".bg--dark"),
    logo = document.querySelector("#logo"),

    infobox = document.querySelector("#info-box"),
    heading_fade = document.querySelector(".heading--fade"),
    heading_fill = document.querySelector(".heading--fill"),
    product_description = document.querySelector("#product-description"),

    btn = document.querySelector(".btn");
    ingredients_btn = document.querySelector("#ingredients-btn"),
    instructions_btn = document.querySelector("#instructions-btn"),
    taste_btn = document.querySelector("#taste-btn"),

    ingredients_info = document.querySelector("#ingredients-info"),
    instructions_info = document.querySelector("#instructions-info"),
    taste_info = document.querySelector("#taste-info"),

    product_nav = document.querySelector("#product-nav"),
    // nav_item = document.querySelector(".product-nav__item"),
    teas = document.querySelector("#teas"),
    teawares = document.querySelector("#teawares"),

    product_menu = document.querySelector(".product-menu"),
    menu_item = document.querySelector(".product-menu__item"),

    item1 = document.querySelector("#item1"),
    item2 = document.querySelector("#item2"),
    item3 = document.querySelector("#item3"),
    item4 = document.querySelector("#item4"),
    item5 = document.querySelector("#item5"),
    
    next_btn = document.querySelector("#next-btn"),
    prev_btn = document.querySelector("#prev-btn");

    main_image = document.querySelector("#main-image"),
    thumbnails = document.querySelector("#thumbnails");

var app_interface = {
    logo_width: 10,
    logo_top: 5.5,
    logo_left: 20,

    bg_dark_right: 0,
    infobox_top: 15,
    menu_bottom: 0,
    nav_bottom: 0
};


// ***********************************
//               Proxy
// ***********************************
var bgChange = {
    set: function(obj, prop, value){
        if(prop == "bg_dark_right"){
            bg_dark.style.right = value + "vw";
        }

        if(prop == "infobox_top"){
           infobox.style.top = value + "vh";
        }

        if(prop == "menu_bottom"){
            product_menu.style.bottom = value + "vh";
        }

        if(prop == "nav_bottom"){
            product_nav.style.bottom = value + "vh";
        }

        if(prop == "logo_width"){
            logo.style.width = value + "%";
        }

        if(prop == "logo_top"){
            logo.style.top = value + "vh";
        }

        if(prop == "logo_left"){
            logo.style.left = value + "vw";
        }
    }
}

var bgPackage = new Proxy(app_interface, bgChange);


// ***********************************
//             Data Array
// ***********************************
var products = [
    {
        name: "Sloth Tea Press",
        description: "Behold the one and only Tea Press. What makes this sleek sloth-printed travel mug so good? Forget wet teabags and infusers. It’s the easiest, cleanest and most versatile way to steep loose leaf tea. Just add your tea to the double-walled stainless steel mug, let it steep, then stop the infusion by sliding the press down. Want a cold one? Just add ice. Now with a push-button lid closure to prevent splashes and make it even easier to sip.",
        instructions: "Not dishwasher or microwave safe.",
        image: "img/sloth-tea-press.svg",
        thumb: "img/sloth-tea-press-open.svg"
    },
    {
        name: "Teal Iced Tea Press",
        description: "What if we told you there was an all-in-one gadget to steep, ice AND sip your tea, at home or on the go? Meet the mug that’ll change how we make iced tea forever. Made of BPA-free, durable Tritan™, it makes iced tea prep quick, easy – and ridiculously fun. Just add your tea and hot water, and scoop your ice into the inner compartment. When you’re ready to sip, press it together to instantly ice your tea. No fuss, no muss. Plus its super-fine mesh stops the infusion, so even the most delicate tea won’t be oversteeped. Now that’s refreshing.",
        instructions: "Not dishwasher or microwave safe.",
        image: "img/tea-press.svg",
        thumb: "img/tea-press-open.svg"
    },
    {
        name: "White Iced Tea Pitcher Press",
        description: "Entertaining a crowd? Allow us to introduce you to this exclusive in-house designed tea maker. It was built specially to let you steep, chill and serve your favourite iced tea – all in one fabulous, fun-to-use pitcher. Just steep your tea in the outer sleeve, add ice to the inner compartment and press down for instant refreshment – easy peasy. And with its bright colourful accents and comfortable handle, it’ll have you serving drinks with flair all summer long. Impressed? Your guests will be.",
        instructions: "Not dishwasher or microwave safe.",
        image: "img/tea-pitcher-press.svg",
        thumb: "img/tea-pitcher-press-open.svg",
    },
    {
        name: "Leaf Glass Perfect Mug",
        description: "So what makes this leaf-printed DAVIDsTEA glass mug so perfect? Well, aside from being the perfect size and shape, it comes with a fine laser cut stainless steel infuser that fits right into it. Plus it has a glass lid to keep all the aroma and heat in the cup, for an even better tea experience. And when you’re done steeping, it turns into a plate for the infuser – how perfect is that?",
        instructions: "Not dishwasher or microwave safe.",
        image: "img/perfect-mug.svg",
        thumb: "img/perfect-mug-separate.svg"
    },
    {
        name: "Clear Glass Teapot",
        description: "This borosilicate glass teapot is the dreamiest way to watch your tea steep. It comes with two different steeping options – a fine mesh stainless steel infuser for smaller leaves, plus a removable spout strainer that gives larger tea leaves plenty of room to unfurl. No matter which blends you’re brewing up, you’re guaranteed a crystal clear view of your tea in action.",
        instructions: "Dishwasher and microwave safe except for metal infuser.",
        image: "img/teapot.svg",
        thumb: "img/teapot-fill.svg"
    },
    {
        name: "Copabanana",
        description: "Big banana chips take centre stage, with a supporting cast of coconut, cocoa, almonds, sweet apple and strawberry pieces. Who could ask for more? One sip and you’ll see why this caffeine-free fruit infusion is the hottest tea north of Havana. It’s sweet, creamy and deliciously exotic. So go ahead and try a cup of Copabanana… you’ll fall in love.",
        ingredients: "Almonds, apple, coconut, orange peel, cocoa peel, banana chips (banana, coconut oil), strawberries, vanilla, artificial flavouring.",
        instructions: " 1-2 Perfect Spoonfuls of tea <br> 475 ml (16 oz) of 95℃/200℉ water for hot tea or 295 ml (10 oz) for iced <br> Steep for 5+ minutes <br> Sip hot or top with ice for iced tea",
        taste: "Creamy with sweet notes of vanilla, banana and berries – like a fruity piña colada",
        image: "img/copabanana-tea.svg",
        thumb: "img/copabanana-cup.svg",
        icon: "img/banana.svg"
    },
    {
        name: "Sweet Tart",
        description: "As soon as we laid eyes on this caffeine-free cherry tea, it was love at first sight. It’s got an irresistible balance of sweetness and tartness, plus a classic red cherry aroma that’ll sweep you off your feet. Refreshing hot or iced, this fruit infusion of ripe cherries, hibiscus blossoms and little candy hearts will totally steal yours… or someone else’s.",
        ingredients: "Apple (apple, citric acid), raisins, carrot, hibiscus blossoms, beetroot, sugar hearts (sugar, rice flour, hydrogenated rapeseed oil, tragacanth, beetroot, artificial flavouring), white hibiscus buds, rose blossoms, sour cherries, artificial flavouring.",
        instructions: "1-2 Perfect Spoonfuls of tea <br> 475 ml (16 oz) of 95℃/200℉ water for hot tea or 295 ml (10 oz) for iced <br> Steep for 5+ minutes <br> Sip hot or top with ice for iced tea",
        taste: "Bright juicy cherry flavour and aroma with the perfect balance between sweet and tart",
        image: "img/sweet-tart-tea.svg",
        thumb: "img/sweet-tart-cup.svg",
        icon: "img/cherry.svg"
    },
    {
        name: "Tulsi Tranquility",
        description: "Need to relax? Chill out with this fruity caffeine-free tulsi tea. It’s overflowing with uber calming ingredients like rosehips, rose petals, strawberries and tulsi, aka holy basil – a sweet and aromatic herb thought to relieve anxiety and stress. With its refreshing red berry taste, it’s the perfect blend to reach for when tea hits the fan.",
        ingredients: "Rosehip shells and seeds, apple, tulsi, hibiscus, red currants, rose petals, raspberries, strawberries, natural flavouring.",
        instructions: "1-2 Perfect Spoonfuls of tea <br> 475 ml (16 oz) of 95℃/200℉ water for hot tea or 295 ml (10 oz) for iced <br> Steep for 5+ minutes <br> Sip hot or top with ice for iced tea",
        taste: "Refreshing red berry flavour with a sweet herby note from the tulsi",
        image: "img/tulsi-tranquility-tea.svg",
        thumb: "img/tulsi-tranquility-cup.svg",
        icon: "img/berry.svg"
    },
    {
        name: "Matcha Ice Cream",
        description: "We sneakily boosted this creamy blend of green tea, white chocolate and almonds with a double scoop of matcha powder for added energy and benefits. It’s deliciously sweet and nutty, without being over-the-top decadent – perfect for satisfying your dessert cravings. And with its refreshing matcha green tea flavour, you can have your ice cream and sip it too.",
        ingredients: "Green tea, almonds, black currants, sugar pearls, matcha green tea, white chocolate curls (sugar, cocoa butter, milk powder, whey powder, lactose, soy lecithin, natural vanilla), stevia extract, natural flavouring.",
        instructions: "1-2 Perfect Spoonfuls of tea <br> 475 ml (16 oz) of 85℃/185℉ water for hot tea or 295 ml (10 oz) for iced <br> Steep for 3-4 minutes <br> Sip hot or top with ice for iced tea",
        taste: "Like creamy white chocolate mixed with a fresh pop of matcha and a nutty hint of raw almond",
        image: "img/matcha-ice-cream-tea.svg",
        thumb: "img/matcha-ice-cream-cup.svg",
        icon: "img/white-chocolate.svg"
    },
    {
        name: "Green Apple Kombucha",
        description: "Ready to bring the thunder? This refreshing matcha-boosted green tea is a real force of nature. Bursting with tart green apple, digestion-friendly kombucha, spicy ginger and a dusting of energizing stone-ground green tea, it’s a revitalizing way to power up and keep your gut happy. One cup of this fruity kombucha tea is all it takes to feel unstoppable.",
        ingredients: "Sencha green tea, ginger, apple, kombucha powder (maltodextrin, green tea, herbal blend, cane sugar, water, kombucha culture), matcha green tea, natural flavouring.",
        instructions: "1-2 Perfect Spoonfuls of tea <br> 475 ml (16 oz) of 85℃/185℉ water for hot tea or 295 ml (10 oz) for iced <br> Steep for 3-4 minutes <br> Sip hot or top with ice for iced tea",
        taste: "Tart green apple balanced with sweet ginger heat",
        image: "img/green-apple-kombucha-tea.svg",
        thumb: "img/green-apple-kombucha-cup.svg",
        icon: "img/green-apple.svg"
    }
];


// ***********************************
//      Functions - Changes State
// ***********************************
function ChangeBackground(){
    // Transition of background, boxes, etc.
    // Elements will move into place
    bgPackage.logo_width = 10;
    bgPackage.logo_left = 20;
    bgPackage.logo_top = 5.5;
    bgPackage.bg_dark_right = 0;
    bgPackage.infobox_top = 15;
    bgPackage.menu_bottom = 0;
    bgPackage.nav_bottom = 0;
}


// ***********************************
//       Functions - Changes UI
// ***********************************
// Initial variables for functions
var i = 0,
    image_tracker = "original",
    current_nav = "",
    reveal = "show";

function ChangeProductInfo(product){
    // TEAWARES SET
    if(current_nav == "teawares"){
        if(product == "product1"){i = 0;}
        if(product == "product2"){i = 1;}
        if(product == "product3"){i = 2;}
        if(product == "product4"){i = 3;}
        if(product == "product5"){i = 4;}
        
        ingredients_btn.style.display = "none";
        instructions_btn.style.display = "inline-block";
        taste_btn.style.display = "none";

        // Reset displayed info after next product
        ingredients_info.style.display = "none";
        instructions_info.style.display = "none";
        taste_info.style.display = "none";
    }

    // TEAS SET
    if(current_nav == "teas"){
        if(product == "product1"){i = 5;}
        if(product == "product2"){i = 6;}
        if(product == "product3"){i = 7;}
        if(product == "product4"){i = 8;}
        if(product == "product5"){i = 9;}
        
        ingredients_btn.style.display = "inline-block";
        instructions_btn.style.display = "inline-block";
        taste_btn.style.display = "inline-block";

        // Reset displayed info after next product
        ingredients_info.style.display = "none";
        instructions_info.style.display = "none";
        taste_info.style.display = "none";
    }

    // Display product information
    heading_fade.innerHTML = products[i].name;
    heading_fill.innerHTML = products[i].name;
    product_description.innerHTML = products[i].description;

    ingredients_info.innerHTML = products[i].ingredients;
    instructions_info.innerHTML = products[i].instructions;
    taste_info.innerHTML = products[i].taste;

    main_image.src = products[i].image;
    thumbnails.src = products[i].thumb;
    i = [i];
}

// INGREDIENTS - Show button info
ingredients_btn.addEventListener("click", function(){
    // btn.classList.remove("btn--active");
    if(reveal == "show"){
        // btn.classList.add("btn--active");
        ingredients_info.style.display = "block";
        instructions_info.style.display = "none";
        taste_info.style.display = "none";
        
        reveal = "hide";
    } else {
        ingredients_info.style.display = "none";

        reveal = "show";
    }    
});

// INGREDIENTS - Show button info
instructions_btn.addEventListener("click", function(){
    // btn.classList.remove("btn--active");
    if(reveal == "show"){
        // btn.classList.add("btn--active");
        ingredients_info.style.display = "none";
        instructions_info.style.display = "block";
        taste_info.style.display = "none";

        reveal = "hide";
    } else {
        instructions_info.style.display = "none";

        reveal = "show";
    }    
});

// TASTE - Show button info
taste_btn.addEventListener("click", function(){
    // btn.classList.remove("btn--active");
    setTimeout(function(){
        TasteEffect();
        TasteEffect();
        TasteEffect();
        TasteEffect();
        TasteEffect();
        setTimeout(function(){
            TasteEffect();
            TasteEffect();
            TasteEffect();
            TasteEffect();
            TasteEffect();
            setTimeout(function(){
                TasteEffect();
                TasteEffect();
                TasteEffect();
                TasteEffect();
                TasteEffect();
            }, 1000)
        }, 1000)
    },1000)

    if(reveal == "show"){
        // btn.classList.add("btn--active");
        ingredients_info.style.display = "none";
        instructions_info.style.display = "none";
        taste_info.style.display = "block";

        reveal = "hide";
    } else {
        taste_info.style.display = "none";

        reveal = "show";
    }
});


function ChangeProductMenu(){
    if(current_nav == current_nav){
        // TEAWARES SET
        teawares.addEventListener("click", function(){
            current_nav = "teawares";
            i = 0;

            item1.src = products[0].image;
            item2.src = products[1].image;
            item3.src = products[2].image;
            item4.src = products[3].image;
            item5.src = products[4].image;
        });

        // TEAS SET
        teas.addEventListener("click", function(){
            current_nav = "teas";
            i = 5;

            item1.src = products[5].image;
            item2.src = products[6].image;
            item3.src = products[7].image;
            item4.src = products[8].image;
            item5.src = products[9].image;
        });
    }
}


function NextProduct(){
    // Increment of 1
    i++;

    if(current_nav == "teawares"){
        if(i > 4){i = 4;}   
    }

    if(current_nav == "teas"){
        if(i > 9){i = 9;}   
    }
    ChangeProductInfo(i);
}


function PrevProduct(){
    // Decrement of 1
    i--;

    if(current_nav == "teawares"){
        if(i < 0){i = 0;}
    }

    if(current_nav == "teas"){
        if(i < 5){i = 5;}
    }
    ChangeProductInfo(i);   
}


function ChangeMainImage(){
    if(image_tracker == "original"){
        thumbnails.addEventListener("click", function(){
            // console.log("Changed to thumb img");
            // Change main image to thumbnail image
            main_image.src = products[i].thumb;
            thumbnails.src = products[i].image;
            
            image_tracker = "new";
        });
    } else {
        thumbnails.addEventListener("click", function(){
            // console.log("Changed to og");
            // Change image back to original set
            main_image.src = products[i].image;
            thumbnails.src = products[i].thumb;

            image_tracker = "original";
        });
    }
}


function MakeIcon(){
    newIcon = document.createElement("img");
    newIcon.src = products[i].icon;
    newIcon.className = "taste-icon";
    newIcon.style.top = "-100px";
    newIcon.style.left = Math.round(Math.random()*window.innerWidth) + "px";

    dim = Math.round(Math.random()*50);
    newIcon.style.opacity = dim/50;

    app.appendChild(newIcon);
    MoveIcon(newIcon);
}


function MoveIcon(icon){
    setTimeout(function(){
        icon.style.top = Math.round(Math.random()*window.innerHeight) + "px"

        setTimeout(function(){
            RemoveIcon(icon);
        }, 1700)
    }, 500);
}


function RemoveIcon(icon){
    app.removeChild(icon)
}


function TasteEffect(){
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
    MakeIcon();
}