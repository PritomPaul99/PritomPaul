import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Education
            </h1>
            <p className="text-lg text-muted-foreground">
              Academic background and achievements
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground">
                  <GraduationCap size={28} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    Bachelor of Science in Computer Science and Engineering
                  </CardTitle>
                  <div className="space-y-1 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      North East University Bangladesh
                    </p>
                    <p>Sylhet, Bangladesh</p>
                    <p>Graduated: May 2024</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-lg">
                <Award className="text-primary" size={24} />
                <span className="font-semibold">CGPA: 3.71/4.00</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Coursework:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Machine Learning & Deep Learning</li>
                  <li>• Computer Vision</li>
                  <li>• Natural Language Processing</li>
                  <li>• Software Engineering</li>
                  <li>• Database Management Systems</li>
                  <li>• Compiler Construction</li>
                  <li>• Numerical Analysis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary text-secondary-foreground">
                  <Award size={28} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">
                    International English Language Testing System (IELTS)
                  </CardTitle>
                  <p className="text-muted-foreground">February 2025</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-lg">
                  <span className="font-semibold">Overall Band Score: 7.0</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-accent">
                    <p className="text-sm text-muted-foreground mb-1">Listening</p>
                    <p className="text-2xl font-bold">9.0</p>
                  </div>
                  <div className="p-4 bg-accent">
                    <p className="text-sm text-muted-foreground mb-1">Reading</p>
                    <p className="text-2xl font-bold">6.5</p>
                  </div>
                  <div className="p-4 bg-accent">
                    <p className="text-sm text-muted-foreground mb-1">Writing</p>
                    <p className="text-2xl font-bold">6.0</p>
                  </div>
                  <div className="p-4 bg-accent">
                    <p className="text-sm text-muted-foreground mb-1">Speaking</p>
                    <p className="text-2xl font-bold">7.0</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Education;
