import * as React from "react";
import { Card } from "./Card";
import { BrowserRouter as Router, Route } from "react-router-dom";

const List = ({ match, history }) => (
  <ul className="card-list">
    {cardData.map(card => (
      <Card
        key={card.id}
        isSelected={match.params.id === card.id}
        history={history}
        {...card}
      />
    ))}
  </ul>
);

const MultiPList = ({ match, history }) => (
    <ul className="card-list">
      {multiData.map(card => (
        <Card
          key={card.id}
          isSelected={match.params.id === card.id}
          history={history}
          {...card}
        />
      ))}
    </ul>
  );

  const playList = ({ match, history }) => (
    <ul className="card-list">
      {playData.map(card => (
        <Card
          key={card.id}
          isSelected={match.params.id === card.id}
          history={history}
          {...card}
        />
      ))}
    </ul>
  );

  const habitList = ({ match, history }) => (
    <ul className="card-list">
      {habitData.map(card => (
        <Card
          key={card.id}
          isSelected={match.params.id === card.id}
          history={history}
          {...card}
        />
      ))}
    </ul>
  );

export const CardList = () => (
  <Router>
    <Route path={["/:id", "/"]} component={List} />
  </Router>
);

export const MultiList = () => (
    <Router>
      <Route path={["/:id", "/"]} component={MultiPList} />
    </Router>
  );

  export const PlayList = () => (
    <Router>
      <Route path={["/:id", "/"]} component={playList} />
    </Router>
  );

  export const HabitList = () => (
    <Router>
      <Route path={["/:id", "/"]} component={habitList} />
    </Router>
  );

const cardData = [
  // Photo by ivan Torres on Unsplash
  {
    id: "k",
    category: "Tech",
    title: "Partcipate in a Hackathon!",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  {
    id: "c",
    category: "Arcade",
    title: "Play Atari Breakout to relive the old ages",
    pointOfInterest: 80,
    backgroundColor: "#814A0E"
  },
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "Movies",
    title: "Great movies to watch during quarantine",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Health",
    title: "A Yoga session for a better you",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  // Photo by Taneli Lahtinen on Unsplash
  {
    id: "g",
    category: "Read",
    title: "Our Pick of Books to Help You Escape From Apps",
    pointOfInterest: 200,
    backgroundColor: "#8F986D"
  },
  // Photo by Simone Hutsch on Unsplash
  {
    id: "d",
    category: "Mindfulness",
    title: "15 Minutes for a better day",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  },
  // Photo by Siora Photography on Unsplash
  {
    id: "h",
    category: "Food",
    title: "Baking to beat the blues",
    pointOfInterest: 60,
    backgroundColor: "#282F49"
  },
  // Photo by Yerlin Matu on Unsplash
  {
    id: "e",
    category: "Art",
    title: "Draw away all your worries",
    pointOfInterest: 200,
    backgroundColor: "#AC7441"
  },
  // Photo by Ali Abdul Rahman on Unsplash
  {
    id: "b",
    category: "Arcade",
    title: "A quick 15 minute session to jog your mind",
    pointOfInterest: 260,
    backgroundColor: "#CC555B"
  }
];

const multiData = [
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "Movies",
    title: "Great movies to watch during quarantine",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Health",
    title: "A Yoga session for a better you",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  {
    id: "d",
    category: "Mindfulness",
    title: "15 Minutes for a better day",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  }
];

const habitData = [
  // Photo by Dennis Brendel on Unsplash
  {
    id: "f",
    category: "Movies",
    title: "Great movies to watch during quarantine",
    pointOfInterest: 120,
    backgroundColor: "#959684"
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: "a",
    category: "Health",
    title: "A Yoga session for a better you",
    pointOfInterest: 260,
    backgroundColor: "#5DBCD2"
  },
  {
    id: "d",
    category: "Mindfulness",
    title: "15 Minutes for a better day",
    pointOfInterest: 150,
    backgroundColor: "#FA6779"
  }
];

  

  const playData = [
    // Photo by ivan Torres on Unsplash
    {
      id: "c",
      category: "Arcade",
      title: "Play Atari Breakout to relive the old ages",
      pointOfInterest: 80,
      backgroundColor: "#814A0E"
    },
    {
      id: "e",
      category: "Art",
      title: "Draw away all your worries on Skribbl.io",
      pointOfInterest: 200,
      backgroundColor: "#AC7441"
    },
    // Photo by Ali Abdul Rahman on Unsplash
    {
      id: "b",
      category: "Arcade",
      title: "A quick 15 minute session to jog your mind",
      pointOfInterest: 260,
      backgroundColor: "#CC555B"
    }]