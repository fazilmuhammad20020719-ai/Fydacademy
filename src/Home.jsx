import Hero from './Pages/Home/Hero';
import WhyLearn from './Pages/Home/WhyLearn';
import CourseSection from './Pages/Home/CourseSection';
import MeetTheTeam from './Pages/Home/MeetTheTeam';
import MailingList from './Pages/Home/MailingList';
import YouTubeSection from './Pages/Home/YouTubeSection';
import JoinCourse from './Pages/Home/JoinCourse';
import Footer from './components/Footer';


const Home = () => {
  return (
    <div className="relative w-full">

      <Hero />
      <WhyLearn />
      <CourseSection />
      <MeetTheTeam />
      <MailingList />
      <YouTubeSection />
      <JoinCourse />
      <Footer />
    </div>
  );
};

export default Home;
