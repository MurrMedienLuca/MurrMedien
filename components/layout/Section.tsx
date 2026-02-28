import React from "react"

type SectionProps = {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

const Section = ({ children, className, title, description }: SectionProps) => {
  return (
    <section className={`max-w-5xl mx-auto px-6 py-16 ${className ?? ""}`}>
      {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}

      {description && <p className="text-gray-600 text-lg pb-6">{description}</p>}

      {children && children}
    </section>
  )
}

export default Section
