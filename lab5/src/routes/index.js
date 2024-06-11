import HomePage from "../pages";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import NewsPage from "../pages/news";
import QuizPage from "../pages/quiz";

export const publicRoute = [
  { path: "/", element: HomePage },
  { path: "/news", element: NewsPage },
  { path: "/contact", element: ContactPage },
  { path: "/about", element: AboutPage },
  { path: "/quiz", element: QuizPage },
];
