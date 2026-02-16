"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";

type Specialty = {
  title: string;
  description: string;
  image: string;
};

type AccordionItem = {
  title: string;
  content: string;
};

const specialties: Specialty[] = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg",
  },
];

const faqItems: AccordionItem[] = [
  { title: "Do you take insurance?", content: "Answer goes here." },
  { title: "What are your rates?", content: "Answer goes here." },
  { title: "Do you have any openings?", content: "Answer goes here." },
];

const backgroundItems: AccordionItem[] = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

const navLinks = [
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

function PlusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-4 shrink-0">
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span
        className={`absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
    </span>
  );
}

function OutlineButton({
  label,
  href = "#",
  inverted = false,
  weightClass = "font-semibold",
}: {
  label: string;
  href?: string;
  inverted?: boolean;
  weightClass?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center border px-8 py-3 text-[0.82rem] ${weightClass} uppercase tracking-[0.05em] transition-colors duration-200 ${
        inverted
          ? "border-[var(--color-cream)] text-[var(--color-cream)] hover:bg-[var(--color-cream)] hover:text-[var(--color-dark)]"
          : "border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)]"
      }`}
    >
      {label}
    </a>
  );
}

function AccordionList({
  items,
  iconPlacement = "right",
  itemTextClassName = "text-[1.15rem] md:text-[1.25rem]",
  rowPaddingClassName = "py-4",
}: {
  items: AccordionItem[];
  iconPlacement?: "left" | "right";
  itemTextClassName?: string;
  rowPaddingClassName?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-[rgba(36,54,27,0.45)]">
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <div
            key={item.title}
            className="border-b border-[rgba(36,54,27,0.45)]"
          >
            <button
              type="button"
              className={`flex w-full items-center justify-between gap-4 text-left ${rowPaddingClassName}`}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {iconPlacement === "left" && <PlusIcon open={open} />}
              <span className={`flex-1 ${itemTextClassName}`}>{item.title}</span>
              {iconPlacement === "right" && <PlusIcon open={open} />}
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                open
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 text-[0.98rem] leading-8 text-[rgba(36,54,27,0.85)] md:pb-8">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 8) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        ticking = false;
        return;
      }

      if (currentScrollY > lastScrollY.current + 4) {
        setIsHeaderVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY.current - 4) {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateHeaderVisibility);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <header
        className={`sticky top-0 z-50 bg-[rgba(251,246,241,0.96)] backdrop-blur-sm transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="page-shell hidden items-baseline justify-between pb-7 pt-3 md:flex">
          <a href="#" className="text-[2.15rem] font-medium leading-[41px]">
            Lilac Template
          </a>
          <nav className="flex items-baseline gap-10 text-[1.25rem] leading-[31px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex leading-[31px] hover:opacity-70"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="page-shell grid grid-cols-[40px_1fr_40px] items-center py-5 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen((state) => !state)}
            className="inline-flex h-8 w-8 items-center justify-center"
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-[var(--color-ink)]" />
              <span className="block h-px w-5 bg-[var(--color-ink)]" />
            </span>
          </button>
          <a
            href="#"
            className="text-center text-[1.85rem] font-medium leading-none"
          >
            Lilac Template
          </a>
          <span />
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[rgba(36,54,27,0.08)] bg-[var(--color-cream)] px-[6vw] py-4 md:hidden">
            <div className="flex flex-col gap-3 text-[1.1rem]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="bg-[var(--color-cream)] py-12 md:pb-0 md:pt-16">
          <div className="page-shell grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="arch-mask -mt-7 mr-auto w-full max-w-[575px]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg"
                alt="Person holding flowers"
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            <div className="mx-auto flex max-w-[560px] flex-col items-center text-center md:ml-2 md:-mt-42">
              <h1 className="text-[81px] leading-[83px] font-[500] max-md:text-[3rem] max-md:leading-[3.1rem]">
                Live your life
                <br />
                in full bloom
              </h1>
              <p className="mt-7 text-[1.28rem] leading-8">
                Therapy for Adults in Minneapolis, MN.
              </p>
              <div className="mt-8">
                <OutlineButton label="CONNECT WITH ME ->" weightClass="font-medium" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-light)]">
          <div className="grid md:h-[700px] md:grid-cols-2 md:overflow-hidden">
            <div className="order-2 flex flex-col md:order-1">
              <div className="flex flex-1 items-center">
                <div className="w-full px-[7vw] py-10 md:px-[4vw] md:py-0">
                  <h2 className="text-[53px] font-[500] leading-[58px] max-md:text-[2.35rem] max-md:leading-[1.05] md:max-w-[760px]">
                    Live a fulfilling life.
                  </h2>
                  <p className="mt-8 max-w-[860px] text-[20px] font-[400] leading-[31px] max-md:text-[1.08rem] max-md:leading-8">
                    Life can be challenging - especially when you&apos;re
                    trying to balance your personal and professional life.
                  </p>
                  <p className="mt-6 max-w-[860px] text-[20px] font-[400] leading-[31px] max-md:text-[1.08rem] max-md:leading-8 md:mt-8">
                    It&apos;s easy to feel like you&apos;re alone in facing
                    these challenges, but I want you to know that I&apos;m here
                    to help.
                  </p>
                </div>
              </div>
              <div className="border-t border-[rgba(36,54,27,0.5)] py-4 md:py-3">
                <div className="flex justify-center">
                  <OutlineButton label="GET IN TOUCH ->" weightClass="font-medium" />
                </div>
              </div>
            </div>

            <div className="order-1 overflow-hidden md:order-2">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg"
                alt="Woman in flowers"
                className="h-full min-h-[300px] w-full object-cover object-center md:min-h-0"
              />
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-20 md:py-28">
          <div className="page-shell">
            <h2 className="text-center text-[53px] font-[500] not-italic leading-[85px] text-[rgb(34,54,20)] max-md:text-[2.35rem] max-md:leading-[1.05]">
              My Specialties
            </h2>

            <div className="mt-10 grid items-stretch gap-8 md:mt-14 md:grid-cols-3">
              {specialties.map((specialty) => (
                <article
                  key={specialty.title}
                  className="flex h-full flex-col border border-[rgba(36,54,27,0.6)] bg-[#E5E0DA] px-7 pb-8 pt-7 md:px-8 md:pb-10 md:pt-8"
                >
                  <h3 className="text-[20px] font-[500] leading-[22px]">
                    {specialty.title}
                  </h3>
                  <p className="mt-6 text-[14px] font-[400] leading-[23px] text-[rgba(36,54,27,0.88)]">
                    {specialty.description}
                  </p>
                  <div className="circle-mask mt-10 w-[80%] max-w-[410px] self-center md:mt-14">
                    <img
                      src={specialty.image}
                      alt={specialty.title}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-bright)] py-20 md:py-0">
          <div className="grid items-center gap-12 md:grid-cols-2 md:items-stretch">
            <div className="md:h-full">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg"
                alt="Field flowers"
                className="aspect-[4/3] w-full object-cover object-left md:h-full md:aspect-auto"
              />
            </div>

            <div className="px-[6vw] md:px-[5.5vw] md:py-28">
              <div className="max-w-[560px]">
                <h2 className="text-[53px] font-[500] not-italic leading-[58px] text-[rgb(34,54,20)] max-md:text-[2.35rem] max-md:leading-[1.05]">
                  You do not have to do this all alone.
                </h2>
                <p className="mt-6 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.08rem] max-md:leading-8">
                  If you are facing any of these, there is hope:
                </p>
                <ul className="mt-5 list-disc space-y-3 pl-5 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.06rem] max-md:leading-8">
                  <li>Persistent feelings of sadness or hopelessness</li>
                  <li>Trouble focusing or making decisions</li>
                  <li>Difficulty maintaining relationships</li>
                  <li>Feeling constantly exhausted or unmotivated</li>
                  <li>A pervasive sense of being overwhelmed</li>
                </ul>
                <p className="mt-7 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.08rem] max-md:leading-8">
                  With empathy and guidance, we will work together to navigate
                  the challenges life throws your way.
                </p>
                <div className="mt-10">
                  <OutlineButton label="WORK WITH ME" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-light)] py-20 md:py-28">
          <div className="page-shell grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="order-2 max-w-[560px] md:order-1">
              <h2 className="text-[53px] font-[500] not-italic leading-[58px] text-[rgb(34,54,20)] max-md:text-[2.35rem] max-md:leading-[1.05]">
                Hi, I am Lilac.
              </h2>
              <p className="mt-6 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.08rem] max-md:leading-8">
                I am committed to providing a safe and supportive environment
                where we can explore your thoughts, feelings, and behaviors.
                With empathy and guidance, we will work together to navigate the
                challenges life throws your way.
              </p>
              <div className="mt-10">
                <OutlineButton label="LET'S CHAT" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-full max-w-[430px] md:ml-[60px]">
                <div className="arch-mask">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg"
                    alt="Woman with flowers"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
                <div className="circle-mask absolute -bottom-[47px] -right-[150px] w-[312px] md:-bottom-[55px] md:-right-[158px]">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg"
                    alt="Lilac flower close up"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-cream)] py-20 md:py-28">
          <div className="page-shell grid items-start gap-12 md:grid-cols-2 md:gap-20">
            <div className="arch-mask mx-auto w-full max-w-[500px]">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg"
                alt="Notebook and flower"
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            <div className="max-w-[560px]">
              <h2 className="text-[53px] font-[500] not-italic leading-[58px] text-[rgb(34,54,20)] max-md:text-[2.35rem] max-md:leading-[1.05]">
                FAQs
              </h2>
              <div className="mt-6">
                <AccordionList
                  items={faqItems}
                  iconPlacement="left"
                  itemTextClassName="text-[44px] font-[500] not-italic leading-normal text-[rgb(34,54,20)] max-md:text-[1.35rem]"
                  rowPaddingClassName="py-4 md:py-6"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-light)] py-20 md:py-24">
          <div className="page-shell">
            <h3 className="text-center text-[44px] font-[500] not-italic leading-[49px] text-[rgb(34,54,20)] max-md:text-[2rem] max-md:leading-[1.1]">
              My Professional Background
            </h3>
            <div className="mx-auto mt-8 max-w-[760px]">
              <AccordionList
                items={backgroundItems}
                iconPlacement="right"
                itemTextClassName="text-[25px] font-[400] not-italic leading-normal text-[rgb(34,54,20)] max-md:text-[1.25rem]"
              />
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-dark)] py-20 md:py-28">
          <div className="page-shell">
            <div className="mx-auto max-w-[860px] text-center text-[var(--color-cream)]">
              <h3 className="text-[44px] font-[500] not-italic leading-[49px] text-[rgb(251,246,241)] max-md:text-[2.15rem] max-md:leading-[1.05]">
                Get started today.
              </h3>
              <p className="mx-auto mt-6 max-w-[760px] text-[20px] font-[400] not-italic leading-[31px] text-[rgb(251,246,241)] max-md:text-[1.08rem] max-md:leading-8">
                Ready to take the first step towards a happier, healthier you?
                <br />
                Contact me to book your first session. I look forward to
                starting this therapeutic journey with you.
              </p>
              <div className="mt-10">
                <OutlineButton label="GET IN TOUCH" inverted />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <section className="bg-[var(--color-cream)] py-16 md:py-20">
          <div className="page-shell grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
            <div>
              <h3 className="text-[44px] font-[500] not-italic leading-[49px] text-[rgb(34,54,20)] max-md:text-[2rem] max-md:leading-[1.2]">
                Lilac Template
              </h3>
              <p className="mt-5 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.06rem] max-md:leading-8">
                123 Example Road
                <br />
                Minneapolis, MN
                <br />
                <br />
                email@example.com
                <br />
                (555) 555-5555
              </p>
            </div>

            <div>
              <h4 className="text-[1.5rem] font-medium">Hours</h4>
              <p className="mt-4 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.02rem] max-md:leading-8">
                Monday - Friday
                <br />
                10am - 6pm
              </p>
            </div>

            <div className="md:text-right">
              <h4 className="text-[1.5rem] font-medium">Find</h4>
              <p className="mt-4 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)] max-md:text-[1.02rem] max-md:leading-8">
                Home
                <br />
                Contact
                <br />
                Blog
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-light)] py-12 md:py-14">
          <div className="page-shell text-center">
            <p className="text-[16px] font-[400] not-italic leading-[26px] text-[rgb(0,0,0)] max-md:text-[0.9rem] max-md:leading-8">
              Privacy &amp; Cookies Policy &nbsp; Good Faith Estimate &nbsp;
              Website Terms &amp; Conditions &nbsp; Disclaimer
            </p>
            <p className="mt-2 text-[16px] font-[400] not-italic leading-[26px] text-[rgb(0,0,0)] max-md:text-[0.9rem] max-md:leading-8">
              Website Template Credits: Go Bloom Creative
            </p>
            <p className="mt-3 text-[16px] font-[400] not-italic leading-[26px] text-[rgb(34,54,20)] max-md:text-[0.9rem] max-md:leading-8">
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </p>
          </div>
        </section>
      </footer>
    </div>
  );
}
