const animItems = document.querySelectorAll("._anim-item");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);

    function animOnScroll() {
        for (var i = 0; i < animItems.length; i++) {
            const animStart = 4;
            const animItem = animItems[i];
            const animItemHight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;

            let animItemPoint = window.innerHeight - animItemHight / animStart;
            if (animItemHight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if (
                scrollY > animItemOffset - animItemPoint &&
                scrollY < animItemOffset + animItemHight
            ) {
                animItem.classList.add("._active");
            } else {
                if (!animItem.classList.contains("._anim-no-hide")) {
                    animItem.classList.remove("._active");
                }
            }
        }
    }

    function offset(elem) {
        const rect = elem.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
}

setTimeout(() => {
    animOnScroll()
}, 300)