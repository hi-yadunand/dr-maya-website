"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { Nunito } from "next/font/google";
import GridContainer from "../components/GridContainer";

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
    title: "Anxiety & Panic Therapy",
    description:
      "Support for constant worry, overthinking, physical tension, and panic symptoms using evidence-based approaches that help restore calm and control.",
    image: "/assets/Anxiety%20%26%20Panic%20Therapy.png",
  },
  {
    title: "Trauma Therapy",
    description:
      "Trauma Therapy (EMDR & Body-Oriented Techniques): Carefully paced trauma work to help process past experiences that continue to affect emotional safety, confidence, and relationships.",
    image: "/assets/Trauma%20Therapy.png",
  },
  {
    title: "Burnout & Stress",
    description:
      "Burnout & High-Pressure Stress: Therapy for professionals, creatives, and high-achievers struggling with exhaustion, perfectionism, and chronic stress after years of pushing through pressure.",
    image: "/assets/Burnout%20%26%20Stress.png",
  },
];

const faqItems: AccordionItem[] = [
  {
    title: "Do you offer in-person and online therapy?",
    content:
      "Yes. I provide in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located in California.",
  },
  {
    title: "What concerns do you specialize in?",
    content:
      "I primarily work with anxiety, panic, trauma, burnout, perfectionism, and chronic stress in adults.",
  },
  {
    title: "What therapy approaches do you use?",
    content:
      "I integrate CBT, EMDR, mindfulness-based therapy, and body-oriented techniques to support emotional healing and nervous system regulation.",
  },
];

const backgroundItems: AccordionItem[] = [
  {
    title: "Education",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology with advanced training in adult anxiety, trauma, and stress-related treatment.",
  },
  {
    title: "Licensure",
    content: "Licensed Clinical Psychologist in California.",
  },
  {
    title: "Certifications",
    content:
      "Specialized training in CBT, EMDR, mindfulness-based interventions, and body-oriented trauma techniques.",
  },
];

