import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Diamond,
  Gem,
  Globe,
  Heart,
  Mail,
  MapPin,
  Menu,
  Navigation,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Users,
  X,
  Eye,
  Filter,
  Layers,
} from "lucide-react";
import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import heroPoster from "@/assets/bohras_hero_poster.jpg";
import heroPosterMobile from "@/assets/bohras_hero_poster_mobile.jpg";
import bohrasShowroomCollage from "@/assets/bohras_showroom_collage.png";
import ornateGreenAndGoldJewelleryShopCollage from "@/assets/Ornate_Green_and_Gold_Jewellery_Shop_Collage.png";
import ornateGoldFramedJewelleryCollage from "@/assets/Ornate_Gold-Framed_Jewellery_Collage.png";
import bohrasContactHeroStorefront from "@/assets/bohras_contact_hero_storefront.png";
import bohrasContactStorefrontShowcase from "@/assets/bohras_contact_storefront_showcase.png";
import bohrasShopfrontAndDisplay from "@/assets/bohras_shopfront_and_display.png";
import bohrasStorefrontBanner from "@/assets/bohras_storefront_banner.png";
import craftImage from "@/assets/craftsmanship.jpg";
import birthstonesImage from "@/assets/birthstones.jpg";
import pledgedGoldImage from "@/assets/pledged_gold.jpg";
import weddingMatchmakingImage from "@/assets/wedding_matchmaking.jpg";
import necklacesImage from "@/assets/necklaces.jpg";
import bohrasCollectionsHeroBackground from "@/assets/bohras_collections_real_photo_hero_background.jpg";
import earringsImage from "@/assets/earrings.jpg";
import banglesImage from "@/assets/bangles.jpg";
import ringsImage from "@/assets/rings.jpg";
import weddingOccasionImage from "@/assets/wedding_occasion.jpg";
import festiveOccasionImage from "@/assets/festive_occasion.jpg";
import dailywearOccasionImage from "@/assets/dailywear_occasion.jpg";
import giftsOccasionImage from "@/assets/gifts_occasion.jpg";
import silverJewelleryImage from "@/assets/silver_jewellery.jpg";
import goldChainImage from "@/assets/gold_chain.jpg";
import templeEarringsImage from "@/assets/temple_earrings.jpg";
import officialLogoMark from "@/assets/official_logo_mark_transparent.png";

export const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Bohras+Jewellery+No+373+Opposite+Sbm+Colony+Bus+Stop+80ft+Road+Srinivasanagar+Banashankari+1st+Stage+Bangalore+560050+Karnataka";
export const GOOGLE_MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=Bohras+Jewellery+No+373+Opposite+Sbm+Colony+Bus+Stop+80ft+Road+Srinivasanagar+Banashankari+1st+Stage+Bangalore+560050+Karnataka";

