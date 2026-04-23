# Andrasta Marine Frontend PRD

**Document version:** v0.1  
**Project:** Andrasta Marine website frontend  
**Brand/domain:** Andrasta Marine / `andrastamarine.com`  
**Hosting target:** AWS Amplify Hosting  
**Document type:** Product Requirements Document (Frontend)  
**Status:** Initial draft for first build  

---

## 1. Purpose

This PRD defines the requirements for the initial frontend website for **Andrasta Marine**, an AUV/ASV developer focused on offshore inspection and persistent maritime awareness.

The website should establish immediate credibility with technical, commercial, and partner audiences. It should feel **slick, high-tech, serious, and operationally credible**, while remaining restrained and industrial rather than flashy or startup-generic.

The initial build is intended to be a strong first go, with some content areas intentionally underspecified and implemented using placeholders where appropriate.

---

## 2. Product Objective

Build a production-ready company website frontend that:

- communicates the Andrasta Marine mission clearly
- explains the operational problem and the company’s solution
- presents the technology and product lines in a credible OEM-style format
- provides a basis for future case studies, team additions, partner additions, and product detail expansion
- is straightforward to host and maintain on AWS Amplify

---

## 3. Primary Goals

### 3.1 Business goals

- establish Andrasta Marine as a credible offshore autonomy company
- create an investable and partnership-friendly first impression
- support future outreach to customers, partners, funders, and technical stakeholders
- provide a foundation for future expansion into deeper product and case-study content

### 3.2 User goals

A visitor should quickly understand:

- what Andrasta Marine does
- why the operating model is different from conventional offshore operations
- what the core technology proposition is
- what product families exist or are planned
- how to contact the company

### 3.3 Frontend goals

- look modern and technically serious
- load quickly and work well on desktop and mobile
- use a modular component structure for easy future editing
- support placeholder content cleanly without looking incomplete

---

## 4. Target Audiences

### 4.1 Primary audiences

- offshore operators
- inspection and survey stakeholders
- maritime technology partners
- sensor OEMs
- potential strategic investors
- engineering and technical collaborators

### 4.2 Secondary audiences

- media
- recruitment candidates
- broader maritime innovation ecosystem
- policy or enforcement stakeholders interested in persistent maritime awareness use cases

---

## 5. Brand and Design Direction

The website should feel:

- **credible**
- **high-tech**
- **restrained**
- **maritime / offshore / industrial**
- **serious rather than playful**

### 5.1 Visual character

Preferred traits:

- dark or near-dark palette
- premium industrial feel
- strong typography
- crisp spacing and layout discipline
- subtle motion only
- systems-oriented or technical visual cues
- room for future high-quality renders and diagrams

Avoid:

- generic SaaS styling
- excessive gradients
- cartoonish iconography
- overhyped copywriting
- consumer startup aesthetics

### 5.2 Reference style direction

The frontend should take broad inspiration from the presentation style of companies such as:

- Saab
- Kongsberg
- Kraken Robotics

This does **not** mean copying visual identity, only using similar principles:

- strong hero statement
- modular capability sections
- restrained calls to action
- product/company credibility over marketing fluff

---

## 6. Recommended Technical Direction

### 6.1 Frontend stack

Recommended:

- **Next.js** with App Router
- **TypeScript**
- **Tailwind CSS**

### 6.2 Hosting

- target deployment on **AWS Amplify Hosting**
- architecture should be static-first or static-friendly where practical for v1
- easy CI/CD from Git is preferred

### 6.3 Engineering principles

- semantic HTML
- accessibility-minded structure
- responsive by default
- lightweight dependency footprint
- modular reusable components
- content separated from presentation where practical

---

## 7. Information Architecture

Recommended top-level site structure:

1. Homepage
2. Our Solution
3. Technology
4. Product Lines
5. About Us
6. Case Studies
7. Contact

This can be implemented either as:

- a multi-section homepage with anchored sections, plus dedicated pages where appropriate, or
- a multi-page site with a homepage and dedicated internal routes

