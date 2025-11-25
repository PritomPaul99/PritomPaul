import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex justify-center md:justify-start">
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border border-border">
                  <img
                    src="src/pages/assets/profile.jpg"
                    alt="Pritom Paul"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground">
                  Pritom Paul
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Software Engineer | Researcher | Educator
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-foreground/80 max-w-2xl">
                  Computer Science graduate passionate about Deep Learning,
                  Computer Vision, and Natural Language Processing. Currently
                  serving as an Adjunct Faculty at North East University
                  Bangladesh while exploring cutting-edge research in AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2">
                    <Mail size={20} />
                    Get in Touch
                  </Button>
                </Link>
                <a
                  href="https://github.com/PritomPaul99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="gap-2">
                    <Github size={20} />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://linkedin.com/in/pritompaul1920"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="gap-2">
                    <Linkedin size={20} />
                    LinkedIn
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="p-6 bg-card border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    3.71
                  </h3>
                  <p className="text-sm text-muted-foreground">CGPA / 4.00</p>
                </div>
                <div className="p-6 bg-card border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    200+
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Students Taught
                  </p>
                </div>
                <div className="p-6 bg-card border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    7.0
                  </h3>
                  <p className="text-sm text-muted-foreground">IELTS Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
