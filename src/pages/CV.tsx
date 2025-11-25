import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

const CV = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Curriculum Vitae
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete overview of my academic and professional journey
            </p>
          </div>

          <div className="bg-card border-2 border-border p-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground">
                Pritom Paul
              </h2>
              <div className="text-muted-foreground space-y-1">
                <p>Sylhet, Bangladesh</p>
                <p>Email: pritompaul.cse@gmail.com</p>
                <p>Phone: (+880) 1718382009</p>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/PritomPaul99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://linkedin.com/in/pritompaul1920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    LinkedIn <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Education
              </h3>
              <div>
                <p className="font-semibold text-foreground">
                  B.Sc. (Engineering), Computer Science and Engineering
                </p>
                <p className="text-muted-foreground">
                  North East University Bangladesh, May 2024
                </p>
                <p className="text-foreground">CGPA: 3.71/4.00</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Research Interests
              </h3>
              <p className="text-foreground/80">
                Deep Learning • Computer Vision • Natural Language Processing •
                Large Language Models • Reinforcement Learning • AI
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Professional Summary
              </h3>
              <p className="text-foreground/80">
                Computer Science graduate with expertise in software
                engineering, machine learning, and education. Currently serving
                as Adjunct Faculty teaching 200+ students while exploring
                cutting-edge AI research. Former Software Engineer with
                experience in building scalable web applications and real-time
                communication systems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="assets/Pritom_Paul_CV_2025.pdf"
                download="PritomPaul_CV.pdf"
                className="inline-flex"
                aria-label="Download Pritom Paul's CV as PDF"
              >
                <Button className="gap-2">
                  <Download size={18} />
                  Download CV (PDF)
                </Button>
              </a>

              <a
                href="https://drive.google.com/file/d/1MysPBk78gtwz3ZwqPuMPY4dVRx0wJ-ZU/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
                aria-label="View online version of Pritom Paul's CV"
              >
                <Button variant="outline" className="gap-2">
                  <ExternalLink size={18} />
                  View Online Version
                </Button>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">3+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card border border-border p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">3</p>
              <p className="text-sm text-muted-foreground">
                ICPC Participations
              </p>
            </div>
            <div className="bg-card border border-border p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">5+</p>
              <p className="text-sm text-muted-foreground">
                National Level Contest Participations
              </p>
            </div>
            <div className="bg-card border border-border p-6 text-center">
              <p className="text-3xl font-bold text-foreground mb-2">10+</p>
              <p className="text-sm text-muted-foreground">
                Technologies Mastered
              </p>
            </div>
          </div>

          <div className="bg-accent p-6 border-l-4 border-primary">
            <p className="text-foreground/80 italic">
              "Passionate about leveraging artificial intelligence to solve
              real-world problems and committed to nurturing the next generation
              of computer scientists through quality education and mentorship."
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CV;
