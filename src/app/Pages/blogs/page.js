import React from 'react'
import Blog from '@/app/Components/blog/blog'

export default function page() {
  return (
    <>
      <Blog />

    </>
  )
}


export const metadata = {
  title: "Ocean Tech Zone - Digital Marketing Agency in Delhi, India",
  description: "Drive traffic, boost conversions, and dominate rankings with our digital marketing agency. Contact us today to elevate your online strategy and grow success.",
  keywords:
    "Digital Marketing Agency,Digital Marketing Agency in Delhi,Digital Marketing Solutions,Search Engine Optimization,website Desiging,Delhi-NCR,SEO Services,PPC Advertising,Social Media Marketing,Content Marketing,Email Marketing,Online Marketing,Digital Strategy,Marketing Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://oceantechzone.in/Pages/blogs",
  },
  icons: {
    icon: "/meta.ico",     // favicon from your logo
    shortcut: "/logo.jpg", // browser shortcut
    apple: "/logo.jpg",    // iOS home screen icon
  },
  verification: {
    google: "lPHNTvgJ0OGhwK75Y7vjisPzK59Km_eoymKvRRQGn1I",
  },
  other: {
    Keywords: "ocean tech zone"
  }
};