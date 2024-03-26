export const hideNavWhileScrolling = ({
    id = 'navbar',
    offset = 100,
    when = true
}: {
    id?: string;
    offset?: number;
    when: boolean;
}) => {
    const nav = document.getElementById(id);
    if (!nav) return;

    let prevScrollPos = window.pageYOffset;

    window.onscroll = () => {
        if (when) {
            const curScrollPos = window.pageYOffset;
            if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
            else nav.style.top = '0';
            prevScrollPos = curScrollPos;
        }
    };
};
