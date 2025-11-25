import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Target } from "lucide-react";

const Research = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Research
            </h1>
            <p className="text-lg text-muted-foreground">
              Exploring the frontiers of artificial intelligence
            </p>
          </div>

          <Card className="border-2 bg-card">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary text-primary-foreground">
                  <Target size={28} />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-3">Research Interests</CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      Deep Learning
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      Computer Vision
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      Natural Language Processing
                    </Badge>
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      Large Language Models
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Research Experience
            </h2>
            
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary text-secondary-foreground">
                    <FileText size={28} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">
                      Handwritten Bangla Word Recognition Through Image-to-Sequence Extraction
                    </CardTitle>
                    <div className="space-y-1 text-muted-foreground">
                      <p className="font-medium text-foreground">Undergraduate Thesis</p>
                      <p>North East University Bangladesh</p>
                      <p>January 2023 – December 2023</p>
                      <p>Advisor: Tasnim Zahan</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Designed and trained an Image-to-Sequence OCR model for handwritten 
                      Bangla word recognition using advanced deep learning techniques
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Built a CNN-BiLSTM architecture in Python/TensorFlow with a CTC-based 
                      sequence decoder for accurate character-level prediction
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Collected, curated, and preprocessed 19,066 handwritten samples from 
                      CMATERdb, BanglaWriting, and self-generated data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-bold text-lg">•</span>
                    <p className="text-foreground/80">
                      Achieved <span className="font-semibold text-primary">93.71% accuracy</span>, 
                      demonstrating strong generalization even with a modest dataset size
                    </p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">CNN</Badge>
                    <Badge variant="outline">BiLSTM</Badge>
                    <Badge variant="outline">CTC Loss</Badge>
                    <Badge variant="outline">OpenCV</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-foreground">Projects</h2>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">
                  Handwritten English Word Recognition
                </CardTitle>
                <p className="text-sm text-muted-foreground">Machine Learning Project</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  Developed a deep learning model that recognizes handwritten English words 
                  from single-word images using CNN-RNN architecture with CTC loss.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">CNN</Badge>
                  <Badge variant="outline">RNN (Bi-LSTM)</Badge>
                  <Badge variant="outline">CTC Loss</Badge>
                </div>
                <a 
                  href="https://github.com/PritomPaul99/Handwritten-English-Word-Recognition-Using-CNN-RNN-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-block"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">TripIt</CardTitle>
                <p className="text-sm text-muted-foreground">Web Application</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  Full-stack travel booking platform with user authentication, hotel booking, 
                  destination search, and blogging features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">MySQL</Badge>
                </div>
                <a 
                  href="https://github.com/PritomPaul99/TripIt_SEProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-block"
                >
                  View on GitHub →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Research;
