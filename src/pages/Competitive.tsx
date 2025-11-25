import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Code } from "lucide-react";

const Competitive = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Competitive Programming
            </h1>
            <p className="text-lg text-muted-foreground">
              Journey through algorithmic challenges and competitions
            </p>
          </div>

          <Card className="border-2 bg-gradient-to-br from-card to-accent">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground">
                  <Code size={28} />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">About Competitive Programming</CardTitle>
                  <p className="text-foreground/80">
                    Competitive programming has been an integral part of my journey as a 
                    computer scientist. Through rigorous practice in data structures and 
                    algorithms, I've developed strong problem-solving skills and the ability 
                    to write efficient, optimized code under time constraints.
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
              <Trophy className="text-primary" size={32} />
              Contest Participation
            </h2>
            
            <div className="grid gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">ICPC Asia Dhaka Regional Contest</CardTitle>
                  <p className="text-sm text-muted-foreground">2023</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-foreground/80">
                      <span className="font-semibold">Team:</span> NEUB_Believers
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Competed in the prestigious ICPC regional contest, solving complex 
                      algorithmic problems alongside talented programmers from across Asia.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">ICPC Asia Dhaka Regional Contest</CardTitle>
                  <p className="text-sm text-muted-foreground">2022</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-foreground/80">
                      <span className="font-semibold">Team:</span> NEUB_TeamXero
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Participated in the ICPC regional round, tackling challenging problems 
                      in algorithms, data structures, and mathematical reasoning.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">ICPC Asia Dhaka Regional Contest</CardTitle>
                  <p className="text-sm text-muted-foreground">2021</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-foreground/80">
                      <span className="font-semibold">Team:</span> NEUB_TeamXero
                    </p>
                    <p className="text-sm text-muted-foreground">
                      First participation in ICPC, marking the beginning of my competitive 
                      programming journey at the international level.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">NCPC ONSITE</CardTitle>
                  <p className="text-sm text-muted-foreground">2023</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-foreground/80">
                      <span className="font-semibold">Team:</span> NEUB_Believers
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Competed in the National Collegiate Programming Contest, showcasing 
                      problem-solving skills against teams from universities across Bangladesh.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Skills Developed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Technical Skills</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Advanced Data Structures</li>
                    <li>• Algorithm Design & Analysis</li>
                    <li>• Graph Theory</li>
                    <li>• Dynamic Programming</li>
                    <li>• Mathematical Problem Solving</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Soft Skills</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Team Collaboration</li>
                    <li>• Time Management</li>
                    <li>• Strategic Thinking</li>
                    <li>• Problem Decomposition</li>
                    <li>• Performance Under Pressure</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Competitive;
