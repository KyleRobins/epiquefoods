import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, HeartHandshake, Leaf, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Epique Foods is a Kenyan agro-processing company creating wholesome, organic and nutritious foods that nourish families and support healthy lifestyles.",
};

const VALUES = [
  { icon: Sparkles, title: "Quality" },
  { icon: Leaf, title: "Health & Nutrition" },
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Target, title: "Sustainability" },
  { icon: HeartHandshake, title: "Innovation" },
  { icon: Users, title: "Community & Shared Value" },
];

interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

const TEAM: TeamMember[] = [
  { name: "Lilian Bitok", role: "Founder & CEO", image: "/images/about/founder.jpg" },
  {
    name: "CPA Anthony Kiplimo",
    role: "Board Director — Finance & Governance",
    image: "/images/about/anthony-kiplimo.jpg",
  },
  {
    name: "Dr. Susan Atieno",
    role: "Board Director — Nutrition, Research & Innovation",
    image: "/images/about/susan-atieno.jpg",
  },
  {
    name: "Noel Kipkoech",
    role: "Finance & Administration",
    image: "/images/about/noel-kipkoech.jpg",
  },
  { name: "Lydia Wanjiku", role: "Food Scientist", image: "/images/about/lydia-wanjiku.jpg" },
  { name: "Mercy Ngarama", role: "Sales & Marketing", image: "/images/about/mercy-ngarama.jpg" },
  {
    name: "Kelvin Kipchumba",
    role: "Production Officer",
    image: "/images/about/kelvin-kipchumba.jpg",
  },
];

function initialsOf(name: string): string {
  return name
    .replace(/^(CPA|Dr\.)\s+/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <div>
      <section className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:py-24">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
              — Our journey
            </p>
            <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">
              Rooted in Kenya, <span className="text-forest italic">driven by care</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Epique Foods Limited is a Kenyan agro-processing and value-addition company focused
              on healthy, organic and nutritious foods — built to communicate trust, nourishment,
              natural goodness and modern convenience in every pack.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-ink/10 bg-card px-8 py-10">
              <h2 className="font-display text-2xl text-ink">We&apos;re not just another food brand.</h2>
              <p className="mt-4 font-display text-lg text-burgundy italic">
                &ldquo;Healthy, Organic &amp; Nutritious&rdquo; isn&apos;t a tagline — it&apos;s what
                goes into every single pack.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/about/founder.jpg"
                alt="Lilian Bitok, Founder & CEO of Epique Foods"
                fill
                sizes="(min-width: 1024px) 40rem, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
              — Meet the founder
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink">Lilian Bitok</h2>
            <p className="text-sm font-medium text-muted-foreground">Founder &amp; CEO</p>
            <p className="mt-4 text-muted-foreground">
              Lilian Bitok is the Director and Founder of Epique Foods Limited, a Kenyan
              agro-processing and food value-addition company focused on healthy, organic and
              nutritious foods. She brings over nine years of experience in management, product
              development, marketing and distribution, and also serves as Director in charge of
              Agribusiness and Agro-processing at the Kenya National Chamber of Commerce and
              Industry (KNCCI), Uasin Gishu Chapter. Passionate about healthier food choices and
              African food value addition, Lilian is committed to creating products that nourish
              families while creating value for farmers and communities.
            </p>
            <Link
              href="https://www.linkedin.com/in/lillian-bittok-4a403733/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-fit items-center gap-2 text-sm font-medium text-forest hover:underline"
            >
              Connect on LinkedIn
              <ExternalLink className="size-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
            — Our vision &amp; mission
          </p>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <Reveal className="rounded-3xl border border-ink/10 bg-card p-8">
            <h2 className="font-display text-2xl text-ink">Our vision</h2>
            <p className="mt-3 text-muted-foreground">
              To create a healthier future where families have access to wholesome, nutritious
              and quality foods.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-ink/10 bg-card p-8">
            <h2 className="font-display text-2xl text-ink">Our mission</h2>
            <p className="mt-3 text-muted-foreground">
              To produce wholesome, organic and nutritious foods that nourish families, support
              healthy lifestyles, celebrate African food heritage and create value for farmers
              and communities.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
            — Leadership
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            The people behind <span className="text-forest italic">Epique</span>
          </h2>
        </Reveal>

        <StaggerGroup className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member) => (
            <StaggerItem key={member.name} className="flex flex-col items-center gap-3 text-center">
              {member.image ? (
                <div className="relative size-24 overflow-hidden rounded-full border border-ink/10">
                  <Image src={member.image} alt={member.name} fill sizes="96px" className="object-cover" />
                </div>
              ) : (
                <div className="flex size-24 items-center justify-center rounded-full border border-ink/10 bg-sand font-display text-xl text-forest">
                  {initialsOf(member.name)}
                </div>
              )}
              <div>
                <p className="font-display text-base text-ink">{member.name}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="text-center text-xs font-semibold tracking-[0.18em] text-cream/70 uppercase">
              — Our values
            </p>
            <h2 className="mt-2 text-center font-display text-3xl sm:text-4xl">What we stand for</h2>
          </Reveal>
          <StaggerGroup className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {VALUES.map((value) => (
              <StaggerItem key={value.title} className="flex flex-col items-center gap-3 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-cream/10">
                  <value.icon className="size-6" />
                </div>
                <p className="text-sm font-medium">{value.title}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.18em] text-burgundy uppercase">
            — From farm to pack
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Made by hand, checked with care.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:aspect-auto">
            <Image
              src="/images/about/packaging.jpg"
              alt="Hand-packing Epique Foods products"
              fill
              sizes="(min-width: 640px) 50vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about/factory-visit.jpg"
              alt="Quality visit at the production site"
              fill
              sizes="(min-width: 640px) 25vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.16} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/about/india-trip.jpg"
              alt="Sourcing trip for quality ingredients"
              fill
              sizes="(min-width: 640px) 25vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-muted-foreground">
            Every Epique Foods product is portioned, sealed and quality-checked by hand — no
            additives, no preservatives, just honest nutrition made simple for everyday life.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
