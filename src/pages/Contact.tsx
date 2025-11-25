import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyd65EUHk-voBZKS-2qDAO3co999GWIiJCimrWgdtgHHVeFVU6qNQ9HrXSw2kKy-0u0/exec"; // replace with your Web App URL
    const WEBHOOK_TOKEN = "I_am_Pritom"; // match Apps Script token

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: WEBHOOK_TOKEN,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data && data.success) {
        toast({
          title: "Message Sent!",
          description: "Thanks — your message was saved to the spreadsheet.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Apps Script error:", data);
        toast({
          title: "Send failed",
          description: data && data.error ? data.error : "Unknown error",
        });
      }
    } catch (err) {
      console.error("Network / fetch error:", err);
      toast({
        title: "Send failed",
        description: "Network error. Try again or check the script URL/token.",
      });
    }
  };


  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Feel free to reach out for collaborations, research opportunities, or just to say hello
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary text-primary-foreground">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a 
                        href="mailto:pritompaul.cse@gmail.com"
                        className="text-muted-foreground hover:text-primary"
                      >
                        pritompaul.cse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary text-secondary-foreground">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <a 
                        href="tel:+8801718382009"
                        className="text-muted-foreground hover:text-primary"
                      >
                        (+880) 1718-382009
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent text-accent-foreground">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p className="text-muted-foreground">Sylhet, Bangladesh</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Social Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://github.com/PritomPaul99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-accent hover:bg-accent/70 transition-colors"
                  >
                    <Github size={24} className="text-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">GitHub</p>
                      <p className="text-sm text-muted-foreground">@PritomPaul99</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com/in/pritompaul1920"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-accent hover:bg-accent/70 transition-colors"
                  >
                    <Linkedin size={24} className="text-foreground" />
                    <div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">@pritompaul1920</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
