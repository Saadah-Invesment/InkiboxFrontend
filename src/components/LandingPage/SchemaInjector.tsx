"use client";
import { usePathname } from "next/navigation";
import Script from "next/script";

// Global organization schema (always present)
const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Namaio",
    url: "https://auvira.com/",
    logo: "https://auvira.com/_next/image?url=%2Fimages%2Ftezcai-logo.png&w=640&q=75",
    email: "info@auvira.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Ali Salem Obaid Bin Wanis Building, Al Dana East 4_2 P.O. Box 41014",
        addressLocality: "Abu Dhabi",
        postalCode: "00000",
        addressCountry: "AE",
    },
    parentOrganization: {
        "@type": "Organization",
        name: "Saadah Investment LLC",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Abu Dhabi",
            postalCode: "00000",
            addressCountry: "AE",
        },
    },
    sameAs: [
        "https://www.linkedin.com/company/auvira",
        "https://www.instagram.com/auvira",
        "https://www.tiktok.com/@auvira.com",
        "https://www.facebook.com/auvira",
        "https://www.youtube.com/@auvira",
        "https://x.com/tezcai_",
    ],
};

// Page-specific schemas
const pageSchemas: Record<string, any> = {
    "/how-it-works": {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://auvira.com/how-it-works",
        name: "How It Works",
        description:
            "Learn how to get started with Namaio's automated crypto trading platform in three simple steps: connect your exchange, fund your account, and let Namaio trade automatically.",
        mainEntity: {
            "@type": "HowTo",
            name: "Getting Started with Namaio in 3 Simple Steps",
            step: [
                {
                    "@type": "HowToStep",
                    name: "Connect your Crypto Exchange account",
                    text: "Connect your exchange API securely via read-only API with trading permission enabled and withdrawals disabled. Namaio never takes custody.",
                },
                {
                    "@type": "HowToStep",
                    name: "Fund your Crypto Exchange account",
                    text: "Ensure you have funds in your exchange account. Start with any amount you’re comfortable with. Recommended starting around US $3,000, not exceeding US $2,000,000.",
                },
                {
                    "@type": "HowToStep",
                    name: "Enable automated trading",
                    text: "Activate 24/7 automated trading. Namaio's smart software handles all market analysis and execution while you track performance in real-time.",
                },
            ],
            totalTime: "PT5M",
            tool: "Namaio Automated Trading Platform",
            estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "3000",
            },
            audience: {
                "@type": "Audience",
                audienceType: "Crypto Traders",
            },
        },
    },
    



};

export default function SchemaInjector() {
    const pathname = usePathname();
    const normalizedPath = pathname.replace(/\/$/, '');
    const pageSchema = pageSchemas[normalizedPath];

    return (
        <>
            {/* Global Organization Schema */}
            <Script
                id="ld-org"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
            />
            {/* Page-specific Schema */}
            {pageSchema && (
                <Script
                    id={`ld-page-${pathname}`}
                    type="application/ld+json"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
                />
            )}
        </>
    );
}
