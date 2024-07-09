import React from "react";

const CurrencyCon = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pb-10 flex justify-center items-center">
      <div className="h-fit w-[90vw] mx-16 rounded-xl">
        <h1 className="text-3xl font-bold text-center my-5 text-white">
          Currency Convertor using Api
        </h1>
        <img src="/currency.png" className="w-[70vw] mx-40 rounded-xl" />
        <div className="flex justify-center">
          <div>
            <div className="w-fit h-fit p-10 m-10 bg-zinc-800 rounded-xl">
              <ul className="mx-5 list-disc">
                Concepts and languages used
                <li>Javascript [Asynchronous]</li>
                <li>HTML and CSS</li>
                <li>API</li>
              </ul>
            </div>
            <div className="w-96 h-fit p-10 m-10 bg-zinc-800 rounded-xl">
              <div className="flex justify-center bg-sky-400 rounded-md">
              <h1 className="text-2xl text-center font-bold text-zinc-900 p-3">
                Functionality </h1>{" "}
              <h1 className="my-2"><img src="/setting.png" className="w-10" /></h1>
              </div>
              <br />
              <p className="text-lg">
                1.{" "}
                <span className="font-bold text-xl text-sky-400">
                  Currency Selection
                </span>{" "}
                : Users can choose the base currency (the currency they have)
                and the target currency (the currency they want to convert to)
                from dropdown menus. <br />
                2.
                <span className="font-bold text-xl text-sky-400">
                  {" "}
                  Amount Input
                </span>{" "}
                : Users can enter the amount of money they wish to convert.{" "}
                <br />
                3.
                <span className="font-bold text-xl text-sky-400">
                  {" "}
                  Conversion Calculation
                </span>{" "}
                : Upon submitting the amount and currency selections, the
                application makes an API call to fetch the latest exchange rate
                and calculates the converted amount. <br />
                4.
                <span className="font-bold text-xl text-sky-400">
                  {" "}
                  Display Results
                </span>{" "}
                : The converted amount is displayed to the user along with the
                exchange rate used for the conversion.
              </p>
            </div>
          </div>
          <div className="my-10 w-[700px]">
            <h1 className="text-center text-xl font-bold">
              All the concepts used in the project
            </h1>
            <p className="font-semibold text-xl text-sky-400">
              1. All About API{" "}
            </p>
            <p className="text-lg">
              Ans : API stands for{" "}
              <span className="text-sky-400">
                Application Programming Interface
              </span>{" "}
              . It basically means that we can use data created by some person
              or organization . The data is returned in the form of JSON (i.e in
              javascript object fromat) . API is a url that we use to obtain the
              data we need . API can be of any thing E.g Food recipes,currency
              rates..etc . In javascript api is fetched using{" "}
              <span className="text-sky-400">asynchronous javascript</span> The
              part of this javascript used for accessing the api is fetch ,
              async and await operations . The reason behind using Asynchronous
              javascript is because we cannot guess the exact timing the api
              will take to return the data so async js is used
            </p>
            <br />
            <p className="font-semibold text-xl text-sky-400">
              2. All about fetch , async and await
            </p>
            <p className="text-lg">
              Ans : fetch in javascript is mainly used for fetching api and
              always remember that this is and asynchronous operation and
              associated with<span className="text-sky-400"> await </span> which
              stops the execution till the data comes and one important thing
              <span className="text-sky-400">
                {" "}
                if you're using await then the nearest parent function should be
                async function compulsory
              </span>
            </p> <br />
            <h1 className="text-2xl text-center font-bold">API used</h1> <br />
            <h1 className="text-xl text-center bg-yellow-400 text-black rounded-md">https://latest.currency-api.pages.dev/v1/currencies/eur.json</h1>
            <h1 className="text-center my-10 font-bold text-2xl">Use the App here !</h1>
            <a href="https://github.com/dashboard"><button className="bg-zinc-700 p-3 rounded-md px-10 mx-72 -my-6">Github</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCon;
