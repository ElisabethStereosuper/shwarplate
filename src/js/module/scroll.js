const handleScrollAnim = () => {
    let lastScrollPos = 0;
    let tick = false;

    const anim = (scrollPos) => {
        connsole.log(scrollPos);
    };

    window.addEventListener('scroll', () => {
        lastScrollPos = window.scrollY;

        if (!tick) {
            window.requestAnimationFrame(() => {
                anim(lastScrollPos);
                tick = false;
            });

            tick = true;
        }
    });
};

export default handleScrollAnim;
