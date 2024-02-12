// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData
  return (
    <div className="latest-match-container">
      <p className="latest-match">Latest Matches</p>
      <div className="latest-match-card">
        <div className="latest-match-opponent-container">
          <div className="latest-match-opponent-details">
            <p className="latest-match-opponent-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match-venue-result">{venue}</p>
            <p className="latest-match-venue-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-opponent-logo"
          />
        </div>
        <hr />
        <p className="innings-text">First Innings</p>
        <p className="innings-details">{firstInnings}</p>
        <p className="innings-text">Second Innings</p>
        <p className="innings-details">{secondInnings}</p>
        <p className="innings-text">Man Of The Match</p>
        <p className="innings-details">{manOfTheMatch}</p>
        <p className="innings-text">Umpires</p>
        <p className="innings-details">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
