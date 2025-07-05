'use client';

import { HeroSection } from '@/components/sections/hero-section';
import { ProfessionalSummary } from '@/components/sections/professional-summary';
import { WorkExperience } from '@/components/sections/work-experience';
import { ProjectsPreview } from '@/components/sections/projects-preview';
import { Education } from '@/components/sections/education';
import { TechnicalSkills } from '@/components/sections/technical-skills';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProfessionalSummary />
      <WorkExperience />
      <ProjectsPreview />
      <TechnicalSkills />
      <Education />
      <ContactSection />
    </div>
  );
}