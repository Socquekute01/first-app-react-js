import { useEffect, useState } from "react";

const listCompany = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

function UseEffectLesson() {
  const [companies, setCompanies] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const [count, setCount] = useState(0);

  const GetUserDataFromServer = () => {
    return new Promise((resolve, _) => {
      resolve(listCompany);
    });
  };
  //gọi api
  useEffect(() => {
    if (isFetch) {
      GetUserDataFromServer().then((result) => setCompanies(result));
    }
  }, [isFetch]);

  //đăng kí sự kiện
  useEffect(() => {
    const buttonClick = document.querySelector("button");
    buttonClick.addEventListener("click", () => {
      setCount(count + 1);
    });
    return () => {
      buttonClick.removeEventListener("click", () => {});
    };
  }, []);

  //subscriptions
  useEffect(() => {
    console.log("Count change");
  }, [count]);

  //render dom
  useEffect(() => {
    console.log("Render dom..");
  });

  return (
    <>
      <button onClick={() => setIsFetch(!isFetch)}>Get List Company</button>
    </>
  );
}

export default UseEffectLesson;
