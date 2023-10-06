import React from "react";
import "@/public/CSS/Credit.css";

export default function Credit(props) {
  return (
    <div>
      <h1 className="text-5xl my-10 ">Credit</h1>
      <div className="credit-container grid grid-flow-col gap-10 overflow-x-scroll">
        {props.credit &&
          props.credit.map((people) => {
            return (
              <>
                <div className="grid justify-center items-center gap-2 w-36 ">
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={
                      people.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                        : "https://media.istockphoto.com/id/530297753/fr/vectoriel/homme-adulte-avatar-de-vecteur-photo-de-profil.jpg?s=170667a&w=0&k=20&c=krn5A7PyqSMFubweET1pIe8IguQ-3zvF500HyAIo_dg="
                    }
                    alt="image"
                  />
                  <h3>{people.name}</h3>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
}