export type Language = "en" | "kn";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    collections: "Collections",
    about: "About Brand",
    contact: "Contact Page",
    storeLocation: "Store Location",
    heroEyebrow: "Heritage 22K Gold",
    heroTitle1: "Timeless Gold,",
    heroTitle2: "Modern Elegance",
    heroDesc: "Handcrafted 22K gold artistry since 2008 • 18+ Years of Service.",
    exploreCollections: "Explore collections",
    bookAppointment: "Book appointment",
    showDirections: "Show directions",
    goldCertifiedTag: "100% BIS Hallmarked Certified",
    since2008Tag: "18+ Years of Trust • Est. 2008",
    yearsTrust: "18+ Years of Service",
    happyCustomers: "500+ Happy Customers",
    certifiedGold: "Certified gold",
    hallmarked: "Hallmarked",
    ourCollections: "Our Collections",
    shopByCollection: "Shop by Collection",
    filters: "Filters",
    category: "Category",
    jewelleryType: "Jewellery Type",
    goldPurity: "Gold Purity",
    occasion: "Occasion",
    quickView: "Quick view",
    bookShowroomAppointment: "Book Showroom Appointment",
    navHeader: "Navigation",
    ourCategories: "Our Categories",
    visitShowroom: "Visit Our Showroom",
    resetFilters: "Reset all filters",
    rightsReserved: "All rights reserved.",
    fineJewelleryTag: "Handcrafted Fine Heritage Jewellery • 100% BIS Certified • Est. 2008",
    tagline: "we create your imagination",
    openMapLocation: "Open Store Location on Maps",

    // Services Banner
    birthstoneTag: "Vedic Birthstone Consultation",
    birthstoneTitle1: "Astrology Guides Through",
    birthstoneTitle2: "Birthstones",
    birthstoneDesc: "Discover the certified gemstone that aligns with your stars.",
    birthstoneBadge: "Consultation Available at Showroom",
    pledgedTag: "Gold Release & Takeover",
    pledgedTitle1: "We Release Your",
    pledgedTitle2: "Pledged Gold",
    pledgedDesc: "Instant takeover & release from banks/financiers at market rates.",
    pledgedBadge: "Instant Bank & Cash Settlement",
    marriageTag: "Vedic Marriage Matchmaking",
    marriageTitle1: "Marriage Horoscope &",
    marriageTitle2: "Kundali Matching",
    marriageDesc: "Vedic horoscope compatibility & matchmaking guidance for brides and grooms.",
    marriageBadge: "Horoscope & Kundali Consultation",

    // Collections
    NECKLACES: "NECKLACES",
    EARRINGS: "EARRINGS",
    BANGLES: "BANGLES",
    RINGS: "RINGS",
    copyNecklaces: "Timeless Beauty",
    copyEarrings: "Elegance in Every Detail",
    copyBangles: "Tradition on Your Wrist",
    copyRings: "Symbols of Eternal Love",

    // About Page
    aboutStoryEyebrow: "Our story",
    aboutTitle1: "About Bohra’s",
    aboutTitle2: "Jewellery",
    aboutSubtitle: "18+ Years of Trust & Excellence (Est. 2008)",
    aboutDesc: "Established in 2008 in Srinivasanagar, Banashankari 1st Stage, Bangalore, Bohra’s Jewellery has completed over 18 years of dedicated service, building an enduring legacy of purity, trust, and master craftsmanship for 500+ happy families.",
    journeyEyebrow: "Our journey & legacy",
    heritageTitle: "18+ Years of Heritage, Trust & Master Goldsmithing in Bangalore",
    heritageP1: "Established in 2008 in the culturally rich neighbourhood of Srinivasanagar, Banashankari 1st Stage, Bangalore (located on 80ft Road, opposite SBM Colony Bus Stop), Bohra’s Jewellery was founded with a singular commitment: to serve the community with uncompromising integrity, 100% certified BIS hallmarked gold purity, and deeply personal family showroom service. Over the past 18+ years, our showroom has grown into a cherished destination for Bangalore families seeking authentic handcrafted gold, bespoke bridal jewellery, and trusted astrological gemstone guidance.",
    heritageP2: "Every ornament created at Bohra’s is shaped by ancestral master goldsmiths whose artistry honors the finest traditions of South Indian jewellery crafting. From intricate antique Temple jewellery and sacred Nakshi relief work to royal Kundan-Polki bridal sets and lightweight daily-wear 22K gold essentials, each design balances classical heritage with refined contemporary silhouettes.",
    heritageP3: "Purity is the unnegotiable cornerstone of our Banashankari boutique. We work exclusively with certified 100% BIS hallmarked 22K gold and 92.5 sterling silver, ensuring that every milligram adheres to strict government standards. With digital karat analysis, transparent weighment, and honest daily market rate calculations, our patrons always experience complete peace of mind.",
    heritageP4: "Beyond adornment, Bohra’s Jewellery commemorates life's most precious milestones. Whether curating complete wedding trousseaus for brides across South Bangalore, providing Vedic astrological consultations for natural birthstones, or offering transparent gold takeovers and evaluations from financiers, we treat every patron as an honored member of the Bohra family.",
    heritageP5: "Having completed over 18 years of uninterrupted service with 500+ happy families in Bangalore, we remain devoted to the values that established us in Srinivasanagar: pure gold, fair pricing, master craftsmanship, and relationships that flourish across generations.",
    heritageStat1Num: "18+",
    heritageStat1Label: "Years of Trust (Est. 2008)",
    heritageStat2Num: "500+",
    heritageStat2Label: "Happy Showroom Families",
    heritageStat3Num: "100%",
    heritageStat3Label: "BIS Hallmarked Purity",
    heritageStat4Num: "22K & 92.5",
    heritageStat4Label: "Certified Gold & Silver",
    pillarsEyebrow: "UNMATCHED TRUST & ARTISTRY",
    pillarsTitle: "The Pillars of Bohra’s Jewellery",
    pillarsSubtitle: "Every piece of jewellery carrying the Bohra signature is backed by 18+ years of uncompromised purity, master goldsmithing, and customer-first integrity.",
    pillar1Title: "Timeless Craftsmanship",
    pillar1Desc: "Handcrafted by master artisans using time-honored Kundan, Polki, and filigree techniques passed down through generations.",
    pillar2Title: "22K BIS Hallmarked Gold",
    pillar2Desc: "Every gram of gold is certified for guaranteed purity with official BIS hallmarking & laser engraving for complete peace of mind.",
    pillar3Title: "Handpicked Precious Gems",
    pillar3Desc: "Rare emeralds, natural rubies, South Sea pearls, and uncut diamonds hand-selected for extraordinary brilliance and clarity.",
    pillar4Title: "Trust & Complete Transparency",
    pillar4Desc: "Honesty, pure metal weighment, zero hidden charges, and honest daily gold market rates serving 500+ happy customers.",

    // Footer & Miscellaneous
    footerTagline: "Crafting fine 22K gold & hallmarked jewellery with passion and trust since 2008. Proudly serving 500+ happy customers.",
    bisHallmarkedBadge: "100% BIS Hallmarked Gold",
    footerNavigation: "Navigation",
    footerCategories: "Our Categories",
    footerVisitShowroom: "Visit Our Showroom",
    catNecklaces: "Necklaces & Chokers",
    catEarrings: "Earrings & Jhumkas",
    catBangles: "Bangles & Kadas",
    catRings: "Solitaire Rings",
    catChains: "Antique Chains",

    // Collections Page
    collectionsEyebrow: "A world of timeless beauty",
    collectionsTitle1: "Our",
    collectionsTitle2: "Collections",
    collectionsDesc: "Explore our curated range of 22K hallmarked gold heritage jewellery, Kundan bridal sets, and solitaire masterpieces.",
    shopByCollectionKicker: "Shop by collection",
    bridalTitle: "Bridal",
    bridalCopy: "Timeless Bridal Sets",
    templeTitle: "Temple",
    templeCopy: "Traditional Temple Jewellery",
    diamondTitle: "Diamond",
    diamondCopy: "Modern Diamond Elegance",
    antiqueTitle: "Antique",
    antiqueCopy: "Vintage Masterpieces",
    dailyWearTitle: "Daily Wear",
    dailyWearCopy: "Elegant Everyday Designs",

    // Stack Cards Discovery
    stackSectionEyebrow: "THE BOHRA'S PRIVATE SHOWROOM",
    stackSectionTitle: "Handpicked Masterpieces, Suite by Suite",
    stackSectionDesc: "Browse our hallmarked creations spread across the showroom. Click any card to reveal its curated pieces in the showcase below.",
    deckSuiteLabel: "SUITE",
    deckOfLabel: "OF",
    deckDrawNext: "Next Suite ↷",
    deckDrawPrev: "↶ Previous",
    deckRevealBtn: "Select →",
    deckViewingBtn: "Selected ✓",
    deckDesignsLabel: "Designs",
    deckInSuiteLabel: "Creations in Suite",
    deckHint: "✦ Hand-dealt suite cards · Click any card in the pile to draw it forward, or tap Reveal Collection to inspect matching creations.",
    stackCardRingsTitle: "Rings & Solitaires",
    stackCardRingsTag: "18K & 22K Gold • Solitaires",
    stackCardRingsDesc: "Diamond solitaires, 22K gold bands & cocktail rings.",
    stackCardSilverTitle: "Silver Jewellery & Articles",
    stackCardSilverTag: "Pure Silver • Antique Coated",
    stackCardSilverDesc: "Authentic temple silver bangles, silver coated heritage chokers & silverware.",
    stackCardNecklacesTitle: "Royal Gold Necklaces",
    stackCardNecklacesTag: "22K BIS Hallmarked • Polki & Kundan",
    stackCardNecklacesDesc: "Royal heirloom chokers, temple gold sets & regal Polki masterpieces.",
    stackCardBanglesTitle: "22K Bangles & Kadas",
    stackCardBanglesTag: "Traditional 22K Floral & Filigree",
    stackCardBanglesDesc: "Intricate Kundan kadas, antique temple wristwear & daily bangles.",
    stackCardChainsTitle: "Gold Chains & Daily Wear",
    stackCardChainsTag: "22K Solid Gold • Minimalist & Temple",
    stackCardChainsDesc: "Traditional temple chains, lightweight daily chains & modern pendants.",
    stackCardEarringsTitle: "Earrings & Jhumkas",
    stackCardEarringsTag: "22K Gold Drops • Temple Filigree",
    stackCardEarringsDesc: "Vintage antique jhumkas, pearl drop chandeliers & delicate studs.",
    stackSelectedRowTitle: "Bohra's Signature Suite",
    stackItemsFound: "Handcrafted Boutique Masterpieces",
    stackViewAllCatalog: "Boutique Showcase",
    stackClearSelection: "Close Suite",
    stackQuickViewBtn: "Quick View",
    stackEnquireBtn: "WhatsApp Concierge",
    selectedTag: "Selected",
    viewingRowLabel: "Viewing Below ↓",
    chooseLabel: "Choose Card →",
    exploreAllBtn: "Or Browse Complete 24-Piece Collection",
    stackCardAllTitle: "All Jewellery Collections",
    stackCardAllTag: "22K Gold & Silver • All Pieces",
    stackCardAllDesc: "Explore our entire master collection of 24 BIS hallmarked jewellery pieces.",
    occasionTempleWearTitle: "Temple Wear",
    occasionTempleWearDesc: "Sacred Temple Jewellery & Traditional Festive Sets",
    occasionDailyWearTitle: "Daily Wear",
    occasionDailyWearDesc: "Lightweight Gold & Everyday Minimalist Elegance",
    occasionBridalWearTitle: "Bridal & Wedding",
    occasionBridalWearDesc: "Royal Heirloom Jewellery for Unforgettable Weddings",
    occasionGiftsTitle: "Gifts & Celebrations",
    occasionGiftsDesc: "Thoughtful Hallmarked Treasures for Milestone Moments",

    showingResults: "Showing",
    ofResults: "of",
    resultsLabel: "results",
    sortByLabel: "Sort by:",
    sortFeatured: "Featured Masterpieces",
    sortHeavyToLight: "Weight: Heavy to Light",
    sortLightToHeavy: "Weight: Light to Heavy",

    noMatchingItems: "No items match your selected filters",
    tryClearingFilters: "Try clearing filters to see more jewellery collections.",
    resetFiltersBtn: "Reset filters",

    handcraftedTitle: "Handcrafted",
    handcraftedSub: "By skilled artisans",
    hallmarkedTitle: "100% Hallmarked",
    hallmarkedSub: "22K BIS Certified Gold",
    freeShippingTitle: "Free insured shipping",
    freeShippingSub: "Safe & secure delivery",
    lifetimeExchangeTitle: "Lifetime exchange",
    lifetimeExchangeSub: "Buy with confidence",
    shopByOccasion: "Shop by Occasion",

    // Filters
    filterAll: "All",
    filterNecklaces: "Necklaces",
    filterEarrings: "Earrings",
    filterBangles: "Bangles",
    filterRings: "Rings",
    filterChains: "Chains",

    filterSilver: "Silver",
    filterGold: "Gold",
    filterTempleType: "Temple",
    filterAntiqueType: "Antique Jewellery",
    filterSilverCoated: "Silver Coated",
    filterGoldChains: "Gold Chains",
    filterKundan: "Kundan",
    filterPolki: "Polki",

    filter22K: "22K Gold",
    filter18K: "18K Gold",

    filterWedding: "Wedding",
    filterFestival: "Festival",
    filterParty: "Party",
    filterEveryday: "Everyday",
    filterGift: "Gift",

    // Contact Page / Showroom
    welcomeEyebrow: "We’d love to welcome you",
    contactTitle1: "Visit Our",
    contactTitle2: "Contact Page",
    contactDesc: "Experience our exclusive collection of handcrafted gold jewellery. Discover elegance, trust and tradition at Bohra’s Jewellery.",
    showShopDirections: "Show directions of the shop",
    openGoogleMaps: "Open in Google Maps",
    directoryEyebrow: "STORE & SHOWROOM DIRECTORY",
    addressLandmark: "Address & Landmark",
    storeHours: "Store Hours",
    directHelpline: "Direct Helpline",
    emailConcierge: "Email Concierge",
    legacyQuote1: "More Than Jewellery",
    legacyQuote2: "A Legacy of Trust",
  },
  kn: {
    home: "ಮುಖಪುಟ",
    collections: "ಆಭರಣ ಸಂಗ್ರಹಣೆ",
    about: "ನಮ್ಮ ಬ್ರ್ಯಾಂಡ್",
    contact: "ಸಂಪರ್ಕ ಪುಟ",
    storeLocation: "ಷೋರೂಂ ವಿಳಾಸ",
    heroEyebrow: "ಪಾರಂಪರಿಕ 22K ಚಿನ್ನ",
    heroTitle1: "ಶಾಶ್ವತ ಚಿನ್ನ,",
    heroTitle2: "ಆಧುನಿಕ ಸೌಂದರ್ಯ",
    heroDesc: "2008 ರಿಂದ ಕರಕುಶಲ ಚಿನ್ನದ ಆಭರಣಗಳ ಸೇವೆ • 18+ ವರ್ಷಗಳ ನಂಬಿಕೆ.",
    exploreCollections: "ಆಭರಣ ವೀಕ್ಷಿಸಿ",
    bookAppointment: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
    showDirections: "ವಿಳಾಸದ ಮಾರ್ಗ ತೋರಿಸಿ",
    goldCertifiedTag: "100% BIS ಹಾಲ್‌ಮಾರ್ಕ್ ಪ್ರಮಾಣೀಕೃತ",
    since2008Tag: "18+ ವರ್ಷಗಳ ನಂಬಿಕೆ • 2008 ರಿಂದ",
    yearsTrust: "18+ ವರ್ಷಗಳ ಸೇವೆ",
    happyCustomers: "500+ ಸಂತೃಪ್ತ ಗ್ರಾಹಕರು",
    certifiedGold: "ಪ್ರಮಾಣೀಕೃತ ಚಿನ್ನ",
    hallmarked: "ಹಾಲ್‌ಮಾರ್ಕ್ ಪ್ರಮಾಣೀಕೃತ",
    ourCollections: "ನಮ್ಮ ಆಭರಣ ಸಂಗ್ರಹಣೆಗಳು",
    shopByCollection: "ಸಂಗ್ರಹಣೆಯ ಪ್ರಕಾರ ಖರೀದಿಸಿ",
    filters: "ಶೋಧಕಗಳು",
    category: "ಆಭರಣ ವರ್ಗ",
    jewelleryType: "ಆಭರಣ ಮಾದರಿ",
    goldPurity: "ಚಿನ್ನದ ಪರಿಶುದ್ಧತೆ",
    occasion: "ಶುಭ ಸಂದರ್ಭ",
    quickView: "ಶೀಘ್ರ ವೀಕ್ಷಣೆ",
    bookShowroomAppointment: "ಷೋರೂಂ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ",
    navHeader: "ನೆಾವಿಗೇಷನ್",
    ourCategories: "ನಮ್ಮ ಆಭರಣ ವರ್ಗಗಳು",
    visitShowroom: "ನಮ್ಮ ಷೋರೂಂಗೆ ಭೇಟಿ ನೀಡಿ",
    resetFilters: "ಶೋಧಕಗಳನ್ನು ಮರುಹೊಂದಿಸಿ",
    rightsReserved: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    fineJewelleryTag: "ಕರಕುಶಲ ಪರಂಪರೆಯ ಆಭರಣಗಳು • 100% BIS ಪ್ರಮಾಣೀಕೃತ ಚಿನ್ನ • 2008 ರಿಂದ",
    tagline: "ನಿಮ್ಮ ಕಲ್ಪನೆಗೆ ಬಂಗಾರದ ರೂಪ ನೀಡುತ್ತೇವೆ",
    openMapLocation: "ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ಷೋರೂಂ ವಿಳಾಸ ನೋಡಿ",

    // Services Banner
    birthstoneTag: "ವೈದಿಕ ಜನ್ಮರತ್ನ ಸಮಾಲೋಚನೆ",
    birthstoneTitle1: "ಜ್ಯೋತಿಷ್ಯ ಮಾರ್ಗದರ್ಶನದ",
    birthstoneTitle2: "ಜನ್ಮರತ್ನಗಳು",
    birthstoneDesc: "ನಿಮ್ಮ ನಕ್ಷತ್ರಕ್ಕೆ ಸೂಕ್ತವಾದ ಪ್ರಮಾಣೀಕೃತ ಜನ್ಮರತ್ನವನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    birthstoneBadge: "ಷೋರೂಂನಲ್ಲಿ ಸಮಾಲೋಚನೆ ಲಭ್ಯವಿದೆ",
    pledgedTag: "ಅಡಮಾನ ಚಿನ್ನ ಬಿಡುಗಡೆ ಸೇವೆ",
    pledgedTitle1: "ನಿಮ್ಮ ಅಡಮಾನ",
    pledgedTitle2: "ಚಿನ್ನ ಬಿಡುಗಡೆ ಮಾಡುತ್ತೇವೆ",
    pledgedDesc: "ಬ್ಯಾಂಕ್/ಹಣಕಾಸು ಸಂಸ್ಥೆಗಳಿಂದ ತಕ್ಷಣದ ಚಿನ್ನ ಬಿಡುಗಡೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ದರದಲ್ಲಿ ಸ್ವೀಕಾರ.",
    pledgedBadge: "ತಕ್ಷಣ ಬ್ಯಾಂಕ್ ಮತ್ತು ನಗದು ಇತ್ಯರ್ಥ",
    marriageTag: "ವೈದಿಕ ವಿವಾಹ ಜಾತಕ ಸಮಾಲೋಚನೆ",
    marriageTitle1: "ವಿವಾಹ ಜಾತಕ ಮತ್ತು",
    marriageTitle2: "ಕುಂಡಲಿ ಮೈತ್ರಿ",
    marriageDesc: "ವಧು-ವರರ ಜಾತಕ ಹೊಂದಾಣಿಕೆ ಮತ್ತು ವಿವಾಹ ಮಾರ್ಗದರ್ಶನ ಸೇವೆ.",
    marriageBadge: "ಜಾತಕ ಮತ್ತು ಕುಂಡಲಿ ಸಮಾಲೋಚನೆ",

    // Collections
    NECKLACES: "ಹಾರಗಳು",
    EARRINGS: "ಓಲೆಗಳು",
    BANGLES: "ಬಳೆಗಳು",
    RINGS: "ಉಂಗುರಗಳು",
    copyNecklaces: "ಶಾಶ್ವತ ಸೌಂದರ್ಯ",
    copyEarrings: "ಪ್ರತಿಯೊಂದು ವಿನ್ಯಾಸದಲ್ಲೂ ಸೌಂದರ್ಯ",
    copyBangles: "ನಿಮ್ಮ ಕೈಗಳಲ್ಲಿ ಪಾರಂಪರಿಕ ಸೌಂದರ್ಯ",
    copyRings: "ಶಾಶ್ವತ ಪ್ರೀತಿಯ ಸಂಕೇತ",

    // About Page
    aboutStoryEyebrow: "ನಮ್ಮ ಕಥೆ",
    aboutTitle1: "ಬೋಹ್ರಾರವರ",
    aboutTitle2: "ಆಭರಣಗಳು",
    aboutSubtitle: "18+ ವರ್ಷಗಳ ನಂಬಿಕೆ ಮತ್ತು ಸೇವೆಯ ಪಯಣ (2008 ರಿಂದ)",
    aboutDesc: "2008 ರಲ್ಲಿ ಬೆಂಗಳೂರಿನ ಬನಶಂಕರಿ 1ನೇ ಹಂತದ ಶ್ರೀನಿವಾಸನಗರದಲ್ಲಿ ಸ್ಥಾಪಿತವಾದ ಬೋಹ್ರಾಸ್ ಜ್ಯುವೆಲ್ಲರಿ 18+ ವರ್ಷಗಳ ಸಮರ್ಪಕ ಸೇವೆಯನ್ನು ಪೂರೈಸಿದ್ದು, 500+ ಕ್ಕೂ ಹೆಚ್ಚು ಸಂತೃಪ್ತ ಕುಟುಂಬಗಳಿಗೆ ಶುದ್ಧತೆ, ನಂಬಿಕೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಸೇವೆಯನ್ನು ಒದಗಿಸಿದೆ.",
    journeyEyebrow: "ನಮ್ಮ ಪಯಣ ಮತ್ತು ಪರಂಪರೆ",
    heritageTitle: "18+ ವರ್ಷಗಳ ಪಾರಂಪರಿಕ ಸೇವೆ, ನಂಬಿಕೆ ಮತ್ತು ಕಲಾತ್ಮಕತೆ",
    heritageP1: "2008 ರಲ್ಲಿ ಬೆಂಗಳೂರಿನ ಸಾಂಸ್ಕೃತಿಕ ಕೇಂದ್ರವಾದ ಬನಶಂಕರಿ 1ನೇ ಹಂತದ ಶ್ರೀನಿವಾಸನಗರದಲ್ಲಿ (80 ಅಡಿ ರಸ್ತೆ, ಎಸ್‌ಬಿಎಂ ಕಾಲೋನಿ ಬಸ್ ನಿಲ್ದಾಣದ ಎದುರು) ಸ್ಥಾಪಿತವಾದ ಬೋಹ್ರಾಸ್ ಜ್ಯುವೆಲ್ಲರಿ, ಭಾರತೀಯ ಸುವರ್ಣ ಪರಂಪರೆಯನ್ನು ಪರಿಶುದ್ಧತೆ, ಪ್ರಾಮಾಣಿಕತೆ ಮತ್ತು ಆತ್ಮೀಯ ಸೇವೆಯೊಂದಿಗೆ ಮುನ್ನಡೆಸುವ ದೃಢ ಸಂಕಲ್ಪದಿಂದ ಆರಂಭವಾಯಿತು. ಕಳೆದ 18+ ವರ್ಷಗಳಲ್ಲಿ, ಇದು ಬೆಂಗಳೂರಿನ ನೂರಾರು ಕುಟುಂಬಗಳ ವಿಶ್ವಾಸಾರ್ಹ ಆಭರಣ ಮಂದಿರವಾಗಿ ಬೆಳೆದಿದೆ.",
    heritageP2: "ಬೋಹ್ರಾಸ್‌ನ ಪ್ರತಿಯೊಂದು ಆಭರಣವೂ ಪಾರಂಪರಿಕ ಕುಶಲಕರ್ಮಿಗಳ ನುರಿತ ಕೈಚಳಕದಿಂದ ರೂಪುಗೊಳ್ಳುತ್ತದೆ. ಪವಿತ್ರ ದೇವಸ್ಥಾನದ ನಕ್ಷಿ ಆಭರಣಗಳಿಂದ ಹಿಡಿದು, ರಾಜಮನೆತನದ ಕುಂದನ್-ಪೋಲ್ಕಿ ನೆಕ್ಲೇಸ್‌ಗಳು ಮತ್ತು ದೈನಂದಿನ 22K ಚಿನ್ನದ ಸರಗಳವರೆಗೆ, ಪ್ರತಿಯೊಂದು ಆಭರಣದಲ್ಲೂ ಅಪಾರ ಕಾಳಜಿ ಮತ್ತು ಕಲಾತ್ಮಕತೆ ಅಡಗಿದೆ.",
    heritageP3: "ಪರಿಶುದ್ಧತೆಯೇ ನಮ್ಮ ಬನಶಂಕರಿ ಆಭರಣ ಮಂದಿರದ ಅಡಿಪಾಯ. ನಾವು ಕೇವಲ ಅಧಿಕೃತ 100% BIS ಹಾಲ್‌ಮಾರ್ಕ್ ಪ್ರಮಾಣೀಕೃತ 22K ಚಿನ್ನ ಮತ್ತು 92.5 ಶುದ್ಧ ಬೆಳ್ಳಿಯನ್ನು ಮಾತ್ರ ಬಳಸುತ್ತೇವೆ. ನಿಖರ ತೂಕ, ಕಂಪ್ಯೂಟರೀಕೃತ ಪರಿಶೀಲನೆ ಮತ್ತು ಪಾರದರ್ಶಕ ಮಾರುಕಟ್ಟೆ ದರಗಳ ಮೂಲಕ ಗ್ರಾಹಕರಿಗೆ ಸಂಪೂರ್ಣ ನೆಮ್ಮದಿಯನ್ನು ನೀಡುತ್ತೇವೆ.",
    heritageP4: "ಆಭರಣ ಕೇವಲ ಅಲಂಕಾರವಲ್ಲ, ಅದು ಸಂಬಂಧಗಳ ಸಂಕೇತ. ಮದುವೆಯ ವಧುವಿನ ವಿಶೇಷ ಆಭರಣಗಳು, ವೈದಿಕ ಜ್ಯೋತಿಷ್ಯ ರತ್ನ ಸಲಹೆಗಳು, ಅಥವಾ ಹಣಕಾಸು ಸಂಸ್ಥೆಗಳಿಂದ ಆಭರಣಗಳ ಬಿಡುಗಡೆ ಪ್ರಕ್ರಿಯೆಯಾಗಲಿ, ನಾವು ಪ್ರತಿಯೊಬ್ಬ ಗ್ರಾಹಕರನ್ನು ನಮ್ಮ ಕುಟುಂಬದ ಸದಸ್ಯರಂತೆ ಕಾಣುತ್ತೇವೆ.",
    heritageP5: "ಬೆಂಗಳೂರಿನಾದ್ಯಂತ 500+ ಕ್ಕೂ ಹೆಚ್ಚು ತೃಪ್ತ ಕುಟುಂಬಗಳ ಪ್ರೀತಿ-ವಿಶ್ವಾಸವನ್ನು ಗಳಿಸಿ 18+ ವರ್ಷಗಳನ್ನು ಪೂರೈಸಿರುವ ನಾವು, ಶುದ್ಧತೆ, ನ್ಯಾಯಯುತ ಬೆಲೆ ಮತ್ತು ಪಾರಂಪರಿಕ ಕರಕುಶಲತೆಯೊಂದಿಗೆ ಮುಂದಿನ ತಲೆಮಾರುಗಳಿಗೂ ಈ ಸೇವೆಯನ್ನು ಮುಂದುವರಿಸಲು ಬದ್ಧರಾಗಿದ್ದೇವೆ.",
    heritageStat1Num: "18+",
    heritageStat1Label: "ವರ್ಷಗಳ ವಿಶ್ವಾಸ (2008 ರಿಂದ)",
    heritageStat2Num: "500+",
    heritageStat2Label: "ಸಂತೃಪ್ತ ಕುಟುಂಬಗಳು",
    heritageStat3Num: "100%",
    heritageStat3Label: "BIS ಹಾಲ್‌ಮಾರ್ಕ್ ಶುದ್ಧತೆ",
    heritageStat4Num: "22K & 92.5",
    heritageStat4Label: "ಪ್ರಮಾಣೀಕೃತ ಚಿನ್ನ & ಬೆಳ್ಳಿ",
    pillarsEyebrow: "ಸಾಟಿಯಿಲ್ಲದ ನಂಬಿಕೆ ಮತ್ತು ಕಲಾತ್ಮಕತೆ",
    pillarsTitle: "ಬೋಹ್ರಾಸ್ ಜ್ಯುವೆಲ್ಲರಿಯ ಮೂಲಸ್ತಂಭಗಳು",
    pillarsSubtitle: "ಬೋಹ್ರಾಸ್ ಮುದ್ರೆಯೊಂದಿಗೆ ಬರುವ ಪ್ರತಿಯೊಂದು ಆಭರಣವೂ 18+ ವರ್ಷಗಳ ಶುದ್ಧತೆ, ಕಲಾತ್ಮಕತೆ ಮತ್ತು ನಂಬಿಕೆಯನ್ನು ಆಧರಿಸಿದೆ.",
    pillar1Title: "ಶಾಶ್ವತ ಕರಕುಶಲತೆ",
    pillar1Desc: "ಪಾರಂಪರಿಕ ಕುಂದನ್, ಪೋಲ್ಕಿ ಮತ್ತು ಫಿಲಿಗ್ರೀ ಕಲಾತ್ಮಕತೆಯೊಂದಿಗೆ ನುರಿತ ಕುಶಲಕರ್ಮಿಗಳಿಂದ ತಯಾರಿಸಲ್ಪಟ್ಟಿದೆ.",
    pillar2Title: "22K BIS ಹಾಲ್‌ಮಾರ್ಕ್ ಚಿನ್ನ",
    pillar2Desc: "ಪ್ರತಿ ಗ್ರಾಂ ಚಿನ್ನವೂ ಅಧಿಕೃತ BIS ಹಾಲ್‌ಮಾರ್ಕಿಂಗ್‌ನೊಂದಿಗೆ ಖಾತರಿಪಡಿಸಿದ ಪರಿಶುದ್ಧತೆಯನ್ನು ಹೊಂದಿದೆ.",
    pillar3Title: "ಆಯ್ದ ಅಪರೂಪದ ರತ್ನಗಳು",
    pillar3Desc: "ಅಪರೂಪದ ಪಚ್ಚೆ, ನೈಸರ್ಗಿಕ ಕೆಂಪು ರತ್ನಗಳು ಮತ್ತು ಮುತ್ತುಗಳನ್ನು ಅತ್ಯುತ್ತಮ ಸೌಂದರ್ಯಕ್ಕಾಗಿ ಆಯ್ಕೆ ಮಾಡಲಾಗುತ್ತದೆ.",
    pillar4Title: "ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಂಬಿಕೆ",
    pillar4Desc: "ಪ್ರಾಮಾಣಿಕತೆ, ಶುದ್ಧ ತೂಕ, ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲದೆ ದೈನಂದಿನ ಮಾರುಕಟ್ಟೆ ದರದಲ್ಲಿ 500+ ಸಂತೃಪ್ತ ಗ್ರಾಹಕರಿಗೆ ಸೇವೆ.",

    // Footer & Miscellaneous
    footerTagline: "2008 ರಿಂದ 500+ ಕ್ಕೂ ಹೆಚ್ಚು ಸಂತೃಪ್ತ ಗ್ರಾಹಕರಿಗೆ 22K ಹಾಲ್‌ಮಾರ್ಕ್ ಚಿನ್ನದ ಆಭರಣಗಳ ಸೇವೆಯನ್ನು ನೀಡುತ್ತಿದ್ದೇವೆ.",
    bisHallmarkedBadge: "100% BIS ಹಾಲ್‌ಮಾರ್ಕ್ ಚಿನ್ನ",
    footerNavigation: "ನೆಾವಿಗೇಷನ್",
    footerCategories: "ನಮ್ಮ ಆಭರಣ ವರ್ಗಗಳು",
    footerVisitShowroom: "ನಮ್ಮ ಷೋರೂಂಗೆ ಭೇಟಿ ನೀಡಿ",
    catNecklaces: "ಹಾರಗಳು ಮತ್ತು ಚೋಕರ್‌ಗಳು",
    catEarrings: "ಓಲೆಗಳು ಮತ್ತು ಝುಮ್ಕಾಗಳು",
    catBangles: "ಬಳೆಗಳು ಮತ್ತು ಕಡಾಗಳು",
    catRings: "ಉಂಗುರಗಳು",
    catChains: "ಆಂಟಿಕ್ ಸರಪಳಿಗಳು",

    // Collections Page
    collectionsEyebrow: "ಶಾಶ್ವತ ಸೌಂದರ್ಯದ ಪ್ರಪಂಚ",
    collectionsTitle1: "ನಮ್ಮ",
    collectionsTitle2: "ಆಭರಣ ಸಂಗ್ರಹಣೆಗಳು",
    collectionsDesc: "22K ಹಾಲ್‌ಮಾರ್ಕ್ ಪಾರಂಪರಿಕ ಚಿನ್ನ, ಕುಂದನ್ ವಧುವಿನ ಆಭರಣಗಳು ಮತ್ತು ನವರತ್ನಗಳ ಸಂಗ್ರಹಣೆ.",
    shopByCollectionKicker: "ವಿಭಾಗಗಳ ಪ್ರಕಾರ ಖರೀದಿಸಿ",
    bridalTitle: "ವಧುವಿನ ಆಭರಣ",
    bridalCopy: "ಪಾರಂಪರಿಕ ವಧುವಿನ ಹಾರಗಳು",
    templeTitle: "ಟೆಂಪಲ್ ಆಭರಣ",
    templeCopy: "ಸಾಂಪ್ರದಾಯಿಕ ಟೆಂಪಲ್ ಡಿಸೈನ್ಸ್",
    diamondTitle: "ವಜ್ರದ ಆಭರಣ",
    diamondCopy: "ಆಧುನಿಕ ವಜ್ರದ ಸೌಂದರ್ಯ",
    antiqueTitle: "ಆಂಟಿಕ್ ಆಭರಣ",
    antiqueCopy: "ಪಾರಂಪರಿಕ ಕಲಾಕೃತಿಗಳು",
    dailyWearTitle: "ದೈನಂದಿನ ಬಳಕೆ",
    dailyWearCopy: "ದೈನಂದಿನ ಸುಂದರ ಸರಪಳಿಗಳು",

    // Stack Cards Discovery
    stackSectionEyebrow: "ಬೋಹ್ರಾರವರ ಖಾಸಗಿ ಆಭರಣ ಪ್ರದರ್ಶನ",
    stackSectionTitle: "ಆಯ್ದ ಆಭರಣ ಸಂಗ್ರಹ — ಕಾರ್ಡ್ ಡೆಕ್",
    stackSectionDesc: "ನಿಮಗೆ ಬೇಕಾದ ಆಭರಣ ಸಂಗ್ರಹದ ಕಾರ್ಡ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ — ಸೂಕ್ತ ಆಭರಣಗಳು ತಕ್ಷಣವೇ ಕೆಳಗೆ ಕಾಣಿಸುತ್ತವೆ.",
    deckSuiteLabel: "ಸಂಗ್ರಹ",
    deckOfLabel: "ರ ಪೈಕಿ",
    deckDrawNext: "ಮುಂದಿನ ಸಂಗ್ರಹ ↷",
    deckDrawPrev: "↶ ಹಿಂದಿನ",
    deckRevealBtn: "ಆರಿಸಿ →",
    deckViewingBtn: "ಆಯ್ಕೆಯಾಗಿದೆ ✓",
    deckDesignsLabel: "ವಿನ್ಯಾಸಗಳು",
    deckInSuiteLabel: "ಆಭರಣಗಳು ಲಭ್ಯವಿದೆ",
    deckHint: "✦ ಯಾವುದೇ ಕಾರ್ಡ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ಮುಂದೆ ತನ್ನಿ, ಅಥವಾ ಕೆಳಗೆ ವೀಕ್ಷಿಸಲು ಬಟನ್ ಒತ್ತಿ.",
    stackCardRingsTitle: "ಉಂಗುರಗಳ ಸಂಗ್ರಹ",
    stackCardRingsTag: "18K & 22K ಚಿನ್ನ • ಡೈಮಂಡ್",
    stackCardRingsDesc: "ಡೈಮಂಡ್ ಸಾಲಿಟೇರ್, 22K ಚಿನ್ನದ ಬ್ಯಾಂಡ್‌ಗಳು ಮತ್ತು ಆಕರ್ಷಕ ಉಂಗುರಗಳು.",
    stackCardSilverTitle: "ಬೆಳ್ಳಿಯ ಆಭರಣಗಳು",
    stackCardSilverTag: "ಶುದ್ಧ ಬೆಳ್ಳಿ • ಆ್ಯಂಟಿಕ್ ಫಿನಿಶ್",
    stackCardSilverDesc: "ಶುದ್ಧ ಬೆಳ್ಳಿಯ ಟೆಂಪಲ್ ಬಳೆಗಳು, ಬೆಳ್ಳಿ ಲೇಪಿತ ಚೋಕರ್‌ಗಳು ಮತ್ತು ಬೆಳ್ಳಿ ವಸ್ತುಗಳು.",
    stackCardNecklacesTitle: "ರಾಜಮನೆತನದ ಚಿನ್ನದ ಹಾರಗಳು",
    stackCardNecklacesTag: "22K BIS ಪ್ರಮಾಣೀಕೃತ • ಪೋಲ್ಕಿ & ಕುಂದನ್",
    stackCardNecklacesDesc: "ಪಾರಂಪರಿಕ ವಧುವಿನ ಚೋಕರ್, ದೇವಸ್ಥಾನದ ಚಿನ್ನದ ಹಾರಗಳು ಮತ್ತು ಪೋಲ್ಕಿ ಕಲಾಕೃತಿಗಳು.",
    stackCardBanglesTitle: "22K ಬಳೆಗಳು ಮತ್ತು ಕಡಗಳು",
    stackCardBanglesTag: "ಪಾರಂಪರಿಕ 22K ಫಿಲಿಗ್ರೀ & ಹೂವಿನ ವಿನ್ಯಾಸ",
    stackCardBanglesDesc: "ಕುಂದನ್ ಕಡಗಳು, ಆ್ಯಂಟಿಕ್ ಟೆಂಪಲ್ ಬಳೆಗಳು ಮತ್ತು ದೈನಂದಿನ ಬಳೆಗಳು.",
    stackCardChainsTitle: "ಚಿನ್ನದ ಸರಗಳು & ದೈನಂದಿನ ಬಳಕೆ",
    stackCardChainsTag: "22K ಗಟ್ಟಿ ಚಿನ್ನ • ಹಗುರ ಮತ್ತು ಗಟ್ಟಿ",
    stackCardChainsDesc: "ಸಾಂಪ್ರದಾಯಿಕ ಟೆಂಪಲ್ ಸರಗಳು, ದೈನಂದಿನ ಹಗುರ ಸರಗಳು ಮತ್ತು ಆಕರ್ಷಕ ಪೆಂಡೆಂಟ್‌ಗಳು.",
    stackCardEarringsTitle: "ಓಲೆಗಳು ಮತ್ತು ಜುಮುಕಿಗಳು",
    stackCardEarringsTag: "22K ಚಿನ್ನದ ಡ್ರಾಪ್ಸ್ • ಟೆಂಪಲ್ ಜುಮುಕಿ",
    stackCardEarringsDesc: "ವಿಂಟೇಜ್ ಆ್ಯಂಟಿಕ್ ಜುಮುಕಿಗಳು, ಮುತ್ತಿನ ಹನಿ ಓಲೆಗಳು ಮತ್ತು ಕಿವಿಯೋಲೆಗಳು.",
    stackSelectedRowTitle: "ಬೊಹ್ರಾಸ್ ರಾಜಮನೆತನದ ಆಭರಣ ಶ್ರೇಣಿ",
    stackItemsFound: "ಕಲಾತ್ಮಕ ಆಭರಣಗಳು ಲಭ್ಯವಿದೆ",
    stackViewAllCatalog: "ಶೋರೂಮ್ ಪ್ರದರ್ಶನ",
    stackClearSelection: "ಮುಚ್ಚಿ",
    stackQuickViewBtn: "ಶೀಘ್ರ ವೀಕ್ಷಣೆ",
    stackEnquireBtn: "ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ",
    selectedTag: "ಆಯ್ಕೆಯಾಗಿದೆ",
    viewingRowLabel: "ಕೆಳಗೆ ನೋಡಿ ↓",
    chooseLabel: "ಕಾರ್ಡ್ ಆರಿಸಿ →",
    exploreAllBtn: "ಅಥವಾ ಸಂಪೂರ್ಣ 24 ಆಭರಣಗಳ ಸಂಗ್ರಹ ನೋಡಿ",
    stackCardAllTitle: "ಎಲ್ಲಾ ಆಭರಣ ಸಂಗ್ರಹಣೆಗಳು",
    stackCardAllTag: "22K ಚಿನ್ನ ಮತ್ತು ಬೆಳ್ಳಿ • ಸಂಪೂರ್ಣ ಸಂಗ್ರಹ",
    stackCardAllDesc: "ನಮ್ಮ ಸಂಪೂರ್ಣ 24 BIS ಹಾಲ್‌ಮಾರ್ಕ್ ಪ್ರಮಾಣೀಕೃತ ಆಭರಣಗಳನ್ನು ವೀಕ್ಷಿಸಿ.",
    occasionTempleWearTitle: "ಟೆಂಪಲ್ ಆಭರಣಗಳು",
    occasionTempleWearDesc: "ಪವಿತ್ರ ದೇವಸ್ಥಾನದ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಆಭರಣಗಳು",
    occasionDailyWearTitle: "ದೈನಂದಿನ ಬಳಕೆ",
    occasionDailyWearDesc: "ದೈನಂದಿನ ಹಗುರ ಚಿನ್ನ ಮತ್ತು ಆಕರ್ಷಕ ಆಭರಣಗಳು",
    occasionBridalWearTitle: "ಮದುವೆ ಮತ್ತು ಶುಭ ಸಮಾರಂಭ",
    occasionBridalWearDesc: "ಅದ್ಭುತ ವಿವಾಹಕ್ಕಾಗಿ ರಾಜಮನೆತನದ ಆಭರಣಗಳು",
    occasionGiftsTitle: "ಉಡುಗೊರೆಗಳು",
    occasionGiftsDesc: "ವಿಶೇಷ ಕ್ಷಣಗಳಿಗಾಗಿ ಬೆಲೆಬಾಳುವ ಉಡುಗೊರೆಗಳು",

    showingResults: "ತೋರಿಸಲಾಗುತ್ತಿದೆ",
    ofResults: "ರ ಪೈಕಿ",
    resultsLabel: "ಫಲಿತಾಂಶಗಳು",
    sortByLabel: "ವಿಂಗಡಣೆ:",
    sortFeatured: "ಪ್ರಮುಖ ಆಭರಣಗಳು",
    sortHeavyToLight: "ತೂಕ: ಹೆಚ್ಚಿನಿಂದ ಕಡಿಮೆಗೆ",
    sortLightToHeavy: "ತೂಕ: ಕಡಿಮೆಯಿಂದ ಹೆಚ್ಚಿಗೆ",

    noMatchingItems: "ನೀವು ಆರಿಸಿದ ಶೋಧಕಗಳಿಗೆ ಯಾವುದೇ ಆಭರಣಗಳು ಸಿಕ್ಕಿಲ್ಲ",
    tryClearingFilters: "ಮತ್ತಷ್ಟು ಆಭರಣಗಳನ್ನು ನೋಡಲು ಶೋಧಕಗಳನ್ನು ಮರುಹೊಂದಿಸಿ.",
    resetFiltersBtn: "ಶೋಧಕಗಳನ್ನು ಮರುಹೊಂದಿಸಿ",

    handcraftedTitle: "ಕರಕುಶಲ ಕಲೆ",
    handcraftedSub: "ನುರಿತ ಕುಶಲಕರ್ಮಿಗಳಿಂದ",
    hallmarkedTitle: "100% ಹಾಲ್‌ಮಾರ್ಕ್",
    hallmarkedSub: "22K BIS ಪ್ರಮಾಣೀಕೃತ ಚಿನ್ನ",
    freeShippingTitle: "ಉಚಿತ ವಿಮೆ ಹೊಂದಿದ ಡೆಲಿವರಿ",
    freeShippingSub: "ಸುರಕ್ಷಿತ ಡೆಲಿವರಿ",
    lifetimeExchangeTitle: "ಜೀವಮಾನದ ಎಕ್ಸ್‌ಚೇಂಜ್",
    lifetimeExchangeSub: "ನಂಬಿಕೆಯಿಂದ ಖರೀದಿಸಿ",
    shopByOccasion: "ಸಂದರ್ಭದ ಪ್ರಕಾರ ಖರೀದಿಸಿ",

    // Filters
    filterAll: "ಎಲ್ಲವೂ",
    filterNecklaces: "ಹಾರಗಳು",
    filterEarrings: "ಓಲೆಗಳು",
    filterBangles: "ಬಳೆಗಳು",
    filterRings: "ಉಂಗುರಗಳು",
    filterChains: "ಸರಪಳಿಗಳು",

    filterSilver: "ಬೆಳ್ಳಿ",
    filterGold: "ಚಿನ್ನ",
    filterTempleType: "ಟೆಂಪಲ್ ಡಿಸೈನ್",
    filterAntiqueType: "ಆಂಟಿಕ್ ಆಭರಣ",
    filterSilverCoated: "ಬೆಳ್ಳಿ ಕೋಟೆಡ್",
    filterGoldChains: "ಚಿನ್ನದ ಸರಗಳು",
    filterKundan: "ಕುಂದನ್",
    filterPolki: "ಪೋಲ್ಕಿ",

    filter22K: "22K ಚಿನ್ನ",
    filter18K: "18K ಚಿನ್ನ",

    filterWedding: "ಮದುವೆ",
    filterFestival: "ಹಬ್ಬದ ದಿನ",
    filterParty: "ಪಾರ್ಟಿ",
    filterEveryday: "ದೈನಂದಿನ ಬಳಕೆ",
    filterGift: "ಉಡುಗೊರೆ",

    // Contact Page / Showroom
    welcomeEyebrow: "ನಿಮ್ಮನ್ನು ಸುಸ್ವಾಗತಿಸುತ್ತೇವೆ",
    contactTitle1: "ನಮ್ಮ",
    contactTitle2: "ಸಂಪರ್ಕ ಪುಟ",
    contactDesc: "ನಮ್ಮ ಕರಕುಶಲ 22K ಚಿನ್ನದ ಆಭರಣಗಳನ್ನು ಹತ್ತಿರದಿಂದ ವೀಕ್ಷಿಸಿ. ಬೋಹ್ರಾಸ್ ಜ್ಯುವೆಲ್ಲರಿಯಲ್ಲಿ ನಂಬಿಕೆ ಮತ್ತು ಪರಂಪರೆಯನ್ನು ಅನುಭವಿಸಿ.",
    showShopDirections: "ಷೋರೂಂ ವಿಳಾಸದ ಮಾರ್ಗ ನೋಡಿ",
    openGoogleMaps: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ",
    directoryEyebrow: "ಷೋರೂಂ ಮಾಹಿತಿ ಮತ್ತು ವಿಳಾಸ",
    addressLandmark: "ವಿಳಾಸ ಮತ್ತು ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್",
    storeHours: "ಷೋರೂಂ ಕೆಲಸದ ಸಮಯ",
    directHelpline: "ನೇರ ಸಹಾಯವಾಣಿ",
    emailConcierge: "ಇಮೇಲ್ ಬೆಂಬಲ",
    legacyQuote1: "ಕೇವಲ ಆಭರಣವಲ್ಲ",
    legacyQuote2: "ಐದು ದಶಕಗಳ ನಂಬಿಕೆ",
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: string) => {
    return translations[lang]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      className="lang-switcher-btn"
      onClick={() => setLang(lang === "en" ? "kn" : "en")}
      title={lang === "en" ? "ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಿ" : "Switch to English"}
      aria-label="Switch language between Kannada and English"
    >
      <Globe size={14} />
      <span>{lang === "en" ? "ಕನ್ನಡ" : "EN"}</span>
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/collections", label: t("collections") },
    { to: "/about", label: t("about") },
    { to: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <Link to="/" className="brand" aria-label="Bohra's Jewellery home">
          <img src={officialLogoMark} alt="Bohra's Jewellery logo mark" className="brand-icon-img" />
          <div className="brand-text">
            <strong className="brand-name">Bohra’s Jewellery</strong>
            <small className="brand-slogan">{t("tagline")}</small>
          </div>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} activeProps={{ className: "active" }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="header-location-btn"
            title="Open showroom location on Google Maps"
          >
            <MapPin size={15} />
            <span className="location-btn-text">{t("storeLocation")}</span>
          </a>
          <button
            className="icon-button mobile-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "active" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mobile-actions">
            <LanguageSwitcher />
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mobile-location-link"
              onClick={() => setOpen(false)}
            >
              <MapPin size={16} /> <span>{t("openMapLocation")}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-symbol">✦</span>
      <span className="eyebrow-text">{children}</span>
      <span className="eyebrow-symbol">✦</span>
    </div>
  );
}

