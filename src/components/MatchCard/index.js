// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatch
  const statusClassName = matchStatus === 'Won' ? 'won-status' : 'lose-status'
  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-match-image"
      />
      <p className="recent-match-opponent">{competingTeam}</p>
      <p className="recent-match-result">{result}</p>
      <p className={`recent-match-status ${statusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
