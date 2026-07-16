import type { Project } from "../types";

/**
 * Orlik Gallery — end-to-end technical delivery of the gallery's website
 * and WooCommerce e-commerce platform.
 *
 * Honesty boundaries: the brand, the artworks and the photography belong to
 * Orlik Gallery and its artists — this case study presents ONLY the digital
 * implementation. Public facts (platform generators, features, locations,
 * certificates of authenticity, worldwide shipping) verified on the official
 * website; sources and screenshot register in ASSETS.md.
 */
export const orlikGallery: Project = {
  id: "orlik-gallery",
  slug: "orlik-gallery",
  isSample: false,
  featured: true,
  order: 15,

  title: { el: "Orlik Gallery", en: "Orlik Gallery" },
  shortDescription: {
    el: "Website και e-commerce πλατφόρμα για contemporary art gallery στην Αθήνα — WordPress, WooCommerce και custom tooling, σε πλήρη τεχνική υλοποίηση.",
    en: "Website and e-commerce platform for a contemporary art gallery in Athens — WordPress, WooCommerce and custom tooling, delivered as a complete technical build.",
  },
  description: {
    el: [
      "Η Orlik Gallery είναι contemporary art gallery με φυσικές τοποθεσίες στην Αθήνα: παρουσιάζει καλλιτέχνες και συλλογές πρωτότυπων έργων, με πιστοποιητικά αυθεντικότητας και παγκόσμια αποστολή, όπως αναφέρεται στο επίσημο website της.",
      "Το ψηφιακό της οικοσύστημα έπρεπε να κάνει δύο πράγματα ταυτόχρονα: να παρουσιάζει την τέχνη με τον σεβασμό και την οπτική ποιότητα που της αξίζει, και να λειτουργεί ως πραγματικό κανάλι πωλήσεων — από την ανακάλυψη ενός καλλιτέχνη έως την ολοκλήρωση μιας αγοράς.",
      "Η τεχνική υλοποίηση του website και των custom λειτουργιών του έγινε εξ ολοκλήρου από εμάς — από το στήσιμο της πλατφόρμας έως τα εργαλεία διαχείρισης δεδομένων και τη συντήρηση σε παραγωγή. Το brand, τα έργα τέχνης και το φωτογραφικό υλικό ανήκουν στη gallery και τους καλλιτέχνες της.",
    ],
    en: [
      "Orlik Gallery is a contemporary art gallery with physical locations in Athens: it represents artists and collections of original works, with certificates of authenticity and worldwide shipping, as stated on its official website.",
      "Its digital ecosystem had to do two things at once: present art with the respect and visual quality it deserves, and operate as a real sales channel — from discovering an artist to completing a purchase.",
      "The technical delivery of the website and its custom functionality was carried out entirely by us — from platform build to data-management tooling and production maintenance. The brand, the artworks and the photography belong to the gallery and its artists.",
    ],
  },

  organization: { el: "Orlik Gallery", en: "Orlik Gallery" },
  category: "ecommerce",
  participation: "end-to-end",
  industry: { el: "Τέχνη & Πολιτισμός / E-commerce", en: "Art & Culture / E-commerce" },
  industryKey: "art-culture",
  period: "",
  status: "live",

  role: {
    el: "Lead WordPress Developer · E-commerce Developer",
    en: "Lead WordPress Developer · E-commerce Developer",
  },
  teamContext: {
    el: "Πλήρης τεχνική ιδιοκτησία της ψηφιακής πλατφόρμας: υλοποίηση, custom ανάπτυξη, debugging και εξέλιξη σε παραγωγή.",
    en: "Full technical ownership of the digital platform: implementation, custom development, debugging and production evolution.",
  },
  responsibilities: {
    el: [
      "WordPress development και Elementor Pro implementation",
      "WooCommerce configuration και customization",
      "Custom PHP ανάπτυξη, scripts και utilities",
      "Custom εργαλείο μαζικής εισαγωγής SEO metadata από Excel (PhpSpreadsheet)",
      "Custom mapping για WooCommerce product categories",
      "WooCommerce archive & product customization, variation swatches",
      "Debugging WordPress/PHP, cache και library/ZipArchive issues",
      "Responsive βελτιώσεις, custom JavaScript/CSS, συντήρηση σε παραγωγή",
    ],
    en: [
      "WordPress development and Elementor Pro implementation",
      "WooCommerce configuration and customisation",
      "Custom PHP development, scripts and utilities",
      "Custom bulk SEO-metadata import tooling from Excel (PhpSpreadsheet)",
      "Custom mapping for WooCommerce product categories",
      "WooCommerce archive & product customisation, variation swatches",
      "Debugging WordPress/PHP, cache and library/ZipArchive issues",
      "Responsive improvements, custom JavaScript/CSS, production maintenance",
    ],
  },
  contributionSummary: {
    el: "Υλοποιήσαμε και διαμορφώσαμε ολόκληρη την ψηφιακή πλατφόρμα της Orlik Gallery — website, e-commerce και custom tooling — και τη συντηρούμε ως ζωντανό σύστημα σε παραγωγή.",
    en: "We built and shaped Orlik Gallery's entire digital platform — website, e-commerce and custom tooling — and maintain it as a live production system.",
  },

  challenge: {
    el: "Ένα ηλεκτρονικό κατάστημα έργων τέχνης δεν πουλά «προϊόντα» — πουλά εμπιστοσύνη και αισθητική. Η πλατφόρμα έπρεπε να αναδεικνύει κάθε έργο και κάθε καλλιτέχνη με editorial ποιότητα, να υποστηρίζει πρωτότυπα έργα, prints και limited editions με διαφορετική εμπορική λογική το καθένα, και να παραμένει εύκολα διαχειρίσιμη και ορατή στις μηχανές αναζήτησης καθώς ο κατάλογος μεγαλώνει.",
    en: "An online store for art doesn't sell “products” — it sells trust and aesthetics. The platform had to showcase every artwork and artist with editorial quality, support originals, prints and limited editions each with its own commercial logic, and remain easy to manage and visible to search engines as the catalogue grows.",
  },
  approach: {
    el: "Επιλέξαμε WordPress και WooCommerce ως βάση — ώριμη, διαχειρίσιμη από τη gallery, επεκτάσιμη — με Elementor Pro για ευέλικτο premium layout και custom PHP εκεί όπου τα έτοιμα εργαλεία σταματούν: στη δομή του καταλόγου, στην παρουσίαση των προϊόντων και στη μαζική διαχείριση δεδομένων και metadata.",
    en: "We chose WordPress and WooCommerce as the foundation — mature, manageable by the gallery, extensible — with Elementor Pro for flexible premium layouts and custom PHP where off-the-shelf tools stop: catalogue structure, product presentation and bulk data & metadata management.",
  },
  solution: {
    el: "Ένα ενιαίο ψηφιακό οικοσύστημα: παρουσίαση καλλιτεχνών και συλλογών, θεματικές κατηγορίες έργων, online shop με πλήρη κατάλογο WooCommerce, σελίδες προϊόντων με παραλλαγές (πρωτότυπο, art print, limited edition) και variation swatches, καλάθι και checkout, editorial ενότητα News, σελίδες τοποθεσιών για τους φυσικούς χώρους, newsletter και πλήρως responsive εμπειρία.",
    en: "A single digital ecosystem: artist and collection presentation, thematic artwork categories, an online shop with a full WooCommerce catalogue, product pages with variations (original, art print, limited edition) and variation swatches, cart and checkout, an editorial News section, location pages for the physical spaces, a newsletter and a fully responsive experience.",
  },

  narrativeSections: [
    {
      heading: { el: "Ψηφιακή εμπειρία", en: "Digital experience" },
      paragraphs: {
        el: [
          "Η διαδρομή του επισκέπτη σχεδιάστηκε γύρω από την ανακάλυψη: από τη συλλογή στην αρχική, στον καλλιτέχνη, στο έργο, στην αγορά — με τις φωτογραφίες των έργων και των χώρων να παραμένουν πάντα πρωταγωνιστές. Το πολιτιστικό περιεχόμενο (νέα, παρουσιάσεις καλλιτεχνών, τοποθεσίες) δένει με το εμπορικό κομμάτι αντί να ζει χωριστά.",
        ],
        en: [
          "The visitor journey is built around discovery: from collection to homepage, to artist, to artwork, to purchase — with the artwork and gallery photography always in the leading role. Cultural content (news, artist features, locations) is woven into the commercial layer instead of living apart from it.",
        ],
      },
    },
    {
      heading: { el: "Υλοποίηση e-commerce", en: "E-commerce implementation" },
      paragraphs: {
        el: [
          "Ο κατάλογος οργανώθηκε σε θεματικές κατηγορίες έργων, με προϊόντα που υποστηρίζουν πολλαπλές εμπορικές μορφές — πρωτότυπο έργο, art print, limited edition — μέσα από WooCommerce variations και variation swatches. Οι σελίδες προϊόντων αναδεικνύουν το έργο και τα στοιχεία που χτίζουν εμπιστοσύνη, όπως το πιστοποιητικό αυθεντικότητας και η παγκόσμια αποστολή, μέχρι την ολοκλήρωση της αγοράς.",
        ],
        en: [
          "The catalogue is organised into thematic artwork categories, with products supporting multiple commercial forms — original work, art print, limited edition — through WooCommerce variations and variation swatches. Product pages foreground the artwork and the trust signals, such as the certificate of authenticity and worldwide shipping, all the way to checkout.",
        ],
      },
    },
    {
      heading: { el: "Custom WordPress ανάπτυξη", en: "Custom WordPress development" },
      paragraphs: {
        el: [
          "Πέρα από τη διαμόρφωση της πλατφόρμας, το έργο απαίτησε πραγματική ανάπτυξη: custom PHP scripts και utilities, προσαρμογές στα WooCommerce archives και στις σελίδες προϊόντων, custom JavaScript και CSS, και συστηματικό debugging σε επίπεδο παραγωγής — από προβλήματα cache έως ζητήματα ενσωμάτωσης βιβλιοθηκών όπως το ZipArchive.",
        ],
        en: [
          "Beyond platform configuration, the project required real development: custom PHP scripts and utilities, WooCommerce archive and product-page customisation, custom JavaScript and CSS, and systematic production-level debugging — from cache behaviour to library integration issues such as ZipArchive.",
        ],
      },
    },
    {
      heading: { el: "Αυτοματοποίηση SEO metadata", en: "SEO metadata automation" },
      paragraphs: {
        el: [
          "Το πιο ιδιαίτερο τεχνικό κομμάτι του έργου: ένα custom εργαλείο μαζικής εισαγωγής SEO metadata, χτισμένο σε PHP με PhpSpreadsheet. Τα metadata προετοιμάζονται σε Excel και εισάγονται αυτοματοποιημένα για την αρχική σελίδα, τις σελίδες WordPress, τα προϊόντα WooCommerce και τις κατηγορίες προϊόντων — με custom mapping για τη δομή των κατηγοριών.",
          "Έτσι, η βελτιστοποίηση του καταλόγου έγινε επαναλήψιμη διαδικασία αντί για χειροκίνητη εργασία σελίδα-σελίδα: το περιεχόμενο μπορεί να ενημερώνεται μαζικά, με συνέπεια και χωρίς παρέμβαση στον κώδικα.",
        ],
        en: [
          "The most distinctive technical piece of the project: a custom bulk SEO-metadata import tool, built in PHP with PhpSpreadsheet. Metadata is prepared in Excel and imported automatically for the homepage, WordPress pages, WooCommerce products and product categories — with custom mapping for the category structure.",
          "Catalogue optimisation thus became a repeatable process instead of page-by-page manual work: content can be updated in bulk, consistently, with no code changes involved.",
        ],
      },
    },
  ],

  outcome: {
    el: "Το website λειτουργεί σε παραγωγή ως η ψηφιακή παρουσία της Orlik Gallery και ως κανάλι πώλησης αυθεντικών έργων τέχνης — με πλατφόρμα που η ομάδα της gallery διαχειρίζεται καθημερινά και υποδομή δεδομένων που κλιμακώνεται μαζί με τον κατάλογο.",
    en: "The website runs in production as Orlik Gallery's digital presence and as a channel for selling original art — on a platform the gallery team manages day to day, with a data workflow that scales with the catalogue.",
  },

  keyFeatures: {
    el: [
      "Παρουσίαση καλλιτεχνών και συλλογών",
      "Θεματικές κατηγορίες έργων τέχνης",
      "Online shop με πλήρη κατάλογο WooCommerce",
      "Παραλλαγές προϊόντων: πρωτότυπα, prints, limited editions",
      "Καλάθι, checkout και πληρωμές",
      "Editorial ενότητα News",
      "Σελίδες φυσικών τοποθεσιών στην Αθήνα",
      "Newsletter και responsive εμπειρία",
      "SEO-optimized δομή περιεχομένου",
    ],
    en: [
      "Artist and collection presentation",
      "Thematic artwork categories",
      "Online shop with a full WooCommerce catalogue",
      "Product variations: originals, prints, limited editions",
      "Cart, checkout and payments",
      "Editorial News section",
      "Pages for the physical Athens locations",
      "Newsletter and responsive experience",
      "SEO-optimised content structure",
    ],
  },

  technologies: [
    "WordPress",
    "WooCommerce",
    "Elementor Pro",
    "PHP",
    "JavaScript",
    "jQuery",
    "HTML5",
    "CSS3",
    "MySQL",
    "PhpSpreadsheet",
  ],
  platforms: ["Web", "E-commerce"],

  logo: "/projects/orlik-gallery/logo.png",
  images: [
    {
      src: "/projects/orlik-gallery/home.jpg",
      alt: {
        el: "Η αρχική σελίδα του orlikgallery.com με τον χώρο της gallery και τη συλλογή",
        en: "The orlikgallery.com homepage with the gallery space and collection",
      },
      kind: "cover",
      aspect: 2880 / 2000,
      sourceUrl: "https://orlikgallery.com/",
      attribution: "Official website — © Orlik Gallery",
    },
    {
      src: "/projects/orlik-gallery/product.jpg",
      alt: {
        el: "Σελίδα έργου στο orlikgallery.com με παραλλαγές αγοράς (πρωτότυπο, art print, limited edition)",
        en: "Artwork page on orlikgallery.com with purchase variations (original, art print, limited edition)",
      },
      kind: "desktop",
      aspect: 2880 / 2000,
      sourceUrl: "https://orlikgallery.com/product/original-painting-athena-by-inna-orlik/",
      attribution: "Official website — © Orlik Gallery",
    },
    {
      src: "/projects/orlik-gallery/artists.jpg",
      alt: {
        el: "Η σελίδα καλλιτεχνών του orlikgallery.com",
        en: "The artists page on orlikgallery.com",
      },
      kind: "desktop",
      aspect: 2880 / 2000,
      sourceUrl: "https://orlikgallery.com/artists/",
      attribution: "Official website — © Orlik Gallery",
    },
    {
      src: "/projects/orlik-gallery/news.jpg",
      alt: {
        el: "Η editorial ενότητα News του orlikgallery.com",
        en: "The editorial News section on orlikgallery.com",
      },
      kind: "desktop",
      aspect: 2880 / 2000,
      sourceUrl: "https://orlikgallery.com/news/",
      attribution: "Official website — © Orlik Gallery",
    },
    {
      src: "/projects/orlik-gallery/locations.jpg",
      alt: {
        el: "Η σελίδα τοποθεσιών του orlikgallery.com με τον χώρο της gallery στην Αθήνα",
        en: "The locations page on orlikgallery.com with the gallery space in Athens",
      },
      kind: "desktop",
      aspect: 2880 / 2000,
      sourceUrl: "https://orlikgallery.com/locations/",
      attribution: "Official website — © Orlik Gallery",
    },
    {
      src: "/projects/orlik-gallery/mobile-home.jpg",
      alt: {
        el: "Η αρχική σελίδα του orlikgallery.com σε κινητό",
        en: "The orlikgallery.com homepage on mobile",
      },
      kind: "mobile",
      aspect: 780 / 1688,
      sourceUrl: "https://orlikgallery.com/",
      attribution: "Official website — © Orlik Gallery",
    },
    {
      src: "/projects/orlik-gallery/mobile-product.jpg",
      alt: {
        el: "Σελίδα έργου του orlikgallery.com σε κινητό",
        en: "An orlikgallery.com artwork page on mobile",
      },
      kind: "mobile",
      aspect: 780 / 1688,
      sourceUrl: "https://orlikgallery.com/product/original-painting-athena-by-inna-orlik/",
      attribution: "Official website — © Orlik Gallery",
    },
  ],

  links: {
    website: "https://orlikgallery.com/",
  },

  confidentiality: "public",
  allowScreenshots: true,
  disclaimer: {
    el: "Η Orlik Gallery, τα έργα τέχνης, τα λογότυπα, οι φωτογραφίες και τα εμπορικά σήματα ανήκουν στους αντίστοιχους ιδιοκτήτες τους. Η παρουσίαση αφορά την ανάπτυξη και τεχνική υλοποίηση του ψηφιακού έργου.",
    en: "Orlik Gallery, the artworks, logos, photography and trademarks belong to their respective owners. This presentation concerns the development and technical delivery of the digital project.",
  },

  relatedServices: ["web-development", "ecommerce", "maintenance-optimization"],

  seo: {
    title: {
      el: "Orlik Gallery — Website & E-commerce Υλοποίηση | Case Study SCALEQ",
      en: "Orlik Gallery — Website & E-commerce Build | SCALEQ Case Study",
    },
    description: {
      el: "Πλήρης τεχνική υλοποίηση του website και του WooCommerce e-shop της Orlik Gallery: WordPress, Elementor Pro, custom PHP tooling και αυτοματοποιημένη εισαγωγή SEO metadata από Excel.",
      en: "Complete technical delivery of Orlik Gallery's website and WooCommerce shop: WordPress, Elementor Pro, custom PHP tooling and automated SEO-metadata import from Excel.",
    },
  },
};