function GoldButton({ children, outline = false, onClick }: { children: ReactNode; outline?: boolean; onClick?: () => void }) {
  return <button onClick={onClick} className={outline ? "gold-button outline" : "gold-button"}>{children}<ArrowRight /></button>;
}



const collections = [
  { key: "NECKLACES", copyKey: "copyNecklaces", image: necklacesImage, category: "necklaces" },
  { key: "EARRINGS", copyKey: "copyEarrings", image: earringsImage, category: "earrings" },
  { key: "BANGLES", copyKey: "copyBangles", image: banglesImage, category: "bangles" },
  { key: "RINGS", copyKey: "copyRings", image: ringsImage, category: "rings" },
];

function CollectionCard({ item, onClick }: { item: (typeof collections)[number]; onClick?: () => void }) {
  const { t } = useLanguage();
  const title = t(item.key);
  const copy = t(item.copyKey);
  return (
    <Link to="/collections" search={{ category: item.category }} className="collection-card" onClick={onClick}>
      <div className="collection-card-thumb">
        <img src={item.image} alt={`${title} collection`} loading="lazy" width={500} height={400} />
      </div>
      <div className="collection-card-details">
        <h3>{title}</h3>
        <p>{copy}</p>
        <span className="collection-arrow-circle">
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}


export function HumanCraftedGoldFrame() {
  return (
    <div className="human-crafted-gold-frame" aria-hidden="true">
      <div className="corner-bracket top-left" />
      <div className="corner-bracket top-right" />
      <div className="corner-bracket bottom-left" />
      <div className="corner-bracket bottom-right" />
    </div>
  );
}

function HeroCinematicVideo() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const videoMp4 = isMobile ? "/bohras_hero_cinematic_mobile.mp4" : "/bohras_hero_cinematic.mp4";
  const videoWebm = isMobile ? "/bohras_hero_cinematic_mobile.webm" : "/bohras_hero_cinematic.webm";
  const posterImg = isMobile ? heroPosterMobile : heroPoster;

  return (
    <div className="hero-slider-bg" aria-hidden="true">
      <div className="hero-slide-video-wrap active" aria-hidden="true">
        <video
          key={isMobile ? "hero-video-mobile" : "hero-video-desktop"}
          className="hero-slide-video"
          autoPlay
          loop
          muted
          playsInline
          poster={posterImg}
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src={videoMp4} type="video/mp4" />
          <source src={videoWebm} type="video/webm" />
          <img
            src={posterImg}
            alt="Royal 22K Kundan & emerald gold choker set with Vedic astrology zodiac mandala"
            className="hero-slide-img active"
          />
        </video>
        <img
          src={posterImg}
          alt="Royal 22K Kundan & emerald gold choker set with Vedic astrology zodiac mandala"
          className="hero-reduced-motion-poster"
        />
      </div>
    </div>
  );
}