**Preferred v1 approach:** a clean multi-page structure, with the homepage acting as the primary overview.

---

## 8. Sitemap

```text
/
/our-solution
/technology
/product-lines
/about
/case-studies
/contact
```

Optional future routes:

```text
/product-lines/andramini
/product-lines/andra40
/case-studies/north-sea-emissions-enforcement
/technology/andrabeam
/technology/andrafield
/technology/andrarise
```

---

## 9. Homepage Requirements

## 9.1 Purpose

The homepage must provide an immediate overview of:

- mission
- core system concept
- operational value proposition
- product families
- technology credibility
- key CTA path toward contact

## 9.2 Hero section

Include:

- mission statement: **“Redefine delivery of challenging offshore operations”**
- normal render of AUV / semi-sub system
- supporting positioning copy:

> A low-noise, hydrogen-powered autonomous vessel system providing persistent maritime awareness, enabling continuous evidence collection and reducing reliance on high-cost assets.

Hero goals:

- quickly communicate the company category and seriousness
- visually anchor the site with a credible vessel/system presentation
- avoid exaggerated claims or excessive marketing treatment

## 9.3 Homepage content blocks

Recommended order:

1. Hero
2. Mission / positioning summary
3. Our Solution summary
4. Technology summary
5. Product lines preview
6. Case study highlight
7. About / partners preview
8. Contact CTA

## 9.4 Homepage CTAs

Primary CTA examples:

- Explore Our Solution
- View Product Lines
- Contact Andrasta Marine

CTA style should be restrained and professional.

---

## 10. Our Solution Page Requirements

## 10.1 Purpose

Explain the problem with existing offshore inspection and awareness models, and why Andrasta Marine’s approach is structurally different.

## 10.2 Required problem framing

The page should communicate that:

- support fleets and boat-deployed operations are too operational-expenditure heavy
- many operations rely too heavily on “mother” systems
- marine subsurface systems are generally tethered or battery-operated
- many such systems must return to deck for charging
- this constrains time on task and economic utilisation
- current approaches are emissions-intensive and operationally wasteful

## 10.3 Required solution framing

The page should present the Andrasta Marine approach as enabling:

- waypoint return to home port
- fuel dropped along the system’s path
- in-situ refuelling using marinized, low-cost fuelling robots
- deployment by helicopter or transport aircraft as well as conventional marine methods
- maximum flexibility in configuration and delivery
- improved time on task
- lower OPEX potential
- lower operational disturbance and reduced emissions intensity

## 10.4 Required design principle blocks

Include content blocks around:

- designed for automated and remote operation from day 1
- design-for-manufacture approach considering hydrogen and light air/marine deployment
- potential for low cost despite advanced system architecture
- de-risked powertrain using modern rugged hydrogen fuel cell + battery powertrain proven in harsh environments
- operation above or below water within the initial design envelope
- persistent, low-disturbance measurement and awareness

## 10.5 UX requirements

- use diagrams/cards/section blocks rather than a long wall of text
- make the operational comparison easy to scan
- retain a technical, credible tone

---

## 11. Technology Page Requirements

## 11.1 Purpose

Present the enabling technologies in a modular and credible way, without overspecifying immature details.

## 11.2 Required technology themes

Include sections for:

### 11.2.1 Underwater refuelling using robot

- describe in-situ refuelling concept
- emphasize system persistence and reduced need for deck recovery

### 11.2.2 Airdropping of system + fuelling robot

- communicate deployment flexibility
- present as an operational capability concept within intended use cases

### 11.2.3 Low-noise, high-loiter performance

- position quiet propulsion and long endurance as core value drivers

### 11.2.4 Hydrogen-electric propulsion architecture

- hydrogeneration / hydrogen-powered fuel-cell electric system
- direct-drive motor
- contrarotating prop concept to extend range without introducing unnecessary noise

### 11.2.5 Onboard storage concept

- best-in-class onboard oxygen and hydrogen hydride storage
- simple pressure-driven operation

### 11.2.6 Low-pressure hydrogen operation

