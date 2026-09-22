import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  Crown,
  Diamond,
  Gem,
  Heart,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Users,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import heroImage from "@/assets/jewellery-hero.jpg";
import showroomImage from "@/assets/showroom.jpg";
import craftImage from "@/assets/craftsmanship.jpg";
import birthstonesImage from "@/assets/birthstones.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About Brand" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link to="/" className="brand" aria-label="Bohra's Jewellery home">
          <span className="brand-mark">B</span>
          <span><strong>Bohra’s Jewellery</strong><small>we create your imagination</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ className: "active" }}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Search"><Search /></button>
          <button className="icon-button" aria-label="Account"><Users /></button>
          <button className="icon-button bag-button" aria-label="Shopping bag"><ShoppingBag /><span>2</span></button>
          <button className="icon-button mobile-toggle" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>}
    </header>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span>{children}</span><i /></div>;
}

function GoldButton({ children, outline = false }: { children: ReactNode; outline?: boolean }) {
  return <button className={outline ? "gold-button outline" : "gold-button"}>{children}<ArrowRight /></button>;
}

const stats = [
  { icon: Crown, value: "50+", label: "Years of trust" },
  { icon: Users, value: "10,000+", label: "Happy customers" },
  { icon: ShieldCheck, value: "100%", label: "Certified gold" },
  { icon: Award, value: "BIS", label: "Hallmarked" },
];

function StatsBand({ dark = true }: { dark?: boolean }) {
  return <div className={dark ? "stats-band" : "stats-band light"}>{stats.map(({ icon: Icon, value, label }) => <div className="stat" key={label}><Icon /><span><strong>{value}</strong><small>{label}</small></span></div>)}</div>;
}

const collections = [
  { name: "Necklaces", copy: "Timeless Beauty", crop: "50% 46%" },
  { name: "Earrings", copy: "Elegance in Every Detail", crop: "85% 64%" },
  { name: "Bangles", copy: "Tradition on Your Wrist", crop: "72% 38%" },
  { name: "Rings", copy: "Symbols of Eternal Love", crop: "75% 75%" },
];

function CollectionCard({ item }: { item: (typeof collections)[number] }) {
  return <Link to="/collections" className="collection-card">
    <img src={heroImage} alt={`${item.name} collection`} loading="lazy" width={1920} height={1088} style={{ objectPosition: item.crop }} />
    <div><Gem /><h3>{item.name}</h3><p>{item.copy}</p><span><ArrowRight /></span></div>
  </Link>;
}

export function HomePage() {
  return <>
    <section className="home-hero">
      <img src={heroImage} alt="Gold Kundan necklace and earrings on emerald velvet" width={1920} height={1088} />
      <div className="hero-shade" />
      <div className="site-shell hero-content">
        <Eyebrow>Masterpieces crafted for generations</Eyebrow>
        <h1>Timeless Gold,<br /><em>Modern Elegance</em></h1>
        <p>Experience the art of fine jewellery with our<br />22K hallmarked gold and exquisite craftsmanship.</p>
        <div className="hero-buttons"><GoldButton>Explore collections</GoldButton><GoldButton outline>Book appointment</GoldButton></div>
        <StatsBand />
      </div>
    </section>
    <main className="ivory-page">
      <section className="birthstone-banner site-shell">
        <img src={birthstonesImage} alt="Colourful birthstones with an antique zodiac wheel" loading="lazy" width={1920} height={704} />
        <div className="birthstone-copy"><h2>Astrology Also Guides Through <em>Birthstones</em></h2><p>Discover the gemstone that aligns with your stars.</p><div className="consult"><Store /><strong>Birthstone Consultation Available<br />at Our Showroom Only</strong></div></div>
        <div className="birthstone-benefits"><span><Star />Personalized<br />Guidance</span><span><Sparkles />Traditional<br />Vedic Insights</span><span><Diamond />Expert<br />Assistance</span></div>
      </section>
      <section className="site-shell collection-row">{collections.map((item) => <CollectionCard key={item.name} item={item} />)}</section>
    </main>
  </>;
}