export function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="home-hero">
        <HeroCinematicVideo />
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <div className="hero-header-block">
            <Eyebrow>{t("heroEyebrow")}</Eyebrow>
            <h1>
              {t("heroTitle1")}
              <br />
              <em>{t("heroTitle2")}</em>
            </h1>
            <p>{t("heroDesc")}</p>
          </div>
          <div className="hero-actions-block">
            <div className="hero-buttons">
              <Link to="/collections" style={{ textDecoration: "none" }}>
                <GoldButton>{t("exploreCollections")}</GoldButton>
              </Link>
              <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" className="gold-button outline" style={{ textDecoration: "none" }}>
                <Navigation size={15} />{t("showDirections")}
              </a>
            </div>
            <div className="hero-trust-tags">
              <div className="hero-trust-tag">
                <Award size={13} className="hero-tag-icon" />
                <span>{t("goldCertifiedTag")}</span>
              </div>
              <div className="hero-trust-tag">
                <ShieldCheck size={13} className="hero-tag-icon" />
                <span>{t("since2008Tag")}</span>
              </div>
              <div className="hero-trust-tag">
                <Users size={13} className="hero-tag-icon" />
                <span>{t("happyCustomers")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="ivory-page">
        <section className="merged-services-banner site-shell">
          <div className="merged-banner-col">
            <div className="banner-top-row">
              <div className="banner-thumb">
                <img src={birthstonesImage} alt="Vedic Birthstones & Astrology" loading="lazy" width={320} height={240} />
              </div>
              <div className="banner-content">
                <span className="banner-tag">{t("birthstoneTag")}</span>
                <h2>
                  {t("birthstoneTitle1")} <em>{t("birthstoneTitle2")}</em>
                </h2>
              </div>
            </div>
            <p>{t("birthstoneDesc")}</p>
            <div className="banner-consult">{t("birthstoneBadge")}</div>
          </div>

          <div className="merged-banner-col">
            <div className="banner-top-row">
              <div className="banner-thumb">
                <img src={pledgedGoldImage} alt="Release Pledged Gold & Takeover Service" loading="lazy" width={320} height={240} />
              </div>
              <div className="banner-content">
                <span className="banner-tag">{t("pledgedTag")}</span>
                <h2>
                  {t("pledgedTitle1")} <em>{t("pledgedTitle2")}</em>
                </h2>
              </div>
            </div>
            <p>{t("pledgedDesc")}</p>
            <div className="banner-consult">{t("pledgedBadge")}</div>
          </div>

          <div className="merged-banner-col">
            <div className="banner-top-row">
              <div className="banner-thumb">
                <img src={weddingMatchmakingImage} alt="Vedic Marriage Horoscope & Kundali Matching" loading="lazy" width={320} height={240} />
              </div>
              <div className="banner-content">
                <span className="banner-tag">{t("marriageTag")}</span>
                <h2>
                  {t("marriageTitle1")} <em>{t("marriageTitle2")}</em>
                </h2>
              </div>
            </div>
            <p>{t("marriageDesc")}</p>
            <div className="banner-consult">{t("marriageBadge")}</div>
          </div>
        </section>
        <section className="site-shell collection-row">
          {collections.map((item) => (
            <CollectionCard key={item.key} item={item} />
          ))}
        </section>
      </main>
    </>
  );
}