- position low-pressure operation as a major deployment and safety advantage
- communicate that this improves suitability across environments relative to higher-pressure alternatives

### 11.2.7 Civil safety features

- mention standard Lloyd’s-style safety features
- include buoyancy pack system toward civil-use credibility

### 11.2.8 Sensor / payload families

Provide modular blocks for:

- **AndraBeam**
- **AndraField**
- **AndraRise**

These may be presented as:

- payload families
- sensor integration variants
- configurable mission packages

Placeholder content is acceptable where details are not final.

## 11.3 UX requirements

- technology blocks should be visually modular
- avoid pretending that speculative engineering details are fully frozen
- keep language credible and engineering-informed

---

## 12. Product Lines Page Requirements

## 12.1 Purpose

Present the initial product family in a structured, expandable way.

## 12.2 Product line 1: AndraMini

Required positioning:

- approximately **1 m3 system**
- “effector form factor”
- designed to integrate with existing marine supply chain equipment

Required feature highlights:

- persistent, low-noise sensing
- limited repositioning

Required UI elements:

- product overview card or block
- system performance card
- performance values intentionally left blank or placeholder where not yet specified

## 12.3 Product line 2: Andra40

Required positioning:

- approximately **16.9 m3**
- **40 ft ISO container scale system**
- designed around lowest overall cost and flexible operational performance

Required feature highlights:

- larger coverage area

Required UI elements:

- product overview card or block
- system performance card
- performance values intentionally left blank or placeholder where not yet specified

## 12.4 UX requirements

- products should feel like serious system offerings, not e-commerce tiles
- cards should support later addition of imagery and downloadable spec sheets
- layout should scale to future product additions

---

## 13. About Us Page Requirements

## 13.1 Purpose

Provide a credible but lightweight company overview until fuller corporate content is available.

## 13.2 Required sections

### 13.2.1 Team

- 6 cards
- blank / placeholder for now
- structure should allow later addition of name, role, image, and short profile

### 13.2.2 Partners

- 3 cards
- blank / placeholder for now
- structure should allow later addition of partner logo, role, and short note

## 13.3 UX requirements

- placeholders should still look intentional and polished
- avoid making the page feel empty
- use layout that makes later content population easy

---

## 14. Case Studies Page Requirements

## 14.1 Purpose

Demonstrate real-world application logic and commercial relevance.

## 14.2 Required initial case study

### North Sea emissions enforcement

Framing line:

> Turning intermittent detection into continuous evidence.

## 14.3 Expected content structure

- challenge
- current operational limitation
- Andrasta Marine approach
- value of persistent evidence collection
- likely operational outcomes / benefits

## 14.4 UX requirements

- initial implementation may contain one case study only
- page must be structured to support later addition of further case studies
- avoid sounding like a press release

---

## 15. Contact Page Requirements

## 15.1 Purpose

Provide a straightforward route for enquiries from partners, customers, and collaborators.

## 15.2 Required content

- company details block
- basic contact form
- email destination currently intended as `info@...` but must be confirmed before production if uncertainty remains

**Important:** there has been inconsistency in the supplied email spelling. Do **not** silently hardcode an unverified final production email without confirmation.

## 15.3 Required form fields

- Name
- Company
- Email
- Subject
- Message

## 15.4 UX requirements

- clean validated form
- clear success and error states
- accessible form labeling
- frontend-only mock submission is acceptable for v1 if backend workflow is not yet defined

---

## 16. Functional Requirements

The frontend must:

- support responsive layout across desktop, tablet, and mobile
- provide clear navigation between all primary sections/pages
- support placeholder cards without visual breakage
- support modular content blocks for future editing
- include metadata and basic SEO fields
- provide a contact form experience with validation
- support future addition of imagery, diagrams, and renders without major redesign

---

## 17. Non-Functional Requirements

### 17.1 Performance

- fast load times
- efficient asset handling
- minimal unnecessary JavaScript

### 17.2 Accessibility

- semantic page structure
- keyboard navigability
- readable contrast and typography
- form accessibility

