document.addEventListener("DOMContentLoaded", () => {

    const shareBtn = document.querySelector(".card__article-share-icon");
    const articlePublisherInfo = document.querySelector(".card__article-publisher-info");

    function createSocialMediaIcons(iconName) {
        for(let i = 0; i < 3; i++) {
            let icon = document.createElement("img");
            icon.setAttribute("src", "./images/icon-" + iconName + ".svg");
            icon.classList.add("social-media-icon");
            return icon;
        }
    }

    shareBtn.addEventListener("mouseenter", () => {
        let paragraph = document.createElement("div");
        let share = document.createElement("span");
        share.textContent = "share";
        share.classList.add("share");
        paragraph.append(share);
        paragraph.append(createSocialMediaIcons("facebook"));
        paragraph.append(createSocialMediaIcons("twitter"));
        paragraph.append(createSocialMediaIcons("pinterest"));
        paragraph.classList.add("black");
        articlePublisherInfo.append(paragraph);
        if(document.body.clientWidth <= 375) {
            shareBtn.style.top = "0.4em";
        }
    });

    shareBtn.addEventListener("mouseleave", () => {
        if(document.body.clientWidth <= 1445) {
            shareBtn.style.top = "0";
        }
        articlePublisherInfo.removeChild(articlePublisherInfo.querySelector(".black"));
    });

});