export function AboutPage() {
  const { t } = useLanguage();
  return (
    <>
      <section className="about-hero split-hero">
        <img
          src={ornateGreenAndGoldJewelleryShopCollage}
          alt="Bohra's Jewellery Luxury Showroom Showcase"
          width={1920}
          height={1088}
        />
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <Eyebrow>{t("aboutStoryEyebrow")}</Eyebrow>
          <h1>{t("aboutTitle1")}<br /><em>{t("aboutTitle2")}</em></h1>
          <h2>{t("aboutSubtitle")}</h2>
          <p>{t("aboutDesc")}</p>
          <div className="hero-buttons" style={{ marginTop: "20px" }}>
            <Link to="/collections" className="gold-button" style={{ textDecoration: "none" }}>
              {t("exploreCollections")}
            </Link>
            <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" className="gold-button outline" style={{ textDecoration: "none" }}>
              <Navigation size={15} /> {t("showDirections")}
            </a>
          </div>
        </div>
      </section>

      <main className="ivory-page">
        <section className="site-shell story-section">
          <div className="story-header">
            <Eyebrow>{t("journeyEyebrow")}</Eyebrow>
            <h2>{t("heritageTitle")}</h2>
          </div>
          <div className="story-lead-quote">
            "{t("heritageP1")}"
          </div>
          <div className="story-paragraphs-grid">
            <p>{t("heritageP2")}</p>
            <p>{t("heritageP3")}</p>
            <p>{t("heritageP4")}</p>
            <p>{t("heritageP5")}</p>
          </div>
          <div className="story-stats-strip">
            <div className="story-stat-card">
              <div className="story-stat-number">{t("heritageStat1Num")}</div>
              <div className="story-stat-text">{t("heritageStat1Label")}</div>
            </div>
            <div className="story-stat-card">
              <div className="story-stat-number">{t("heritageStat2Num")}</div>
              <div className="story-stat-text">{t("heritageStat2Label")}</div>
            </div>
            <div className="story-stat-card">
              <div className="story-stat-number">{t("heritageStat3Num")}</div>
              <div className="story-stat-text">{t("heritageStat3Label")}</div>
            </div>
            <div className="story-stat-card">
              <div className="story-stat-number">{t("heritageStat4Num")}</div>
              <div className="story-stat-text">{t("heritageStat4Label")}</div>
            </div>
          </div>
        </section>

        <section className="site-shell about-values-section">
          <div className="section-header-center" style={{ textAlign: "center", marginBottom: "32px" }}>
            <Eyebrow>{t("pillarsEyebrow")}</Eyebrow>
            <h2 style={{ font: "600 34px var(--font-display)", color: "var(--foreground)", margin: "8px 0" }}>
              {t("pillarsTitle")}
            </h2>
            <p style={{ fontSize: "14px", color: "var(--muted-foreground)", maxWidth: "620px", margin: "0 auto", lineHeight: "1.6" }}>
              {t("pillarsSubtitle")}
            </p>
          </div>

          <div className="values-grid">
            <ValueCard icon={<Diamond />} title={t("pillar1Title")}>
              {t("pillar1Desc")}
            </ValueCard>
            <ValueCard icon={<ShieldCheck />} title={t("pillar2Title")}>
              {t("pillar2Desc")}
            </ValueCard>
            <ValueCard icon={<Gem />} title={t("pillar3Title")}>
              {t("pillar3Desc")}
            </ValueCard>
            <ValueCard icon={<Heart />} title={t("pillar4Title")}>
              {t("pillar4Desc")}
            </ValueCard>
          </div>
        </section>
      </main>
    </>
  );
}

function ValueCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="value-card">
      <div className="value-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Value({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <div className="value"><span>{icon}</span><div><strong>{title}</strong><p>{children}</p></div></div>;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  purity: string;
  occasion: string;
  price: string;
  rawPrice: number;
  weight: string;
  image: string;
  description: string;
}

export const productsData: Product[] = [
  {
    id: "1",
    name: "Royal Nizam Polki Necklace",
    category: "Necklaces",
    type: "Polki",
    purity: "22K Gold",
    occasion: "Wedding",
    price: "₹4,65,000",
    rawPrice: 465000,
    weight: "41.6 g",
    image: necklacesImage,
    description: "Handcrafted 22K gold Polki necklace set with uncut diamonds and ruby drops."
  },
  {
    id: "2",
    name: "Traditional Kundan Kada",
    category: "Bangles",
    type: "Kundan",
    purity: "22K Gold",
    occasion: "Festival",
    price: "₹2,32,000",
    rawPrice: 232000,
    weight: "19.8 g",
    image: banglesImage,
    description: "Intricate floral 22K gold kadas embedded with premium Kundan stones."
  },
  {
    id: "3",
    name: "Diamond Solitaire Ring",
    category: "Rings",
    type: "Gold",
    purity: "18K Gold",
    occasion: "Gift",
    price: "₹2,80,000",
    rawPrice: 280000,
    weight: "5.2 g",
    image: ringsImage,
    description: "Brilliant cushion-cut solitaire diamond ring set in 18K gold filigree."
  },
  {
    id: "4",
    name: "Bridal Heirloom Necklace Set",
    category: "Necklaces",
    type: "Temple",
    purity: "22K Gold",
    occasion: "Wedding",
    price: "₹8,65,000",
    rawPrice: 865000,
    weight: "92.5 g",
    image: weddingOccasionImage,
    description: "Masterpiece bridal Kundan choker necklace set with ruby and pearl clusters."
  },
  {
    id: "5",
    name: "Antique Temple Gold Chain",
    category: "Chains",
    type: "Gold Chains",
    purity: "22K Gold",
    occasion: "Festival",
    price: "₹1,45,000",
    rawPrice: 145000,
    weight: "18.5 g",
    image: goldChainImage,
    description: "Traditional 22K gold temple chain featuring hand-carved motifs."
  },
  {
    id: "6",
    name: "Royal Emerald Festive Set",
    category: "Necklaces",
    type: "Antique Jewellery",
    purity: "22K Gold",
    occasion: "Festival",
    price: "₹5,25,000",
    rawPrice: 525000,
    weight: "73.2 g",
    image: festiveOccasionImage,
    description: "Vibrant festival gold necklace with genuine emerald teardrops."
  },
  {
    id: "7",
    name: "Polki Earring Drops",
    category: "Earrings",
    type: "Polki",
    purity: "22K Gold",
    occasion: "Party",
    price: "₹1,18,000",
    rawPrice: 118000,
    weight: "12.3 g",
    image: earringsImage,
    description: "Exquisite Indian gold jhumka drops with pearls and emerald studs."
  },
  {
    id: "8",
    name: "Silver Coated Heritage Choker",
    category: "Necklaces",
    type: "Silver Coated",
    purity: "Silver Coated",
    occasion: "Everyday",
    price: "₹28,000",
    rawPrice: 28000,
    weight: "14.2 g",
    image: silverJewelleryImage,
    description: "Silver coated antique gold finish choker with brilliant zircon accents."
  },
  {
    id: "9",
    name: "Pure Silver Temple Bangle",
    category: "Bangles",
    type: "Silver",
    purity: "Silver Coated",
    occasion: "Festival",
    price: "₹45,000",
    rawPrice: 45000,
    weight: "32.0 g",
    image: silverJewelleryImage,
    description: "Sterling silver temple design bangles with oxidized antique finish."
  },
  {
    id: "10",
    name: "Minimalist Gold Chain",
    category: "Chains",
    type: "Gold Chains",
    purity: "22K Gold",
    occasion: "Everyday",
    price: "₹72,000",
    rawPrice: 72000,
    weight: "8.6 g",
    image: goldChainImage,
    description: "Sleek 22K gold chain with modern minimalist bar pendant."
  },
  {
    id: "11",
    name: "Vintage Antique Jhumkas",
    category: "Earrings",
    type: "Antique Jewellery",
    purity: "22K Gold",
    occasion: "Festival",
    price: "₹95,000",
    rawPrice: 95000,
    weight: "15.4 g",
    image: templeEarringsImage,
    description: "Heavy antique gold jhumka earrings with traditional temple filigree."
  },
  {
    id: "12",
    name: "Luxury Diamond Pendant Box",
    category: "Necklaces",
    type: "Gold",
    purity: "18K Gold",
    occasion: "Gift",
    price: "₹1,85,000",
    rawPrice: 185000,
    weight: "9.8 g",
    image: giftsOccasionImage,
    description: "Sparkling round solitaire pendant set in 18K gold presentation box."
  },
  {
    id: "13",
    name: "Sterling Silver Filigree Earrings",
    category: "Earrings",
    type: "Silver",
    purity: "Silver Coated",
    occasion: "Everyday",
    price: "₹18,500",
    rawPrice: 18500,
    weight: "7.8 g",
    image: silverJewelleryImage,
    description: "Handcrafted 925 sterling silver filigree drop earrings."
  },
  {
    id: "14",
    name: "Divine Lakshmi Temple Earrings",
    category: "Earrings",
    type: "Temple",
    purity: "22K Gold",
    occasion: "Wedding",
    price: "₹1,35,000",
    rawPrice: 135000,
    weight: "18.2 g",
    image: templeEarringsImage,
    description: "Traditional Goddess Lakshmi temple earrings handcrafted in pure 22K gold."
  },
  {
    id: "15",
    name: "Classic 18K Gold Daily Chain",
    category: "Chains",
    type: "Gold Chains",
    purity: "18K Gold",
    occasion: "Everyday",
    price: "₹54,000",
    rawPrice: 54000,
    weight: "6.5 g",
    image: goldChainImage,
    description: "Lightweight 18K gold daily wear chain with diamond-cut finish."
  },
  {
    id: "16",
    name: "Royal Kundan Statement Ring",
    category: "Rings",
    type: "Kundan",
    purity: "22K Gold",
    occasion: "Party",
    price: "₹88,000",
    rawPrice: 88000,
    weight: "11.4 g",
    image: ringsImage,
    description: "Regal Kundan statement cocktail ring with meenakari backing."
  },
  {
    id: "17",
    name: "Elegant Antique Gold Bangles",
    category: "Bangles",
    type: "Antique Jewellery",
    purity: "22K Gold",
    occasion: "Wedding",
    price: "₹3,40,000",
    rawPrice: 340000,
    weight: "42.0 g",
    image: banglesImage,
    description: "Set of two antique finish 22K gold bangles with intricate ruby inlay."
  },
  {
    id: "18",
    name: "Silver Coated Party Necklace",
    category: "Necklaces",
    type: "Silver Coated",
    purity: "Silver Coated",
    occasion: "Party",
    price: "₹36,000",
    rawPrice: 36000,
    weight: "19.5 g",
    image: silverJewelleryImage,
    description: "Designer silver coated statement necklace studded with cz diamonds."
  },
  {
    id: "19",
    name: "Heritage Temple Choker",
    category: "Necklaces",
    type: "Temple",
    purity: "22K Gold",
    occasion: "Festival",
    price: "₹3,95,000",
    rawPrice: 395000,
    weight: "48.0 g",
    image: weddingOccasionImage,
    description: "Traditional South Indian temple design gold choker with pearl drops."
  },
  {
    id: "20",
    name: "Polki & Pearl Party Drops",
    category: "Earrings",
    type: "Polki",
    purity: "18K Gold",
    occasion: "Party",
    price: "₹1,05,000",
    rawPrice: 105000,
    weight: "10.8 g",
    image: earringsImage,
    description: "Contemporary Polki diamond earrings with natural freshwater pearls."
  },
  {
    id: "21",
    name: "Sterling Silver Solitaire Ring",
    category: "Rings",
    type: "Silver",
    purity: "Silver Coated",
    occasion: "Gift",
    price: "₹15,000",
    rawPrice: 15000,
    weight: "4.5 g",
    image: ringsImage,
    description: "Charming silver solitaire ring with brilliant cushion-cut stone."
  },
  {
    id: "22",
    name: "Daily Wear Gold Band Ring",
    category: "Rings",
    type: "Gold",
    purity: "18K Gold",
    occasion: "Everyday",
    price: "₹32,000",
    rawPrice: 32000,
    weight: "3.8 g",
    image: ringsImage,
    description: "Sleek 18K solid gold band ring with polished glossy finish."
  },
  {
    id: "23",
    name: "Kundan & Emerald Gift Necklace",
    category: "Necklaces",
    type: "Kundan",
    purity: "22K Gold",
    occasion: "Gift",
    price: "₹2,10,000",
    rawPrice: 210000,
    weight: "24.5 g",
    image: giftsOccasionImage,
    description: "Elegant Kundan gold necklace set with carved emerald beads."
  },
  {
    id: "24",
    name: "Silver Coated Heavy Chain",
    category: "Chains",
    type: "Silver Coated",
    purity: "Silver Coated",
    occasion: "Everyday",
    price: "₹12,500",
    rawPrice: 12500,
    weight: "16.0 g",
    image: silverJewelleryImage,
    description: "Stylish silver coated rope chain crafted for effortless everyday style."
  }
];

