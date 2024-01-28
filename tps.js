useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    // Callback to execute when screen width is greater than 1024 pixels
    let Tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none play reverse",
      },
    });

    Tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "none" },
      "init"
    );

    Tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "none" },
      "init"
    );

    Tl.fromTo(
      promoRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      happyHoursRef.current,
      { opacity: 0, translateX: "30px" },
      { opacity: 1, translateX: 0, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      delayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );

    Tl.fromTo(
      titleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      winterRef.current,
      { opacity: 0, translateX: "30px" },
      { opacity: 1, translateX: 0, duration: 0.4, ease: "none" },
      "init"
    );
    Tl.fromTo(
      buttonRef.current,
      { opacity: 0, translateX: "-30px" },
      { opacity: 1, translateX: 0, duration: 0.4, ease: "none" },
      "init"
    )

    // Play the timeline
    Tl.play();
  });
}, []);