### 17.3 Maintainability

- reusable components
- clear file structure
- content kept easy to revise

### 17.4 Credibility

- no inflated claims
- no invented performance numbers
- no immature content presented as final certification or proof

---

## 18. Content Requirements and Placeholder Policy

Because some areas are intentionally underspecified, placeholders are acceptable for v1 where content has not been finalized.

### Placeholder-appropriate areas

- team member cards
- partner cards
- performance/spec values
- some payload family detail
- detailed imagery/renders if not yet complete

### Placeholder rule

Use **meaningful placeholders** rather than lorem ipsum where possible.

Examples:

- “Performance data to be published”
- “Partner details to be announced”
- “Payload package overview in development”

---

## 19. Suggested Component Model

Recommended reusable components:

- Navbar
- Footer
- Section wrapper
- Hero block
- Capability / technology card
- Product card
- Performance/spec card
- Case study card
- Team card
- Partner card
- Contact form
- CTA block

---

## 20. SEO and Metadata Requirements

Minimum requirements:

- page titles
- meta descriptions
- Open Graph basics
- favicon / app icon placeholders
- clean URL naming

Initial homepage description concept:

> Andrasta Marine develops low-noise, hydrogen-powered autonomous vessel systems for offshore inspection, persistent maritime awareness, and continuous evidence collection.

---

## 21. MVP Scope

The v1 launch should include:

- complete frontend structure for all primary pages
- coherent design system
- placeholder-ready content model
- core responsive layout
- basic SEO setup
- frontend-ready contact experience

The v1 launch does **not** need to include:

- CMS integration
- authenticated content areas
- deep backend services
- live data feeds
- downloadable technical libraries unless later specified

---

## 22. Out of Scope for v1

- customer portal
- investor portal
- blog/news system
- multi-language support
- advanced interactive 3D product viewer
- full content management backend
- detailed application workflow or careers system

---

## 23. Acceptance Criteria

The frontend should be considered acceptable for v1 when:

- the brand is consistently presented as **Andrasta Marine**
- all primary pages/sections are implemented
- the site visually reads as serious, modern, and credible
- the homepage clearly communicates mission and product category
- technology and product line sections are structured and understandable
- placeholder content is handled intentionally rather than awkwardly
- mobile and desktop layouts both work well
- the contact route is functional from a user-interface perspective
- the project is deployable on AWS Amplify Hosting

---

## 24. Risks and Open Items

### Open items to confirm

- final production contact email spelling and ownership
- final hero render / imagery assets
- actual performance card values for AndraMini and Andra40
- final language around certifications, Lloyd’s references, and proven harsh-environment claims
- final content for AndraBeam / AndraField / AndraRise
- team member and partner content

### Risks

- overspecifying immature technology could reduce credibility
- insufficient imagery could make the site feel thin unless placeholders are carefully handled
- unverified email/contact details could create avoidable operational issues

---

## 25. Future Enhancements

Potential later additions:

- detailed product pages
- downloadable brochures or PDFs
- richer case study library
- animated mission diagrams
- investor or partner materials
- CMS-backed content management
- map-based operational concept visualizations

---

## 26. Build Notes for Engineering

If implementing from this PRD:

- prioritize clean architecture over visual gimmicks
- use a static-friendly structure suitable for AWS Amplify
- separate structured content from components where practical
- preserve TODO markers for unknown content rather than guessing
- build the design so it still looks intentional with partial data

---

## 27. Working Copy Snippets

### Mission statement

**Redefine delivery of challenging offshore operations**

### Hero support copy

**A low-noise, hydrogen-powered autonomous vessel system providing persistent maritime awareness, enabling continuous evidence collection and reducing reliance on high-cost assets.**

### Case study framing

**Turning intermittent detection into continuous evidence**

---

## 28. Summary

The Andrasta Marine frontend should function as a serious first public-facing product/company website: technically credible, visually disciplined, and structured for growth. It should communicate a differentiated maritime autonomy model without overclaiming, while leaving room for future detail as the business and product architecture mature.