function ProductCardItem({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView: (product: Product) => void;
}) {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" width={800} height={600} />
        <span className="purity">✦ {product.purity}</span>
      </div>
      <h3>{product.name}</h3>
      <div className="price-row" style={{ justifyContent: "flex-end" }}>
        <small>{product.weight}</small>
      </div>
      <div className="product-actions" style={{ gridTemplateColumns: "1fr" }}>
        <button onClick={() => onQuickView(product)}>Quick view</button>
      </div>
    </article>
  );
}

export function CollectionsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedPurity, setSelectedPurity] = useState("All");
  const [selectedOccasion, setSelectedOccasion] = useState("All");
  const [sort, setSort] = useState("Featured Masterpieces");

  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Stack card selection state (default to null - ONLY the cards are seen initially!)
  const [selectedStackId, setSelectedStackId] = useState<string | null>(null);
  const [activeStackIndex, setActiveStackIndex] = useState(0);
  const curatedRowRef = useRef<HTMLDivElement>(null);

  const stackCards = [
    {
      id: "rings",
      suiteNo: "01",
      shortName: "Rings",
      titleKey: "stackCardRingsTitle",
      tagKey: "stackCardRingsTag",
      descKey: "stackCardRingsDesc",
      image: ringsImage,
      badge: "Gold & Solitaires",
      categoryFilter: "Rings",
      typeFilter: "All",
      filterFn: (p: Product) => p.category === "Rings",
    },
    {
      id: "silver",
      suiteNo: "02",
      shortName: "Silver",
      titleKey: "stackCardSilverTitle",
      tagKey: "stackCardSilverTag",
      descKey: "stackCardSilverDesc",
      image: silverJewelleryImage,
      badge: "Pure Silver & Coated",
      categoryFilter: "All",
      typeFilter: "Silver",
      filterFn: (p: Product) => p.type === "Silver" || p.type === "Silver Coated" || p.purity === "Silver Coated",
    },
    {
      id: "necklaces",
      suiteNo: "03",
      shortName: "Necklaces",
      titleKey: "stackCardNecklacesTitle",
      tagKey: "stackCardNecklacesTag",
      descKey: "stackCardNecklacesDesc",
      image: necklacesImage,
      badge: "22K Royal Gold",
      categoryFilter: "Necklaces",
      typeFilter: "All",
      filterFn: (p: Product) => p.category === "Necklaces",
    },
    {
      id: "bangles",
      suiteNo: "04",
      shortName: "Bangles",
      titleKey: "stackCardBanglesTitle",
      tagKey: "stackCardBanglesTag",
      descKey: "stackCardBanglesDesc",
      image: banglesImage,
      badge: "22K Kadas & Sets",
      categoryFilter: "Bangles",
      typeFilter: "All",
      filterFn: (p: Product) => p.category === "Bangles",
    },
    {
      id: "chains",
      suiteNo: "05",
      shortName: "Chains",
      titleKey: "stackCardChainsTitle",
      tagKey: "stackCardChainsTag",
      descKey: "stackCardChainsDesc",
      image: goldChainImage,
      badge: "Solid 22K Gold Chains",
      categoryFilter: "Chains",
      typeFilter: "Gold Chains",
      filterFn: (p: Product) => p.category === "Chains" || p.type === "Gold Chains",
    },
    {
      id: "earrings",
      suiteNo: "06",
      shortName: "Earrings",
      titleKey: "stackCardEarringsTitle",
      tagKey: "stackCardEarringsTag",
      descKey: "stackCardEarringsDesc",
      image: templeEarringsImage,
      badge: "22K Antique Drops",
      categoryFilter: "Earrings",
      typeFilter: "All",
      filterFn: (p: Product) => p.category === "Earrings",
    },
  ];

  const currentStackCard = selectedStackId
    ? stackCards.find((c) => c.id === selectedStackId) || {
        id: "all",
        titleKey: "stackCardAllTitle",
        tagKey: "stackCardAllTag",
        descKey: "stackCardAllDesc",
        image: craftImage,
        badge: "All 24 Collections",
        categoryFilter: "All",
        typeFilter: "All",
        filterFn: () => true,
      }
    : null;

  const suitableProducts = currentStackCard
    ? (currentStackCard.id === "all" ? productsData : productsData.filter(currentStackCard.filterFn))
    : [];

  const handleApplyToCatalog = (card: (typeof stackCards)[0]) => {
    setSelectedCategory(card.categoryFilter);
    setSelectedType(card.typeFilter);
    setSelectedPurity("All");
    setSelectedOccasion("All");
    document.getElementById("product-grid-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollCurated = (direction: "left" | "right") => {
    if (curatedRowRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      curatedRowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
    setSelectedPurity("All");
    setSelectedOccasion("All");
    setSort("Featured Masterpieces");
  };

  // Dynamic Filtering Logic
  let filtered = productsData.filter((p) => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (selectedType !== "All" && p.type !== selectedType) return false;
    if (selectedPurity !== "All" && p.purity !== selectedPurity) return false;
    if (selectedOccasion !== "All" && p.occasion !== selectedOccasion) return false;
    return true;
  });

  // Sorting Logic
  if (sort === "Weight: Heavy to Light") {
    filtered = [...filtered].sort((a, b) => parseFloat(b.weight) - parseFloat(a.weight));
  } else if (sort === "Weight: Light to Heavy") {
    filtered = [...filtered].sort((a, b) => parseFloat(a.weight) - parseFloat(b.weight));
  }

  const occasionItems = [
    {
      name: "Temple Wear",
      titleKey: "occasionTempleWearTitle",
      copyKey: "occasionTempleWearDesc",
      image: festiveOccasionImage,
      occasionFilter: "Festival",
      typeFilter: "Temple",
    },
    {
      name: "Daily Wear",
      titleKey: "occasionDailyWearTitle",
      copyKey: "occasionDailyWearDesc",
      image: dailywearOccasionImage,
      occasionFilter: "Everyday",
      typeFilter: "All",
    },
    {
      name: "Bridal Wear",
      titleKey: "occasionBridalWearTitle",
      copyKey: "occasionBridalWearDesc",
      image: weddingOccasionImage,
      occasionFilter: "Wedding",
      typeFilter: "All",
    },
    {
      name: "Gifts & Celebrations",
      titleKey: "occasionGiftsTitle",
      copyKey: "occasionGiftsDesc",
      image: giftsOccasionImage,
      occasionFilter: "Gift",
      typeFilter: "All",
    },
  ];

  return (
    <>
      <main className="ivory-page collections-page">
        <section className="collections-hero">
          <img src={ornateGoldFramedJewelleryCollage} alt="Ornate Gold-Framed Jewellery Collage" width={1920} height={1088} />
          <div className="hero-shade" />
          <div className="site-shell hero-content">
            <Eyebrow>{t("collectionsEyebrow")}</Eyebrow>
            <h1>{t("collectionsTitle1")} <em>{t("collectionsTitle2")}</em></h1>
            <p>{t("collectionsDesc")}</p>
          </div>
        </section>

        {/* Interactive Physical Pile of Cards Discovery Section (Handcrafted & Luxury) */}
        <section className="site-shell pile-discovery-section">
          <div className="pile-discovery-header">
            <span className="section-kicker">✦ {t("stackSectionEyebrow")}</span>
            <h2>{t("stackSectionTitle")}</h2>
            <p className="pile-discovery-subtitle">{t("stackSectionDesc")}</p>
          </div>

          <div className="pile-showcase-container">
            {/* The Physical Spread of Cards Stage */}
            <div className="pile-spread-stage">
              {stackCards.map((card, idx) => {
                const isSelected = selectedStackId === card.id;

                return (
                  <div
                    key={card.id}
                    className={`pile-card-wrapper pile-spread-card spread-pos-${idx} ${isSelected ? "is-selected-card" : ""}`}
                    onClick={() => {
                      if (selectedStackId === card.id) {
                        document.getElementById("stack-curated-showcase")?.scrollIntoView({ behavior: "smooth", block: "start" });
                      } else {
                        setActiveStackIndex(idx);
                        setSelectedStackId(card.id);
                        setSelectedCategory(card.categoryFilter);
                        setSelectedType(card.typeFilter);
                        setSelectedPurity("All");
                        setSelectedOccasion("All");
                        setTimeout(() => {
                          document.getElementById("stack-curated-showcase")?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 120);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${t(card.titleKey)} suite card`}
                  >
                    <article className="pile-card-surface">
                      {/* Decorative Gold Filigree Corner Ornaments */}
                      <span className="pile-corner pile-corner-tl" aria-hidden="true">⌜</span>
                      <span className="pile-corner pile-corner-tr" aria-hidden="true">⌝</span>
                      <span className="pile-corner pile-corner-bl" aria-hidden="true">⌞</span>
                      <span className="pile-corner pile-corner-br" aria-hidden="true">⌟</span>

                      {/* Card Header Strip */}
                      <div className="pile-card-topbar">
                        <span className="pile-suite-code">
                          {t("deckSuiteLabel")} {card.suiteNo}
                        </span>
                      </div>

                      {/* Jewellery Photo Frame */}
                      <div className="pile-photo-frame">
                        <img
                          src={card.image}
                          alt={t(card.titleKey)}
                          loading="lazy"
                          width={480}
                          height={300}
                        />
                        <div className="pile-photo-shade" />
                        <span className="pile-purity-tag">✦ {card.badge}</span>
                        {isSelected && (
                          <span className="pile-active-tag">
                            <Check size={12} /> {t("selectedTag")}
                          </span>
                        )}
                      </div>

                      {/* Card Body & Content */}
                      <div className="pile-card-body">
                        <div className="pile-card-titles">
                          <span className="pile-card-eyetag">{t(card.tagKey)}</span>
                          <h3>{t(card.titleKey)}</h3>
                        </div>
                        <p className="pile-card-summary">{t(card.descKey)}</p>

                        {/* Card Action & Status */}
                        <div className="pile-card-bottom-action">
                          <div className="pile-count-indicator">
                            <Sparkles size={11} />
                            <span>
                              {productsData.filter(card.filterFn).length} {t("deckDesignsLabel")}
                            </span>
                          </div>

                          <span className={`pile-reveal-cta ${isSelected ? "viewing" : ""}`}>
                            {isSelected ? (
                              <>
                                <Check size={12} /> {t("deckViewingBtn")}
                              </>
                            ) : (
                              <>
                                <span>{t("deckRevealBtn")}</span>
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>


          </div>
        </section>

        {/* When user clicks any card: reveal the curated row and full catalog! Before click: ONLY cards are shown */}
        {selectedStackId && (
          <>
            {/* Suitable Products in a Row */}
            <div className="site-shell stack-curated-showcase-shell">
              <div className="stack-curated-showcase" id="stack-curated-showcase">
                <div className="curated-header">
                  <div className="curated-title-group">
                    <span className="curated-pill">✦ {currentStackCard ? t(currentStackCard.tagKey) : ""}</span>
                    <h3>
                      {t("stackSelectedRowTitle")}: <em>{currentStackCard ? t(currentStackCard.titleKey) : ""}</em>
                    </h3>
                    <p className="curated-desc-line">
                      {suitableProducts.length} {t("stackItemsFound")} • {currentStackCard ? t(currentStackCard.descKey) : ""}
                    </p>
                  </div>
                  <div className="curated-actions">
                    <div className="curated-nav-buttons">
                      <button
                        className="curated-arrow-btn"
                        onClick={() => scrollCurated("left")}
                        aria-label="Scroll left"
                        title="Previous"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        className="curated-arrow-btn"
                        onClick={() => scrollCurated("right")}
                        aria-label="Scroll right"
                        title="Next"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                    <button
                      className="clear-selection-btn"
                      onClick={() => {
                        setSelectedStackId(null);
                        setActiveStackIndex(-1);
                      }}
                      title={t("stackClearSelection")}
                    >
                      <X size={14} /> {t("stackClearSelection")}
                    </button>
                  </div>
                </div>

                {/* Horizontal Row with Smooth Scrolling */}
                <div className="curated-slider-container">
                  <div className="curated-products-row" ref={curatedRowRef}>
                    {suitableProducts.map((product) => (
                      <article key={product.id} className="curated-row-card">
                        <div className="curated-card-media">
                          <img src={product.image} alt={product.name} loading="lazy" width={320} height={240} />
                          <span className="curated-purity-tag">✦ {product.purity}</span>
                          <span className="curated-weight-pill">Wt: {product.weight}</span>
                        </div>
                        <div className="curated-card-details">
                          <h4>{product.name}</h4>
                          <div className="curated-card-meta">
                            <span className="curated-type-badge">{product.type}</span>
                            <span className="curated-occasion-badge">{product.occasion}</span>
                          </div>
                          <p className="curated-card-desc">{product.description}</p>
                          <div className="curated-card-footer">
                            <button
                              className="curated-quickview-button"
                              onClick={() => setActiveProduct(product)}
                            >
                              <Eye size={13} /> {t("stackQuickViewBtn")}
                            </button>
                            <a
                              href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi Bohra's Jewellery, I would like to enquire about ${product.name} (${product.purity}, ${product.weight}) from your collection.`)}`}
                              target="_blank"
                              rel="noreferrer"
                              className="curated-enquire-button"
                            >
                              <ShoppingBag size={13} /> {t("stackEnquireBtn")}
                            </a>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Hallmarked Promise Strip */}
            <div className="site-shell" style={{ paddingBlock: "10px 30px" }}>
              <div className="promise-strip">
                <Value icon={<Gem />} title={t("handcraftedTitle")}>{t("handcraftedSub")}</Value>
                <Value icon={<ShieldCheck />} title={t("hallmarkedTitle")}>{t("hallmarkedSub")}</Value>
                <Value icon={<ShoppingBag />} title={t("freeShippingTitle")}>{t("freeShippingSub")}</Value>
                <Value icon={<Heart />} title={t("lifetimeExchangeTitle")}>{t("lifetimeExchangeSub")}</Value>
              </div>
            </div>

            {/* Shop By Occasion Section */}
            <section className="site-shell occasions">
              <h2>{t("shopByOccasion")}</h2>
              <div className="occasion-row">
                {occasionItems.map((item) => (
                  <div
                    key={item.name}
                    className="occasion-card-wrap"
                    onClick={() => {
                      const occasionMap: Record<string, string> = {
                        "Temple Wear": "temple-antique",
                        "Daily Wear": "daily-chains",
                        "Bridal Wear": "bridal-sets",
                        "Gifts & Celebrations": "pure-silver",
                      };
                      const targetStackId = occasionMap[item.name] || "bridal-sets";
                      setSelectedStackId(targetStackId);
                      const stackIdx = stackCards.findIndex((c) => c.id === targetStackId);
                      if (stackIdx !== -1) setActiveStackIndex(stackIdx);
                      setTimeout(() => {
                        document.getElementById("stack-curated-showcase")?.scrollIntoView({ behavior: "smooth" });
                      }, 50);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="collection-card">
                      <div className="collection-card-thumb">
                        <img src={item.image} alt={t(item.titleKey)} loading="lazy" width={500} height={400} />
                      </div>
                      <div className="collection-card-details">
                        <h3>{t(item.titleKey)}</h3>
                        <p>{t(item.copyKey)}</p>
                        <span className="collection-arrow-circle">
                          <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Quick View Modal */}
      {activeProduct && (
        <div className="quickview-overlay" onClick={() => setActiveProduct(null)}>
          <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
            <button className="quickview-close" aria-label="Close modal" onClick={() => setActiveProduct(null)}>
              <X />
            </button>
            <div className="quickview-image">
              <img src={activeProduct.image} alt={activeProduct.name} />
            </div>
            <div className="quickview-details">
              <div>
                <div className="quickview-tags">
                  <span>{activeProduct.category}</span>
                  <span>{activeProduct.type}</span>
                  <span>{activeProduct.purity}</span>
                </div>
                <h2>{activeProduct.name}</h2>
                <p className="quickview-desc">{activeProduct.description}</p>
                <div className="quickview-meta" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 14px", fontSize: "11px" }}>
                  <div><strong>Category:</strong> {activeProduct.category}</div>
                  <div><strong>Jewellery Type:</strong> {activeProduct.type}</div>
                  <div><strong>Gold Purity:</strong> {activeProduct.purity}</div>
                  <div><strong>Gross Weight:</strong> {activeProduct.weight}</div>
                  <div><strong>Occasion:</strong> {activeProduct.occasion}</div>
                  <div><strong>Certification:</strong> 100% BIS Hallmarked</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                <Link to="/contact" style={{ textDecoration: "none", width: "100%" }} onClick={() => setActiveProduct(null)}>
                  <GoldButton outline style={{ width: "100%", justifyContent: "center" }}>
                    <CalendarDays /> {t("bookShowroomAppointment")}
                  </GoldButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="toast-banner">
          <CheckCircle size={18} />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}

function FilterGroup({
  title,
  items,
  selected,
  onChange,
}: {
  title: string;
  items: { value: string; label: string }[] | string[];
  selected: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="filter-group">
      <strong
        className="filter-group-header"
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }} />
      </strong>
      {isOpen && (
        <div className="filter-items-container">
          {items.map((item) => {
            const val = typeof item === "string" ? item : item.value;
            const label = typeof item === "string" ? item : item.label;
            return (
              <label key={val} className="filter-label" onClick={() => onChange(val)}>
                <span className="filter-radio">
                  {selected === val && <i className="radio-dot" />}
                </span>
                <span className="filter-text">{label}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function ContactPage() {
  const { t } = useLanguage();
  return <main className="ivory-page contact-page">
    <section className="contact-hero">
      <img src={bohrasShopfrontAndDisplay} alt="Bohra's Jewellery Shopfront and Display" width={1920} height={864} />
      <div className="contact-shade" />
      <div className="site-shell hero-content">
        <Eyebrow>{t("welcomeEyebrow")}</Eyebrow>
        <h1>{t("contactTitle1")} <em>{t("contactTitle2")}</em></h1>
        <p>{t("contactDesc")}</p>
        <a href={GOOGLE_MAPS_DIRECTIONS_URL} target="_blank" rel="noreferrer" className="gold-button" style={{ textDecoration: "none" }}>
          <Navigation size={16} />{t("showShopDirections")}
        </a>
      </div>
    </section>
    <section className="site-shell concierge-grid">
      <div className="map-card-container">
        <iframe
          src="https://maps.google.com/maps?q=12.935142,77.552528&hl=en&z=16&output=embed"
          width="100%"
          height="100%"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          title="Showroom Location"
        />
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="map-pin-address-card"
          aria-label="Open Bohra's Jewellery in Google Maps"
        >
          <div className="map-pin-title">
            <MapPin size={15} />
            <strong>Bohra’s Jewellery</strong>
          </div>
          <p className="map-pin-address">
            No 373, Opp. SBM Colony Bus Stop, 80ft Road, Srinivasanagar, Banashankari 1st Stage, Bangalore - 560050
          </p>
          <span className="map-pin-cta">{t("openGoogleMaps")} <ArrowRight size={12} /></span>
        </a>

        <a
          href={GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="map-directions-floating-btn"
        >
          <Navigation size={14} /> {t("showDirections")}
        </a>
      </div>

      <div className="concierge-card">
        <div>
          <Eyebrow>{t("directoryEyebrow")}</Eyebrow>
          <h2>Bohra’s Jewellery</h2>
        </div>

        <div className="contact-details-list">
          <ContactLine icon={<MapPin />} label={t("addressLandmark")}>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="address-map-link"
            >
              No 373, Opposite SBM Colony Bus Stop,<br />
              80ft Road, Srinivasanagar, Banashankari 1st Stage,<br />
              Bangalore - 560050, Karnataka
            </a>
          </ContactLine>
          <ContactLine icon={<Phone />} label={t("directHelpline")}>
            <a href="tel:+919876543210" className="contact-link">+91 98765 43210</a>
          </ContactLine>
          <ContactLine icon={<Mail />} label={t("emailConcierge")}>
            <a href="mailto:hello@bohrasjewellers.com" className="contact-link">hello@bohrasjewellers.com</a>
          </ContactLine>
          <ContactLine icon={<CalendarDays />} label={t("storeHours")}>Monday – Sunday: 10:00 AM – 8:30 PM (Open 7 Days)</ContactLine>
        </div>

        <a
          href={GOOGLE_MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="gold-button showroom-directions-btn"
          style={{ textDecoration: "none" }}
        >
          <Navigation size={16} /> {t("showShopDirections")}
        </a>
      </div>
    </section>
    <section className="site-shell social-connect-section">
      <div className="section-header-center">
        <Eyebrow>Direct Social Platforms</Eyebrow>
        <h2>Connect With Us Online</h2>
      </div>

      <div className="social-logos-row">
        <a
          href="https://wa.me/919876543210?text=Hi%20Bohra's%20Jewellery,%20I%20would%20like%20to%20enquire%20about%20your%20jewellery%20collection."
          target="_blank"
          rel="noreferrer"
          className="social-logo-btn"
          aria-label="WhatsApp"
        >
          <div className="social-logo-icon whatsapp">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.81 11.81 0 005.711 1.454h.005c6.554 0 11.89-5.336 11.894-11.893a11.82 11.82 0 00-3.48-8.413"/>
            </svg>
          </div>
          <span>WhatsApp</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="social-logo-btn"
          aria-label="Instagram"
        >
          <div className="social-logo-icon instagram">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <span>Instagram</span>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="social-logo-btn"
          aria-label="Facebook"
        >
          <div className="social-logo-icon facebook">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
          <span>Facebook</span>
        </a>
      </div>
    </section>
    <section className="site-shell contact-trust">
      <blockquote style={{ margin: "0" }}>{t("legacyQuote1")}<br /><em>{t("legacyQuote2")}</em></blockquote>
    </section>
  </main>;
}

function ContactLine({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="contact-line">
      <span className="contact-line-icon">{icon}</span>
      <div className="contact-line-content">
        <strong className="contact-line-label">{label}</strong>
        <div className="contact-line-value">{children}</div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();
  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <div className="footer-col brand-col">
          <Link to="/" className="brand" aria-label="Bohra's Jewellery home">
            <img src={officialLogoMark} alt="Bohra's Jewellery logo mark" className="brand-icon-img" />
            <div className="brand-text">
              <strong className="brand-name">Bohra’s Jewellery</strong>
              <small className="brand-slogan">{t("tagline")}</small>
            </div>
          </Link>
          <p className="footer-tagline">
            {t("footerTagline")}
          </p>
          <div className="footer-badge">
            <ShieldCheck size={15} /> <span>{t("bisHallmarkedBadge")}</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t("footerNavigation")}</h4>
          <ul className="footer-links">
            <li><Link to="/">{t("home")}</Link></li>
            <li><Link to="/collections">{t("collections")}</Link></li>
            <li><Link to="/about">{t("about")}</Link></li>
            <li><Link to="/contact">{t("contact")}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t("footerCategories")}</h4>
          <ul className="footer-links">
            <li><Link to="/collections">{t("catNecklaces")}</Link></li>
            <li><Link to="/collections">{t("catEarrings")}</Link></li>
            <li><Link to="/collections">{t("catBangles")}</Link></li>
            <li><Link to="/collections">{t("catRings")}</Link></li>
            <li><Link to="/collections">{t("catChains")}</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>{t("footerVisitShowroom")}</h4>
          <ul className="footer-contact-list">
            <li>
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>No 373, 80ft Road, Banashankari 1st Stage, Bangalore - 560050</span>
              </a>
            </li>
            <li>
              <a href="tel:+919876543210" className="footer-contact-item">
                <Phone size={16} className="contact-icon" />
                <span>+91 98765 43210</span>
              </a>
            </li>
            <li>
              <a href="mailto:hello@bohrasjewellers.com" className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <span>hello@bohrasjewellers.com</span>
              </a>
            </li>
            <li>
              <div className="footer-contact-item static">
                <CalendarDays size={16} className="contact-icon" />
                <span>Mon – Sun: 10:00 AM – 8:00 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-shell bottom-inner">
          <p>© {new Date().getFullYear()} Bohra’s Jewellery. {t("rightsReserved")}</p>
          <p>{t("fineJewelleryTag")}</p>
        </div>
      </div>
    </footer>
  );
}