export function AboutPage() {
  return <>
    <section className="about-hero split-hero">
      <img src={heroImage} alt="Heritage emerald Kundan jewellery" width={1920} height={1088} />
      <div className="site-shell hero-content">
        <Eyebrow>Our story</Eyebrow><h1>About Bohra’s<br /><em>Jewellery</em></h1><h2>50 Years of Heritage & Excellence</h2>
        <p>For over five decades, Bohra’s Jewellery has been a symbol of trust, purity and unmatched craftsmanship. Our journey began in 1974 with a simple belief — jewellery is not just an ornament, it’s an emotion that lasts forever.</p>
        <GoldButton>Know more about us</GoldButton>
      </div>
      <div className="heritage-note">Crafted<br />With Heritage<br />For Generations</div>
      <div className="since-badge">Since<br /><strong>1974</strong></div>
    </section>
    <main className="ivory-page">
      <section className="site-shell story-grid">
        <div className="story-copy"><Eyebrow>Our journey</Eyebrow><h2>Our Heritage & Passion</h2><p>Founded in 1974, we blend traditional Kundan artistry with modern elegance. Our master craftsmen use only 22K hallmarked gold and premium gemstones, ensuring every piece is a masterpiece of heritage and quality.</p><p>From bridal heirlooms to contemporary designs, each jewellery piece tells a story of craftsmanship, dedication, and timeless beauty. We believe in sustainable practices and ethical sourcing of materials.</p><GoldButton outline>Our legacy</GoldButton></div>
        <div className="craft-collage"><img src={craftImage} alt="Master craftsman creating Kundan jewellery" loading="lazy" width={1408} height={1008} /><div className="round-monogram">B</div></div>
        <div className="values-list">
          <Value icon={<Diamond />} title="Timeless craftsmanship">Crafted by skilled artisans with generations of expertise.</Value>
          <Value icon={<ShieldCheck />} title="22K hallmarked gold">We use only certified 22K hallmarked gold for purity you can trust.</Value>
          <Value icon={<Gem />} title="Premium gemstones">Handpicked gemstones that add brilliance to every creation.</Value>
          <Value icon={<Heart />} title="Trust & transparency">Honesty, purity and customer satisfaction are at the heart of everything.</Value>
        </div>
      </section>
      <StatsBand />
    </main>
  </>;
}

