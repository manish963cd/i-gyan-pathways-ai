import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  MessageCircle, 
  Send, 
  Brain, 
  BookOpen, 
  Hammer, 
  Trophy, 
  Briefcase,
  Calendar,
  FileText,
  Upload,
  Users,
  GraduationCap,
  Building2,
  Heart,
  Star,
  Zap,
  Target,
  Rocket,
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-ai-education.jpg";

const Index = () => {
  const [chatInput, setChatInput] = useState("");
  const [showRoadmap, setShowRoadmap] = useState(false);
  const [learnerCount, setLearnerCount] = useState(12847);

  const handleChatSubmit = () => {
    if (chatInput.toLowerCase().includes("software engineer")) {
      setShowRoadmap(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="relative z-50 border-b border-border/50 backdrop-blur-lg bg-background/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">I-GYAN</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
            <a href="#showcase" className="text-foreground/80 hover:text-primary transition-colors">Showcase</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
            <Button variant="gradient" size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-primary">🚀 AI-Powered Learning</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  The Future of 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> Education </span>
                  is Here
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Discover your perfect career path with AI guidance, build real projects, and get hired by top companies.
                </p>
              </div>

              {/* AI Chat Interface */}
              <Card className="bg-gradient-card shadow-glow border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">AI Career Assistant</p>
                      <p className="text-sm text-muted-foreground">Hi! What would you like to learn or become?</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="I want to become a software engineer..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="flex-1"
                      onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit()}
                    />
                    <Button variant="gradient" size="icon" onClick={handleChatSubmit}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* AI Response Roadmap */}
                  {showRoadmap && (
                    <div className="mt-6 p-4 bg-accent-soft rounded-lg border border-accent/30 animate-fade-in">
                      <h4 className="font-semibold text-primary mb-3">🎯 Your Software Engineer Roadmap</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>Master HTML, CSS, JavaScript fundamentals (2-3 months)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>Learn React & Node.js (2-3 months)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>Build 3 portfolio projects (1-2 months)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span>Practice coding interviews (1 month)</span>
                        </div>
                      </div>
                      <Button variant="ai" size="sm" className="mt-4">Start Learning Path</Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Live Stats */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-lg font-semibold">{learnerCount.toLocaleString()}</span>
                  <span className="text-muted-foreground">learners online</span>
                </div>
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <Avatar key={i} className="border-2 border-background w-8 h-8">
                      <AvatarImage src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000}?w=32&h=32&fit=crop&crop=face`} />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="AI Education Platform" 
                className="rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Learn Build Show Get Hired Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How I-GYAN Works</h2>
            <p className="text-xl text-muted-foreground">Your journey from learning to career success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">📚 Learn</h3>
              <p className="text-muted-foreground">AI-personalized learning paths with interactive content</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Hammer className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">🔨 Build</h3>
              <p className="text-muted-foreground">Create real projects with mentor guidance</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">🏆 Show</h3>
              <p className="text-muted-foreground">Showcase your work in our talent marketplace</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">💼 Get Hired</h3>
              <p className="text-muted-foreground">Connect with companies actively hiring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section id="features" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need for career success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>🧠 AI Study Planner</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Personalized learning schedules that adapt to your pace and goals</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>🤖 Resume + Interview Bot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">AI-powered resume optimization and mock interview practice</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>📁 Upload Your Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Showcase your work with automatic skill analysis and feedback</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>👥 Join Mentor Sessions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Connect with industry experts for personalized guidance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Login Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Journey</h2>
            <p className="text-xl text-muted-foreground">Different paths for different goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">🎓 Student</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Discover • Learn • Submit Projects</p>
                <ul className="text-sm space-y-2 text-left">
                  <li>• AI-powered learning paths</li>
                  <li>• Project submission & feedback</li>
                  <li>• Skill badges & certifications</li>
                  <li>• Career guidance</li>
                </ul>
                <Button variant="gradient" className="w-full">Join as Student</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-accent/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">👨‍🏫 Teacher</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Guide Students • Give Feedback</p>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Create learning content</li>
                  <li>• Review student projects</li>
                  <li>• Conduct mentor sessions</li>
                  <li>• Earn from teaching</li>
                </ul>
                <Button variant="ai" className="w-full">Join as Teacher</Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">🏢 Company HR</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">Post Tasks • View Talent Dashboard</p>
                <ul className="text-sm space-y-2 text-left">
                  <li>• Access talent pool</li>
                  <li>• Post hiring challenges</li>
                  <li>• Review portfolios</li>
                  <li>• AI-matched candidates</li>
                </ul>
                <Button variant="gradient" className="w-full">Join as Company</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Showcase Feed */}
      <section id="showcase" className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Student Showcase</h2>
            <p className="text-xl text-muted-foreground">Real projects from our community</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Sarah Chen", project: "AI Recipe Generator", skills: ["React", "Python", "OpenAI"], likes: 234 },
              { name: "Alex Kumar", project: "Crypto Portfolio Tracker", skills: ["Vue.js", "Node.js", "MongoDB"], likes: 189 },
              { name: "Maya Patel", project: "Language Learning App", skills: ["Flutter", "Firebase", "TensorFlow"], likes: 156 },
            ].map((item, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://images.unsplash.com/photo-${1600000000000 + index * 10000000}?w=40&h=40&fit=crop&crop=face`} />
                      <AvatarFallback>{item.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.project}</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </button>
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">12</span>
                      </button>
                    </div>
                    <Button variant="ghost" size="sm">View Project</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Your Digital Profile</h2>
              <p className="text-xl text-muted-foreground">
                Build a professional profile that showcases your skills, projects, and achievements.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <span>Earn skill badges and certifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <Target className="w-4 h-4 text-accent" />
                  </div>
                  <span>Track learning progress and goals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <span>Get AI-powered career recommendations</span>
                </div>
              </div>
              <Button variant="gradient" size="lg">Create Your Profile</Button>
            </div>
            
            <Card className="bg-gradient-card shadow-glow">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b2a1c4e0?w=64&h=64&fit=crop&crop=face" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Jane Doe</h3>
                    <p className="text-muted-foreground">Frontend Developer</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">4.9 rating</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Skills & Badges</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary/10 text-primary border-primary/30">React Expert</Badge>
                      <Badge className="bg-accent/10 text-accent border-accent/30">CSS Master</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/30">TypeScript Pro</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Recent Projects</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span>E-commerce Dashboard - Completed</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span>Chat Application - In Progress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground">Hear from our community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Rahul Singh", role: "Software Engineer at Google", text: "I-GYAN's AI guidance helped me land my dream job in just 6 months!" },
              { name: "Priya Sharma", role: "Data Scientist at Microsoft", text: "The personalized learning path and mentor support were game-changers for my career." },
              { name: "David Chen", role: "Full Stack Developer at Stripe", text: "From zero coding knowledge to a tech job - I-GYAN made it possible!" },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://images.unsplash.com/photo-${1550000000000 + index * 10000000}?w=40&h=40&fit=crop&crop=face`} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-5xl font-bold">Join the Future of Learning!</h2>
            <p className="text-xl text-muted-foreground">
              Start your AI-powered journey today and transform your career with personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="xl" className="text-lg">
                Get Started Free
                <Rocket className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="ai" size="xl" className="text-lg">
                Watch Demo
                <Brain className="w-5 h-5 ml-2" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>AI-powered guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Real job placements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">I-GYAN</span>
              </div>
              <p className="text-background/80">Empowering careers through AI-powered education</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">For Students</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Teachers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Companies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Learning Paths</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 I-GYAN. All rights reserved. Building the future of education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
