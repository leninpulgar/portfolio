'use client'

import Link from 'next/link'
import React from 'react'
import { IoLocationOutline, IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5'

export const AboutMe = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mt-5 mb-5">Lenin Pulgar</h1>

      <div className="my-5 flex flex-col sm:flex-row gap-5">
        {/* Contact information, stacked in mobile view */}
        <span className="flex gap-3 items-center">
          <IoPhonePortraitOutline />
          <Link className="hover:underline" href="tel:7734847698">773 484 7698</Link>
        </span>
        <span className="flex gap-3 items-center">
          <IoMailOutline />
          <Link className="hover:underline" href="mailto:lenindpulgar@gmail.com">lenindpulgar@gmail.com</Link>
        </span>
        <span className="flex gap-3 items-center">
          <IoLocationOutline className="inline-block mr-2" />
          Chicago, IL
        </span>
      </div>

      <p className="text-base sm:text-lg leading-relaxed">
        <strong>Software Engineer</strong> with over 8 years of experience, specializing in content structure diagramming, stylesheet design, and
        user interaction improvements. Expert in a wide range of programming languages and technologies, with a strong focus on
        UX/UI design and creating end-to-end digital solutions. Proven track record in leading cross-functional teams and projects
        from conception to delivery, with a solid emphasis on user research and delivering cohesive, customer-centric experiences.
      </p>
    </div>
  )
}