function Value({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <div className="value"><span>{icon}</span><div><strong>{title}</strong><p>{children}</p></div></div>;
}

const productNames = ["Royal Nizam Polki Necklace", "Traditional Kundan Kada", "Diamond Solitaire Ring", "Bridal Heirloom Set", "Polki Necklace Set", "Contemporary Gold Chain", "Polki Earring Drops", "Ruby Kundan Bangles"];
const prices = ["₹4,65,000", "₹2,32,000", "₹2,80,000", "₹8,65,000", "₹5,25,000", "₹72,000", "₹18,000", "₹2,95,000"];
const occasionCopy = ["For Your Special Day", "Celebrate in Style", "Elegance for Everyday", "For Your Loved Ones"] as const;

function ProductCard({ name, index }: { name: string; index: number }) {
  const [liked, setLiked] = useState(false);
  const positions = ["67% 48%", "74% 52%", "76% 73%", "88% 65%", "65% 51%", "48% 48%", "86% 67%", "77% 51%"];
  return <article className="product-card"><div className="product-image"><img src={heroImage} alt={name} loading="lazy" width={1920} height={1088} style={{ objectPosition: positions[index] }} /><span className="purity">✦ 22K</span><button aria-label={`Add ${name} to wishlist`} onClick={() => setLiked(!liked)}><Heart fill={liked ? "currentColor" : "none"} /></button></div><h3>{name}</h3><div className="price-row"><strong>{prices[index]}</strong><small>{["41.6 g", "19.8 g", "5.2 g", "92.5 g", "73.2 g", "8.6 g", "12.3 g", "68.7 g"][index]}</small></div><div className="product-actions"><button>Quick view</button><button aria-label="Add to bag"><ShoppingBag /></button></div></article>;
}

export function CollectionsPage() {
  const [sort, setSort] = useState("Newest First");
  return <main className="ivory-page collections-page">
    <section className="collections-hero"><img src={heroImage} alt="Gold jewellery collection on emerald velvet" width={1920} height={1088} /><div className="site-shell hero-content"><Eyebrow>A world of timeless beauty</Eyebrow><h1>Our <em>Collections</em></h1><p>Explore our curated range of 22K hallmarked gold heritage jewellery,<br />Kundan bridal sets, and solitaire masterpieces.</p></div></section>
    <section className="site-shell shop-collections"><div className="section-kicker">Shop by collection</div><div className="shop-category-row">{["Bridal", "Temple", "Diamond", "Antique", "Daily Wear"].map((name, i) => <div className="shop-category" key={name}><img src={heroImage} alt={name} loading="lazy" width={1920} height={1088} style={{ objectPosition: `${55 + i * 8}% ${42 + i * 7}%` }} /><div><h3>{name}</h3><p>{["Timeless Bridal Sets", "Traditional Temple Jewellery", "Modern Diamond Elegance", "Vintage Masterpieces", "Elegant Everyday Designs"][i]}</p></div><ArrowRight /></div>)}</div></section>
    <section className="site-shell products-layout">
      <aside className="filters"><h2>Filters <Menu /></h2><FilterGroup title="Category" items={["All", "Necklaces", "Earrings", "Bangles", "Rings", "Chains", "Sets"]} /><div className="filter-group"><strong>Price range</strong><input type="range" min="10000" max="500000" defaultValue="180000" /><div className="range-labels"><span>₹10,000</span><span>₹5,00,000</span></div></div><FilterGroup title="Gold purity" items={["All", "22K Gold", "18K Gold"]} square /><FilterGroup title="Occasion" items={["All", "Wedding", "Festival", "Party", "Everyday", "Gift"]} square /><button className="reset-button">Reset filters</button></aside>
      <div className="products-main"><div className="product-toolbar"><span>Showing 1–12 of 48 results</span><label>Sort by: <select value={sort} onChange={(e) => setSort(e.target.value)}><option>Newest First</option><option>Price: Low to High</option><option>Price: High to Low</option></select></label></div><div className="product-grid">{productNames.map((name, index) => <ProductCard key={name} name={name} index={index} />)}</div><div className="promise-strip"><Value icon={<Gem />} title="Handcrafted">By skilled artisans</Value><Value icon={<ShieldCheck />} title="100% Hallmarked">22K BIS Certified Gold</Value><Value icon={<ShoppingBag />} title="Free insured shipping">Safe & secure delivery</Value><Value icon={<Heart />} title="Lifetime exchange">Buy with confidence</Value></div></div>
    </section>
    <section className="site-shell occasions"><h2>Shop by Occasion</h2><div className="occasion-row">{occasionCopy.map((copy, i) => <CollectionCard key={copy} item={{ name: ["Wedding", "Festive", "Daily Wear", "Gifts"][i] ?? "Occasion", copy, crop: `${60 + i * 8}% ${46 + i * 8}%` }} />)}</div><div className="pagination"><button className="active">1</button><button>2</button><button>3</button><button>4</button><span>…</span><button><ArrowRight /></button></div></section>
  </main>;
}

function FilterGroup({ title, items, square = false }: { title: string; items: string[]; square?: boolean }) {
  const [selected, setSelected] = useState("All");
  return <div className="filter-group"><strong>{title}<ChevronDown /></strong>{items.map((item) => <label key={item}><input type={square ? "checkbox" : "radio"} name={title} checked={selected === item} onChange={() => setSelected(item)} /><span>{selected === item && <Check />}</span>{item}</label>)}</div>;
}

export function ContactPage() {
  return <main className="ivory-page contact-page">
    <section className="contact-hero"><img src={showroomImage} alt="Bohra's Jewellery luxury showroom" width={1920} height={864} /><div className="contact-shade" /><div className="site-shell hero-content"><Eyebrow>We’d love to welcome you</Eyebrow><h1>Visit Our <em>Royal Showroom</em></h1><p>Experience our exclusive collection of handcrafted gold jewellery.<br />Discover elegance, trust and tradition at Bohra’s Jewellery.</p><GoldButton><CalendarDays />Book your private appointment</GoldButton></div></section>
    <section className="site-shell concierge-grid"><div className="map-card"><div className="map-lines" /><div className="map-pin"><MapPin /></div><div className="map-label"><strong><MapPin /> Bohra’s Jewellery</strong><p>123, MG Road, Bengaluru,<br />Karnataka 560001, India</p><a href="https://maps.google.com" target="_blank" rel="noreferrer">View on Google Maps <ArrowRight /></a></div><span className="road road-one">MG ROAD</span><span className="road road-two">RESIDENCY ROAD</span></div><div className="concierge-card"><Eyebrow>Bohra’s Jewellery</Eyebrow><h2>Boutique Concierge</h2><ContactLine icon={<MapPin />} label="Our showroom address">123, MG Road, Bengaluru,<br />Karnataka 560001, India</ContactLine><ContactLine icon={<Phone />} label="Phone number">+91 98765 43210</ContactLine><ContactLine icon={<Mail />} label="Email address">hello@bohrasjewellers.com</ContactLine><ContactLine icon={<CalendarDays />} label="Store timings">Monday – Sunday | 10:00 AM – 8:00 PM</ContactLine><ContactLine icon={<Star />} label="Exclusive services">Private Appointments | Custom Designs<br />Bespoke Jewellery | Lifetime Maintenance</ContactLine><GoldButton>Book private appointment</GoldButton></div></section>
    <section className="site-shell contact-trust"><StatsBand dark={false} /><blockquote>More Than Jewellery<br /><em>A Legacy of Trust</em></blockquote></section>
  </main>;
}

function ContactLine({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return <div className="contact-line"><span>{icon}</span><div><strong>{label}</strong><p>{children}</p></div></div>;
}