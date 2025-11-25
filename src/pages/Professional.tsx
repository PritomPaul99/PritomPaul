import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Users } from "lucide-react";

const Professional = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Professional Experience
            </h1>
            <p className="text-lg text-muted-foreground">
              My journey in software engineering and education
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Teaching Experience
            </h2>
            
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary text-primary-foreground">
                    <GraduationCap size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Adjunct Faculty</CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-medium text-foreground">
                        Department of Computer Science and Engineering
                      </p>
                      <p>North East University Bangladesh, Sylhet</p>
                      <p>January 2025 – Present</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Teaching core undergraduate courses including Compiler Construction, 
                      Software Engineering and Design Patterns, Numerical Analysis, and 
                      Introduction to Statistics
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Instructing and mentoring <span className="font-semibold text-primary">
                      200+ students</span> across multiple semesters, emphasizing conceptual 
                      clarity and problem-solving
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Developing lectures, lab modules, and assessments aligned with program 
                      objectives and industry-relevant practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Industry Experience
            </h2>
            
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary text-secondary-foreground">
                    <Briefcase size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Software Engineer</CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-medium text-foreground">101 BD TECH</p>
                      <p>Jamalpur, Bangladesh</p>
                      <p>July 2024 – December 2024 (Full Time)</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Built core components of a WebRTC-powered Learning Management System 
                      for both web and desktop platforms
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Wrote clean, efficient code in Python and JavaScript, improving system 
                      performance through debugging and optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Designed scalable application modules and implemented backend integrations 
                      using SQL and NoSQL databases
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-secondary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Maintained technical documentation, collaborated within SDLC workflow, 
                      and managed version control using Git
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">WebRTC</Badge>
                    <Badge variant="outline">SQL</Badge>
                    <Badge variant="outline">NoSQL</Badge>
                    <Badge variant="outline">Git</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Volunteer Experience
            </h2>
            
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent text-accent-foreground">
                    <Users size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      Associate Programming Instructor
                    </CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-medium text-foreground">
                        North East University Bangladesh CSE Society
                      </p>
                      <p>January 2021 – December 2023</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Instructed approximately <span className="font-semibold text-primary">
                      100 junior undergraduate students</span> in programming languages 
                      (C/C++, Python), data structures, algorithms, and problem-solving
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Spearheaded the organization of 3-4 programming contests and actively 
                      participated in problem development
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">Skills</h2>
            
            <Card className="border-2">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C/C++</Badge>
                    <Badge>Python</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>Dart</Badge>
                    <Badge>PHP</Badge>
                    <Badge>Go</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>Bootstrap</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Machine Learning & AI</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Deep Learning</Badge>
                    <Badge>Computer Vision</Badge>
                    <Badge>TensorFlow</Badge>
                    <Badge>Keras</Badge>
                    <Badge>Scikit-learn</Badge>
                    <Badge>PyTorch</Badge>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Database & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MySQL</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Git</Badge>
                    <Badge>Flutter</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Professional;