const navLinks = [
  { label: "Blog", href: "#professional-background" },
  { label: "Contact", href: "#contact-form" },
];

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
  const labelChars = Array.from(label);

  return (
    <a
      href={href}
      aria-label={label}
      className={`${nunito.className} group inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-10 py-3 text-[0.82rem] ${weightClass} uppercase tracking-[0.05em] !text-white transition-colors duration-200 hover:bg-[var(--color-accent-dark)] hover:!text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-dark)]`}
      data-inverted={inverted ? "true" : "false"}
    >
      <span className="relative block h-[1.1em] overflow-hidden leading-none">
        <span aria-hidden="true" className="block whitespace-pre">
          {labelChars.map((char, index) => (
            <span
              key={`top-${index}`}
              className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full"
              style={{ transitionDelay: `${index * 18}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span
          aria-hidden="true"
          className="absolute left-0 top-full block whitespace-pre"
        >
          {labelChars.map((char, index) => (
            <span
              key={`bottom-${index}`}
              className="inline-block transition-transform duration-300 ease-out group-hover:-translate-y-full group-focus-visible:-translate-y-full"
              style={{ transitionDelay: `${index * 18}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>
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
    <div className="border-t border-[var(--color-border)]">
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <div
            key={item.title}
            className="border-b border-[var(--color-border)]"
          >
            <button
              type="button"
              className={`${nunito.className} flex w-full items-center justify-between gap-4 text-left ${rowPaddingClassName}`}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {iconPlacement === "left" && <PlusIcon open={open} />}
              <span className={`flex-1 ${itemTextClassName}`}>
                {item.title}
              </span>
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
                <p className="pb-6 text-[0.98rem] leading-8 text-[var(--color-text)] md:pb-8">
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
    <div
      id="top"
      className="bg-[var(--color-bg-primary)] text-[var(--color-text)]"
    >
      <header
        className={`${nunito.className} sticky top-0 z-50 bg-[var(--color-bg-primary-elevated)] backdrop-blur-sm transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="page-shell hidden items-baseline justify-between pb-7 pt-3 md:flex">
          <a href="#top" className="text-[2.15rem] font-medium leading-[41px]">
            Dr. Maya Reynolds
          </a>
          <nav className="flex items-baseline gap-10 text-[1.25rem] leading-[31px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="inline-flex leading-[31px] transition-colors duration-200 hover:text-[var(--color-accent)]"
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
            className={`${nunito.className} inline-flex h-8 w-8 items-center justify-center`}
          >
            <span className="space-y-1.5">
              <span className="block h-px w-5 bg-[var(--color-text)]" />
              <span className="block h-px w-5 bg-[var(--color-text)]" />
            </span>
          </button>
          <a
            href="#top"
            className="text-center text-[1.85rem] font-medium leading-none"
          >
            Dr. Maya Reynolds
          </a>
          <span />
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-[6vw] py-4 md:hidden">
            <div className="flex flex-col gap-3 text-[1.1rem]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="bg-[var(--color-bg-primary)] py-12 md:pb-0 md:pt-16">
          <GridContainer className="items-center">
            <div className="col-span-4 md:col-span-4 lg:col-span-5">
              <div className="arch-mask -mt-7 mx-auto w-[72%] max-w-[575px] md:mx-0 md:mr-auto md:w-full">
                <img
                  src="/assets/hero%20image.png"
                  alt="Hero image"
                  className="aspect-[2/3] w-full object-cover"
                />
              </div>
            </div>

            <div className="col-span-4 md:col-span-4 lg:col-span-7 mx-auto mt-6 w-full max-w-[560px] text-center md:-mt-52 lg:-mt-56 lg:pl-6">
              <h1 className="text-[clamp(2.4rem,11vw,5.0625rem)] leading-[clamp(2.6rem,11.3vw,5.1875rem)] font-[500]">
                You Deserve to Feel Steadier.
                <br />
                Healing Starts Here.
              </h1>
              <p className="mt-7 text-[1.28rem] leading-8">
                Compassionate therapy for anxiety, trauma, and burnout in Santa
                Monica
              </p>
              <div className="mt-8">
                <OutlineButton
                  label="CONNECT WITH ME"
                  href="#contact-form"
                  weightClass="font-medium"
                />
              </div>
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-alt)] py-0 lg:!h-[720px] lg:!min-h-[720px] lg:overflow-hidden">
          <GridContainer className="items-stretch gap-y-0 max-w-none pr-0 md:pr-0 lg:h-full">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 order-2 lg:order-1 grid grid-rows-[1fr_auto] bg-[var(--color-bg-alt)]">
              <div className="self-center py-10 lg:py-0 lg:pr-10">
                <h2 className="text-[53px] font-[500] leading-[58px] max-md:text-[2.35rem] max-md:leading-[1.05] md:max-w-[760px]">
                  Create a steadier, more grounded life.
                </h2>
                <p className="mt-8 max-w-[860px] text-[20px] font-[400] leading-[31px] max-md:text-[1.08rem] max-md:leading-8">
                  Living with anxiety, chronic stress, or the lingering effects
                  of past experiences can quietly take over your thoughts, body,
                  and energy.
                </p>
                <p className="mt-6 max-w-[860px] text-[20px] font-[400] leading-[31px] max-md:text-[1.08rem] max-md:leading-8 md:mt-8">
                  Many of my clients are high-achieving and thoughtful on the
                  outside, yet internally feel overwhelmed, exhausted, or
                  constantly on edge. Therapy offers a space to slow down, feel
                  supported, and begin healing in a meaningful way.
                </p>
              </div>
              <div className="border-t border-[var(--color-border)] py-6 md:py-6">
                <div className="grid place-items-center">
                  <OutlineButton
                    label="GET IN TOUCH"
                    href="#contact-form"
                    weightClass="font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-6 order-1 lg:order-2 overflow-hidden lg:h-full">
              <img
                src="/assets/Create%20a%20steadier.png"
                alt="Create a steadier"
                className="h-full min-h-[300px] w-full object-cover object-right md:min-h-0"
              />
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
          <GridContainer>
            <h2 className="col-span-4 md:col-span-8 lg:col-span-12 text-center text-[53px] font-[500] not-italic leading-[85px] text-[var(--color-text)] max-md:text-[2.35rem] max-md:leading-[1.05]">
              My Specialties
            </h2>

            <div className="col-span-4 md:col-span-8 lg:col-span-12 mt-10 grid items-stretch gap-5 min-[576px]:grid-cols-2 md:mt-14 md:gap-8 lg:grid-cols-3">
              {specialties.map((specialty) => (
                <article
                  key={specialty.title}
                  className="grid h-full content-start border border-[var(--color-border)] bg-[#F8F3EC] px-7 pb-8 pt-7 md:px-8 md:pb-10 md:pt-8"
                >
                  <h3 className="inline-block w-fit rounded-full bg-[#E7CFC4] px-4 py-2 text-[20px] font-[500] leading-[22px]">
                    {specialty.title}
                  </h3>
                  <p className="mt-6 text-[14px] font-[400] leading-[23px] text-[var(--color-text)]">
                    {specialty.description}
                  </p>
                  <div className="circle-mask mt-10 w-[80%] max-w-[410px] justify-self-center md:mt-14">
                    <img
                      src={specialty.image}
                      alt={specialty.title}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </GridContainer>
        </section>

        <section className="bg-[#F8F3EC] py-20 md:py-0 lg:!h-[720px] lg:!min-h-[720px] lg:overflow-hidden">
          <GridContainer className="items-stretch gap-y-0 max-w-none pl-0 md:pl-0 lg:h-full">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 overflow-hidden lg:h-full">
              <img
                src="/assets/Managing%20everything%20alone.png"
                alt="Managing everything alone"
                className="aspect-[4/3] w-full object-cover object-left lg:h-full lg:aspect-auto"
              />
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-6 grid grid-rows-[1fr_auto] bg-[#F8F3EC] lg:h-full">
              <div className="self-center py-10 lg:py-0 lg:pl-6">
                <div className="max-w-[560px]">
                  <h2 className="text-[53px] font-[500] not-italic leading-[58px] text-[var(--color-text)] max-md:text-[2.35rem] max-md:leading-[1.05]">
                    You don&apos;t have to keep managing everything alone.
                  </h2>
                  <p className="mt-6 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                    If you&apos;re experiencing any of the following, therapy
                    can help:
                  </p>
                  <ul className="mt-5 list-disc space-y-3 pl-5 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.06rem] max-md:leading-8">
                    <li>Constant anxiety or feeling on edge</li>
                    <li>Overthinking and difficulty relaxing</li>
                    <li>Trouble sleeping or physical tension</li>
                    <li>Emotional exhaustion and burnout</li>
                    <li>Lingering effects of past experiences</li>
                    <li>Feeling functional but internally overwhelmed</li>
                  </ul>
                  <p className="mt-7 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                    With evidence-based support and a collaborative approach,
                    we&apos;ll work together to build emotional regulation,
                    clarity, and long-term resilience.
                  </p>
                </div>
              </div>
              <div className="border-t border-[var(--color-border)] py-6 md:py-6">
                <div className="grid place-items-center">
                  <OutlineButton label="WORK WITH ME" href="#contact-form" />
                </div>
              </div>
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-primary)] py-20 md:py-28">
          <GridContainer className="items-center">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 order-2 lg:order-1 max-w-[560px]">
              <h2 className="text-[53px] font-[500] not-italic leading-[58px] text-[var(--color-text)] max-md:text-[2.35rem] max-md:leading-[1.05]">
                Hi, I&apos;m Dr. Maya Reynolds.
              </h2>
              <p className="mt-6 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                I&apos;m a licensed clinical psychologist in Santa Monica,
                California, offering therapy for adults struggling with anxiety,
                trauma, and burnout.
              </p>
              <p className="mt-5 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                My approach is warm, collaborative, and grounded. I integrate
                cognitive-behavioral therapy (CBT), EMDR, mindfulness-based
                practices, and body-oriented techniques to address both
                emotional experiences and the physical impact of stress and
                trauma.
              </p>
              <p className="mt-5 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                Together, we&apos;ll explore what&apos;s been weighing on you
                and develop healthier, more sustainable ways of coping and
                living, with a focus on safety, regulation, and long-term
                growth.
              </p>
              <div className="mt-10">
                <OutlineButton label="LET'S CHAT" href="#contact-form" />
              </div>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-6 order-1 lg:order-2">
              <div className="relative mx-auto w-full max-w-[430px] lg:ml-[60px]">
                <div className="arch-mask">
                  <img
                    src="/assets/Dr.%20Maya%20Reynolds.png"
                    alt="Dr. Maya Reynolds"
                    className="aspect-[2/3] w-full object-cover"
                  />
                </div>
                <div className="circle-mask absolute hidden lg:block -bottom-[47px] -right-[150px] w-[min(200px,30vh)] md:w-[min(220px,32vh)] md:-bottom-[55px] md:-right-[158px]">
                  <img
                    src="/assets/small%20image.png"
                    alt="Small image"
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-primary)] py-20 md:py-24">
          <GridContainer className="items-start">
            <div className="col-span-4 md:col-span-8 lg:col-span-6 max-w-[620px] rounded-[28px] bg-[#F8F3EC] p-7 md:p-10">
              <h2 className="text-[53px] font-[500] not-italic leading-[58px] text-[var(--color-text)] max-md:text-[2.35rem] max-md:leading-[1.05]">
                A Calm Space for Healing
              </h2>
              <p className="mt-6 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                My Santa Monica therapy office is a quiet, private space
                designed to feel calm and grounding, with natural light and a
                comfortable, uncluttered environment.
              </p>
              <p className="mt-5 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                I offer both in-person therapy in Santa Monica and secure
                telehealth sessions for adults across California.
              </p>
              <ul className="mt-7 list-disc space-y-2 pl-5 text-[18px] font-[400] not-italic leading-8 text-[var(--color-text)] max-md:text-[1rem]">
                <li>A peaceful and confidential space for therapy</li>
                <li>
                  Convenient Santa Monica location with weekday appointments
                </li>
                <li>In-person and online session options</li>
              </ul>
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-6 grid gap-4 sm:grid-cols-2 md:gap-5">
              <div className="arch-mask sm:col-span-2">
                <img
                  src="/assets/office1.jpeg"
                  alt="Warm therapy office seating area"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[24px] border border-[var(--color-border)] bg-[var(--color-bg-alt)]">
                <img
                  src="/assets/office2.jpeg"
                  alt="Counseling office space"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="grid place-items-center rounded-[24px] border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-6 text-center">
                <p className="text-[16px] font-[400] not-italic leading-7 text-[var(--color-text)]">
                  Santa Monica, CA
                  <br />
                  In-person and virtual therapy
                </p>
              </div>
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-alt)] py-20 md:py-28">
          <GridContainer className="items-start">
            <div className="col-span-4 md:col-span-8 lg:col-span-5 arch-mask mx-auto w-full max-w-[460px] lg:mt-10">
              <img
                src="/assets/faqs%20image.png"
                alt="FAQs image"
                className="aspect-[2/3] w-full object-cover"
              />
            </div>

            <div className="col-span-4 md:col-span-8 lg:col-span-7 mt-3 max-w-[560px] md:mt-6 lg:pl-8">
              <h2 className="text-[46px] font-[500] not-italic leading-[52px] text-[var(--color-text)] max-md:text-[2rem] max-md:leading-[1.05]">
                FAQs
              </h2>
              <div className="mt-6">
                <AccordionList
                  items={faqItems}
                  iconPlacement="left"
                  itemTextClassName="text-[36px] font-[500] not-italic leading-normal text-[var(--color-text)] max-md:text-[1.15rem]"
                  rowPaddingClassName="py-4 md:py-6"
                />
              </div>
            </div>
          </GridContainer>
        </section>

        <section
          id="professional-background"
          className="bg-[var(--color-bg-primary)] py-20 md:py-24"
        >
          <GridContainer>
            <h3 className="col-span-4 md:col-span-8 lg:col-span-12 text-center text-[44px] font-[500] not-italic leading-[49px] text-[var(--color-text)] max-md:text-[2rem] max-md:leading-[1.1]">
              My Professional Background
            </h3>
            <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8 mt-8">
              <AccordionList
                items={backgroundItems}
                iconPlacement="right"
                itemTextClassName="text-[25px] font-[400] not-italic leading-normal text-[var(--color-text)] max-md:text-[1.25rem]"
              />
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-alt)] py-20 md:py-28">
          <GridContainer>
            <div className="col-span-4 md:col-span-8 lg:col-start-3 lg:col-span-8 text-center text-[var(--color-text)]">
              <h3 className="text-[44px] font-[500] not-italic leading-[49px] text-[var(--color-text)] max-md:text-[2.15rem] max-md:leading-[1.05]">
                Get started today.
              </h3>
              <p className="mx-auto mt-6 max-w-[760px] text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.08rem] max-md:leading-8">
                If you&apos;re ready to feel calmer, more grounded, and
                emotionally supported, contact me to schedule your first therapy
                session.
              </p>
              <div className="mt-10">
                <OutlineButton
                  label="GET IN TOUCH"
                  href="#contact-form"
                  inverted
                />
              </div>
            </div>
          </GridContainer>
        </section>
      </main>

      <footer>
        <section
          id="contact-form"
          className="bg-[var(--color-bg-primary)] py-16 md:py-20"
        >
          <GridContainer className="gap-y-10">
            <div className="col-span-4 md:col-span-4 lg:col-span-6">
              <h3 className="text-[44px] font-[500] not-italic leading-[49px] text-[var(--color-text)] max-md:text-[2rem] max-md:leading-[1.2]">
                Dr. Maya Reynolds, PsyD
              </h3>
              <p className="mt-5 text-[20px] font-[400] not-italic leading-[31px] text-[var(--color-text)] max-md:text-[1.06rem] max-md:leading-8">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
                <br />
                <br />
                <a
                  href="mailto:contact@mayareynoldspsychology.com"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  contact@mayareynoldspsychology.com
                </a>
                <br />
                <a
                  href="tel:+15555555555"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  (555) 555-5555
                </a>
              </p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-3">
              <h4 className="text-[34px] font-[500] not-italic leading-[40px] text-[rgb(34,54,20)]">
                Hours
              </h4>
              <p className="mt-4 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)]">
                <span className="block whitespace-nowrap">
                  Monday &ndash; Friday
                </span>
                <span className="block whitespace-nowrap">
                  10am &ndash; 6pm
                </span>
              </p>
            </div>

            <div className="col-span-4 md:col-span-2 lg:col-span-3 md:text-right">
              <h4 className="text-[34px] font-[500] not-italic leading-[40px] text-[rgb(34,54,20)]">
                Find
              </h4>
              <p className="mt-4 text-[20px] font-[400] not-italic leading-[31px] text-[rgb(34,54,20)]">
                <a
                  href="#top"
                  className="always-underline transition-colors duration-200"
                >
                  Home
                </a>
                <br />
                <a
                  href="#contact-form"
                  className="always-underline transition-colors duration-200"
                >
                  Contact
                </a>
                <br />
                <a
                  href="#professional-background"
                  className="always-underline transition-colors duration-200"
                >
                  Blog
                </a>
              </p>
            </div>
          </GridContainer>
        </section>

        <section className="bg-[var(--color-bg-alt)] py-[max(38px,3.1vmax)] h-[240px]">
          <GridContainer className="h-full">
            <div className="col-span-4 md:col-span-8 lg:col-span-12 grid h-full grid-rows-[auto_auto_1fr_auto] pt-3 text-center md:pt-5">
              <p className="text-[16px] font-[400] not-italic leading-[26px] text-[var(--color-text)] max-md:text-[0.9rem] max-md:leading-8">
                <a
                  href="/privacy-policy"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  Privacy &amp; Cookies Policy
                </a>
                {"\u00A0\u00A0"}
                <a
                  href="/good-faith-estimate"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  Good Faith Estimate
                </a>
                {"\u00A0\u00A0"}
                <a
                  href="/terms-conditions"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  Website Terms &amp; Conditions
                </a>
                {"\u00A0\u00A0"}
                <a
                  href="/disclaimer"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  Disclaimer
                </a>
              </p>
              <p className="mt-3 text-[16px] font-[400] not-italic leading-[26px] text-[var(--color-text)] max-md:text-[0.9rem] max-md:leading-8">
                Website Template Credits:{" "}
                <a
                  href="https://www.gobloomcreative.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="always-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  Go Bloom Creative
                </a>
              </p>
              <p className="pt-4 text-[16px] font-[400] not-italic leading-[26px] text-[var(--color-text)] max-md:text-[0.9rem] max-md:leading-8">
                All Rights Reserved &copy; 2024 Dr. Maya Reynolds Psychology,
                LLC
              </p>
            </div>
          </GridContainer>
        </section>
      </footer>
    </div>
  );
}
