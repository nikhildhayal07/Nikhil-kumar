"use client"

import { Code2, Cloud, Database, Brain, Users, Terminal, Cpu, Server, GitBranch } from "lucide-react"
import { AnimatedCard } from "@/components/animated-card"

const technicalSkills = [
  { name: "C++", level: 85, icon: Code2 },
  { name: "Python", level: 75, icon: Code2 },
  { name: "Data Structures", level: 80, icon: Brain },
  { name: "AWS", level: 70, icon: Cloud },
  { name: "Docker", level: 65, icon: Server },
  { name: "Linux", level: 75, icon: Terminal },
  { name: "SQL", level: 70, icon: Database },
  { name: "Git", level: 80, icon: GitBranch },
]

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["C++", "Python", "C", "Java"],
    color: "text-cyan-400",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Linux", "CI/CD"],
    color: "text-orange-400",
  },
  {
    title: "Core CS",
    icon: Brain,
    skills: ["DSA", "System Design", "OOPs", "File Handling"],
    color: "text-purple-400",
  },
  {
    title: "Development",
    icon: Terminal,
    skills: ["Git", "Web Design", "Console Apps", "APIs"],
    color: "text-green-400",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MS SQL Server", "Data Management"],
    color: "text-blue-400",
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Teamwork", "Leadership", "Adaptability"],
    color: "text-pink-400",
  },
]

function SkillBar({ name, level, icon: Icon }: { name: string; level: number; icon: typeof Code2 }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning, hands-on projects, 
            and continuous self-improvement.
          </p>
        </div>

        {/* Skill Progress Bars */}
        <AnimatedCard delay={0}>
          <div className="p-8 rounded-2xl bg-card border border-border mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </AnimatedCard>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard key={category.title} delay={index * 100}>
              <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-all hover:scale-105 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
