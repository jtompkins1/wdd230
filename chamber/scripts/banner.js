//start of banner script

document.addEventListener("DOMContentLoaded", function() {
    const bannerBtn = document.querySelector(".banner-close");
    const banner = document.querySelector(".banner");
    
    //console.log("bannerBtn:", bannerBtn);
    //console.log("banner:", banner);
    
    bannerBtn.addEventListener("click", () => {
        if (banner) {
            banner.classList.add("hidden");
        }
    });
});