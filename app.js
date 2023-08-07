let userRate = 0;
for (let i = 1; i <= 5; ++i) {
    document.getElementsByClassName("checkmark")[i - 1].addEventListener("click",
    function(){userRate = i});
}


document.getElementById("submit-btn").addEventListener("click",
function(){thankyou(userRate)});

function thankyou(userRate) {
    if (userRate == 0) return;
    
    document.getElementById("header").remove();
    document.getElementById("rate-box").remove();
    document.getElementById("submit-btn").remove();

    const thanks_img = document.createElement("img");
    thanks_img.src = "./images/illustration-thank-you.svg";
    thanks_img.className += "mx-auto"
    main.appendChild(thanks_img);

    const status = document.createElement("p");
    const status_text = document.createTextNode(`You selected ${userRate} out of 5`);
    status.appendChild(status_text);
    status.className = "text-orange bg-medium-gray-st rounded-3xl p-2 " +
    "w-[200px] text-center mx-auto";
    main.appendChild(status);
    
    const h1 = document.createElement("h1");
    const h1_text = document.createTextNode("Thank you!");
    h1.appendChild(h1_text);
    h1.className = "text-3xl font-bold text-center";
    main.appendChild(h1);

    const para = document.createElement("p");
    const para_text = document.createTextNode("We appreciate you taking " +
    "the time to give a rating. If you ever need more support, don’t" +
    "hesitate to get in touch!")
    para.appendChild(para_text);
    para.className = "text-center text-light-gray";
    main.appendChild(para);
}

