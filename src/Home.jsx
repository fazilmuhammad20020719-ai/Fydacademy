import Hero from './Pages/Home/Hero';
import WhyLearn from './Pages/Home/WhyLearn';
import CourseSection from './Pages/Home/CourseSection';
import MeetTheTeam from './Pages/Home/MeetTheTeam';
import MailingList from './Pages/Home/MailingList';
import YouTubeSection from './Pages/Home/YouTubeSection';
import JoinCourse from './Pages/Home/JoinCourse';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';


const Home = () => {
  return (
    <div className="relative w-full">

      <Hero />
      <ScrollReveal delay={0.1}>
        <WhyLearn />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <CourseSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <MeetTheTeam />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <MailingList />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <YouTubeSection />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <JoinCourse />
      </ScrollReveal>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
