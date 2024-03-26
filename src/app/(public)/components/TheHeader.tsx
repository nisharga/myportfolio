import Link from 'next/link';

const TheHeader = () => {
    return (
        <header
            /* variants={fadeIn(0.5)}
    initial="hidden"
    animate="show" */
            id='navbar'
            className='fixed inset-x-0 top-0 right-0 z-50 flex items-end justify-between px-8 py-4 duration-500 md:px-6 xl:px-12 backdrop-blur-lg'
        >
            <h1 className='relative text-2xl capitalize font-signature text-accent group top-1'>
                <Link href='/' className='block'>
                    nisharga kabir
                    <div className='absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300'></div>
                </Link>
            </h1>

            {/*  <NavButton
      onClick={() => {
        setNavbarCollapsed((prev) => !prev);
      }}
      navbarCollapsed={navbarCollapsed}
      className="md:invisible"
    />

    {(navbarCollapsed || windowWidth > md) && (
      <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
        <ul className="flex flex-col items-stretch gap-3 list-style-none lg:gap-5 xl:gap-6 md:flex-row md:items-center">
          {navLinks.map(({ name, url }, i) => (
            <NavItem
              key={i}
              href={url}
              index={i}
              delay={ANIMATION_DELAY}
              onClick={() => setNavbarCollapsed(false)}
            >
              {name}
            </NavItem>
          ))}

          <div className="flex items-center justify-between gap-5 xl:gap-6">
            {cta && (
              <Button
                type="link"
                href={cta.url}
                sameTab={cta?.sameTab}
                variants={slideIn({
                  delay: ANIMATION_DELAY + navLinks.length / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              >
                {cta.title}
              </Button>
            )}
            <DarkModeButton
              onClick={() => setNavbarCollapsed(false)}
              variants={slideIn({
                delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                direction: 'down',
              })}
              initial="hidden"
              animate="show"
            />
          </div>
        </ul>
      </nav>
    )} */}
        </header>
    );
};

export default TheHeader;
