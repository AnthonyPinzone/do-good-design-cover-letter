---
id: 2
question: "Write modern, modular Javascript?"
---

Modern, modular Javascript is what I work on getting better at the most as a developer. Lately I've been trying to create more with Gatsby, it helps me learn something new while at the same time practice my React skills.

This site you're viewing now will actually be my second Gatsby site put into production!
  
[View the codebase for this site](https://github.com/AnthonyPinzone/do-good-design-cover-letter) or [checkout my Miami Dolphins themed offseason tracker](https://github.com/AnthonyPinzone/miami-dolphins-offseason), both on Github. 

Below are some snippets from the aforementioned offseason tracker. In this particular site, I built out my own JSON and used that data to populate the Dolphins draft picks. I'd suggest checking out the repo linked above, as there's a lot of components and moving parts.

###drafted-players.json
```JSON
[
    {
        "details": {
            "name": "Tua Tagovailoa",
            "position": "Quarterback",
            "image": "https://imagecomposer.nfl.com/?l=http://static.nfl.com/static/content/static/img/combine/2020/headshots/1400x1000/2564071.png&f=png&w=308&c=71"
        },
        "meta": {
            "school": "Alabama",
            "height": "6'0\"",
            "weight": "217",
            "round": "1",
            "roundPick": "5",
            "overallPick": "5",
            "nflGrade": "6.77",
            "espnGrade": "93"
        },
        "analysis": {
            "quote": "Talented dual-threat quarterback with winning background, explosive production and loads of experience in high-leverage games. He may be pigeon-holed into a spread or RPO-heavy attack, but he's actually a clean fit in a pro-style attack filled with play-action and roll-outs. He has the release, accuracy and touch needed to work all three levels successfully and can become a more disciplined, full-field reader to piece the puzzle together against NFL coverages. He needs better poise when pressured, but his escapability not only moves the chains, it creates chunk plays in the air and on the ground. Teams assessing his draft value will need to sift through mounting durability concerns and decide whether he is a \"face of the franchise\" talent without the abundance of talent surrounding him.",
            "cite": {
                "link": "https://www.nfl.com/prospects/tuanigamanuolepola-tagovailoa?id=32195441-4762-0344-3a46-269f5e5e854e",
                "text": "Photo and analysis taken from NFL.com"
            }
        }
    }
]
```

###DraftCard.jsx
```JSX
export default function DraftCard(props) {
    return (
        <div className={`draft-card ${styles.draftCard}`}>
            {props.trade && <TradeAlert {...props.trade} />}

            <PlayerDetails {...props.details} />

            <PlayerAnalysis
                id={`${props.round}${props.roundPick}${props.overallPick}`}
                {...props.analysis}
            />

            <PlayerMeta {...props.meta} />
        </div>
    );
}
```

###PlayerDetails.jsx
```JSX
export default function PlayerDetails(props) {
    return (
        <div className={styles.playerDetails}>
            <h3 className={styles.playerName}>
                <span className={styles.playerPosition}>
                    {props.position ? props.position : "Position"}
                </span>{" "}
                {props.name ? props.name : "Player Name"}
            </h3>
            <figure className="player-image">
                <img
                    src={props.image ? props.image : PlaceholderImage}
                    alt={props.name}
                />
            </figure>
        </div>
    );
}
```

###TradeAlert.jsx
```JSX
export default function TradeAlert(props) {
    const [isAlertOpen, setAlertOpen] = useState(false);
    const toggleAlert = () => setAlertOpen(!isAlertOpen);

    return (
        <div
            className={`${styles.tradeAlert} ${
                isAlertOpen ? styles.tradeAlertOpen : ""
            }`}
        >
            <button className={styles.tradeAlertToggle} onClick={toggleAlert}>
                {isAlertOpen ? (
                    <HighlightOffOutlinedIcon className={styles.iconWiggle} />
                ) : (
                    <NotificationsActiveOutlinedIcon />
                )}
            </button>
            <h4 className={styles.tradeAlertTitle}>Trade Alert!</h4>{" "}
            <div className={styles.tradeAlertDetails}>
                <strong>Miami Dolphins Receive</strong>
                <ul>
                    {props.received.map((pick, index) => (
                        <li key={`received-${index}`}>{pick}</li>
                    ))}
                </ul>
            </div>
            <div className={styles.tradeAlertDetails}>
                <strong>{props.partner} Receive</strong>
                <ul>
                    {props.gave.map((pick, index) => (
                        <li key={`gave-${index}`}>{pick}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
```