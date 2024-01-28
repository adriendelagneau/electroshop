<header className={`w-full  bg-skin-inverted transition-all fixed top-0 h-16 z-50 ${!visible && 'top-[-64px]'} left-[50%] translate-x-[-50%] mx-6`}>
<nav className='flex items-center justify-between w-full h-full px-4 py-2'>
    <div className='hidden w-1/4 sm:inline-flex'>
        
    <Link href={"/"} >
        <Image src={"https://res.cloudinary.com/dos8mey8r/image/upload/v1705394086/electro/logo11_l1u82h.png"} width={50} height={50} alt='' />
    </Link>
    </div>
    <div className='w-1/2 text-xl font-Lemon sm:text-center sm:text-3xl'>
        
    <Link href={"/"} >
        Electro Store
    </Link>
    </div>
    <ul className='flex items-center justify-end w-1/4 gap-4'>
        <li>
            {session?.user ? (
                session?.user.role === "admin" ? (
                    <Link href={"/dashboard"}>dashboard</Link>
                ) : (
                    <Link href={`/profile/${session?.user?._id}`}>profile</Link>
                )
            ) : (
                <Link href={"/register"}>login</Link>
            )}
        </li>
        <li>
            {session?.user.role !== "admin" && (<CartIcon />)
            }
        </li>
    </ul>
</nav>
</header>